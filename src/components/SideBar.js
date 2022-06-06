import { useState, useEffect } from "react";
import "../styles/DevHireStyle/SideBar.css";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import HomepageDevHire from "../components/HomepageDevHire";
import axios from "axios";
import Favourite from "./Favourite";

const apiData =
  "https://api.terawork.com/service-categories/sellers-services/computer-software-development";

const SideBar = () => {
  const [developers, setDevelopers] = useState([]);
  const [favorites, setfavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  const addToFavorite = (developer) => {
    if (favorites.find((fav) => fav._id === developer._id)) {
      return;
    }
    const newFavorite = [...favorites, developer];

    setfavorites(newFavorite);
  };

  const removeFromFavorite = (developer) => {
    const newFavorite = [...favorites];
    const updatedFavorite = newFavorite.filter(
      (oldFavorite) => oldFavorite._id !== developer._id
    );
    setfavorites(updatedFavorite);
  };

  const toggleCurrentPage = (newPage) => {
    setCurrentPage(newPage);
  };
  // const [error, setError] = useState('')

  useEffect(() => {
    async function getAllDevelopers() {
      const response = await axios.get(apiData);
      // console.log(response.data.data.service_search_results.hits._source)
      setDevelopers(response.data.data.service_search_results.hits);
    }
    getAllDevelopers();
  }, []);

  return (
    <div className="side-bar-container">
      <div id="side-bar">
        <div>
          <div className="header">
            <p className="dev-hire">
              Dev<span>Hire</span>
            </p>
          </div>
          <div className="home-container">
            <div>
              <div className="home-sec">
                <div
                  onClick={() => {
                    toggleCurrentPage("home");
                  }}
                >
                  <FaSearch className="side-icons" />
                </div>

                <div className="sidebar-icon">
                  <div>
                    <div
                      onClick={() => {
                        toggleCurrentPage("home");
                      }}
                    >
                      <h5 className="home home-style">Home</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-container">
                <div className="home-sec">
                  <div
                    onClick={() => {
                      toggleCurrentPage("favorite");
                    }}
                  >
                    <FaRegHeart className="side-icons" />
                  </div>

                  <div
                    onClick={() => {
                      toggleCurrentPage("favorite");
                    }}
                  >
                    <h5 className="home">Favorite</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentPage === "home" ? (
        <div>
          <HomepageDevHire
            developers={developers}
            addToFavorite={addToFavorite}
            favorites={favorites}
          />
        </div>
      ) : (
        <div>
          <Favourite
            favorite={favorites}
            removeFromFavorite={removeFromFavorite}
          />
        </div>
      )}
    </div>
  );
};

export default SideBar;
