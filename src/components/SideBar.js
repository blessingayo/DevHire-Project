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
            <div
              onClick={() => {
                toggleCurrentPage("home");
              }}
              className="home-sec"
            >
              <div>
                <FaSearch className="side-icons" />
              </div>

              <div className="sidebar-icon">
                <div>
                  <p className="home home-style">Home</p>
                </div>
              </div>
            </div>
          </div>

          <div className="home-container">
            <div
              onClick={() => {
                toggleCurrentPage("favorite");
              }}
              className="home-sec"
            >
              <div>
                <FaRegHeart className="side-icons" />
              </div>

              <div>
                <p className="home">Favorite</p>
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
