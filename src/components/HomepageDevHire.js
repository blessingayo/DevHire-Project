import React, { useState } from "react";
import "../styles/DevHireStyle/HomepageDevHire.css";
import Currency from "../components/Currency.js";
// import redHeart from "../images/redHeart.svg";
import { FaHeart } from "react-icons/fa";

const HomepageDevHire = ({ developers, addToFavorite, favorites }) => {
  const [currency, setCurrency] = useState({});

  return (
    <div className="homePage-section">
      <div className="hire-section">
        <div>
          <p className="hire-developers">Hire Top Developers</p>
          <div className="main-container">
            {developers.map((developer, i) => {
              return (
                <div className="each-developer">
                  <div className="developers-container">
                    <div className="con">
                      <div className="all-images">
                        <div>
                          <img
                            className="service-photo"
                            src={developer._source.service_photo}
                            alt=""
                          />
                          <button
                            className="addFavorite-btn"
                            onClick={() => {
                              addToFavorite(developer);
                            }}
                          >
                            <span>
                              <FaHeart
                                className={
                                  favorites.find(
                                    (fav) => fav._id === developer._id
                                  )
                                    ? "selected-hearts"
                                    : "hearts"
                                }
                              />
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
                              {currency.short ||
                                developer._source.currency_name}
                              {currency.short
                                ? parseInt(
                                    developer._source.starting_from /
                                      currency.divider
                                  ).toFixed()
                                : developer._source.starting_from}
                            </h6>
                          </div>

                          <div>
                            <h6 className="hired">Hired</h6>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <Currency setCurrency={setCurrency} />
        </div>
      </div>
    </div>
  );
};

export default HomepageDevHire;
