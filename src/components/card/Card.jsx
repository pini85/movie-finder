import React from "react";
import "./card.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { selectedMovieId, selectedMovie } from "../../redux/actions/index";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  const handleClick = () => {
    console.log(props.movie);

    props.selectedMovieId(props.movie.id);
    props.selectedMovie(props.movie);

    props.history.push(`/show-movie/${props.movie.id}`);
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
    backgroundColor: "var(--primary-color)",
    borderRadius: "5px",
    padding: "0 5px"
  };
  const styleRating = {
    display: "flex",
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "var(--primary-color)",
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
    color: "var(--text-dark)",
    padding: "0 5px"
  };
  const styleBackTitle = {
    width: "100%",
    backgroundColor: "var(--primary-color)",
    color: "var(--text-dark)",
    padding: "0 5px"
  };
  const title = name => {
    if (name.length > 17) {
      return name.slice(0, 17) + "...";
    }
    return name;
  };
  return (
    <div className="card">
      <div className="card-inner">
        <div style={styleFrontCard} className="card-front">
          <div style={styleYear}>
            {props.movie.release_date
              ? props.movie.release_date.substr(0, 4)
              : "N/A"}
          </div>
          <div style={styleRating}>
            <div style={{ marginRight: "5px" }}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>{props.movie.vote_average}</div>
          </div>
          <div style={styleTitle}> {title(props.movie.title)}</div>
        </div>
        <div style={styleBackCard} className="card-back">
          <div></div>
          <a onClick={handleClick}>
            <Button title="Details" />
          </a>
          <div style={styleBackTitle}> {title(props.movie.title)}</div>
        </div>
      </div>
    </div>
  );
};
export default compose(
  withRouter,
  connect(null, {
    selectedMovieId: selectedMovieId,
    selectedMovie: movie => selectedMovie(movie)
  })
)(Card);
