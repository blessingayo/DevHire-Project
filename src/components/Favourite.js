import React from "react";
import "../styles/DevHireStyle/Favourite.css";
import { FaHeart } from "react-icons/fa";

const Favourite = ({ favorite, removeFromFavorite }) => {
  return (
    <div>
      <div className="hire-section">
        <div>
          <p className="hire-developers">Favorite</p>
          <div className="main-container">
            {favorite.map((developer, i) => {
              return (
                <div className="each-developer">
                  <div
                    style={{ marginLeft: "15px" }}
                    className="developers-container"
                  >
                    <div className="con">
                      <div className="all-images">
                        <div>
                          <img
                            className="service-photo"
                            src={developer._source.service_photo}
                            alt=""
                          />
                          <button className="addFavorite-btn">
                            <span>
                              <FaHeart className="selected-hearts" />
                            </span>
                          </button>
                        </div>
                        <img
                          className="avatar"
                          src={developer._source.avatar}
                          alt=""
                        />

                        <div className="text-container  currency-price">
                          <div className="">
                            <h5>{developer._source.display_name}</h5>
                            <h6 className="amount">
                              {developer._source.currency_name}{" "}
                              {developer._source.starting_from}
                            </h6>
                          </div>

                          <div>
                            {" "}
                            <h6 className="hired">Hired</h6>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div></div>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => {
                          removeFromFavorite(developer);
                        }}
                      >
                        Remove favorite
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
