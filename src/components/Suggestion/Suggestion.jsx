import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./suggestion.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faStar } from "@fortawesome/free-solid-svg-icons";

const Suggestion = ({ item }) => {
  const styleContainer = {
    display: "flex",
    alignItems: "center",
    width: "35rem",
    padding: "1rem",
    fontSize: "1.7rem",
    color: "#ffeec9",
    borderBottom: "1px solid var(--background-color)"
  };
  const styleImg = {
    height: "7rem",
    width: "5rem",
    marginRight: "1rem"
  };
  const styleTitle = {};

  const styleIconAndYearContainer = {
    display: "flex",
    alignItems: "center"
  };
  const styleCardBottom = {};
  //title, movie image/year,duration,rate
  return (
    <Link
      to={{
        pathname: "/show-movie",
        state: { data: item }
      }}
    >
      <div className="container" style={styleContainer}>
        <img
          style={styleImg}
          src={`http://image.tmdb.org/t/p/w92//${item.poster_path}`}
          alt=""
        />
        <div>
          <div style={styleTitle}> {item.title}</div>
          <div style={styleIconAndYearContainer}>
            <FontAwesomeIcon icon={faFilm} />
            <div style={{ marginLeft: "1rem" }}>
              {item.release_date ? item.release_date.substr(0, 4) : null}
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "orange", marginRight: "1rem" }}
            />
            {item.vote_average}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Suggestion;
