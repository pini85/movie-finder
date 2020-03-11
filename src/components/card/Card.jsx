import React, { useState } from "react";
import "./card.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { selectedMovieId } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  const handleClick = () => {
    props.selectedMovieId(props.movie.id);
    props.history.push("/show-movie");
  };
  //   const styleCard = {
  //     backgroundColor: "transparent",
  //     width: "26rem",
  //     height: "37rem",
  //     perspective: "1000px"
  //   };
  //   const styleInnerCard = {
  //     position: "relative",
  //     width: "100%",
  //     height: "100%",
  //     transition: "transform 0.6s",
  //     textAlign: "center",
  //     transformStyle: "preserve-3d",
  //     boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  //   };
  const image = () => {
    if (props.movie.poster_path === null) {
      return "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";
    } else {
      return `http://image.tmdb.org/t/p/w185//${props.movie.poster_path}`;
    }
  };
  const styleFrontCard = {
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    // backfaceVisibility: "hidden",
    background: `url(${image()})no-repeat center center`,
    backgroundSize: "cover"
    // color: "white"
  };
  const styleYear = {
    position: "absolute",
    top: "5px",
    left: "5px",
    backgroundColor: "orange",
    borderRadius: "5px",
    padding: "0 5px"
  };
  const styleRating = {
    display: "flex",
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "orange",
    borderRadius: "5px",
    padding: "0 5px"
  };

  const styleBackCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background:
      "linear-gradient(to bottom, var(--primary-color),var(--primary-color-dark))",
    color: "white"
  };

  const styleTitle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "var(--primary-color)",
    color: "white",
    padding: "0 5px"
  };
  const styleBackTitle = {
    width: "100%",
    backgroundColor: "var(--primary-color)",
    color: "white",
    padding: "0 5px"
  };
  return (
    <div className="card">
      <div
        className="card-inner"
        // whileHover={{
        //   transform: "rotateY(180deg)"
        // }}
        // transition={{ duration: 0.5 }}
      >
        <div style={styleFrontCard} className="card-front">
          <div style={styleYear}>{props.movie.release_date.substr(0, 4)}</div>
          <div style={styleRating}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>{props.movie.vote_average}</div>
          </div>
          <div style={styleTitle}> {props.movie.title}</div>
        </div>
        <div
          style={styleBackCard}
          className="card-back"
          //   whileHover={{
          //     transform: "rotateY(180deg)"
          //   }}
          //   transition={{ duration: 0.5 }}
        >
          <div></div>
          <a onClick={handleClick}>
            <Button title="Details" />
          </a>
          <div style={styleBackTitle}> {props.movie.title}</div>
        </div>
      </div>
    </div>
  );
};
export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: selectedMovieId
  })
)(Card);
