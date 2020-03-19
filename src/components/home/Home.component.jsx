import React, { useEffect } from "react";
import { Header, Paragraph } from "./Home.styles";
import { connect } from "react-redux";
import { fetchMovieSlider, fetchNewestMovies } from "../../redux/actions";

import Carousel from "../carousel/carousel.component";
import Options from "../Options/Options.component";

import MovieList from "../movieList/MovieList";

const Home = props => {
  useEffect(() => {
    const fetchData = async () => {
      props.movieSlider();
      props.newestMovies();
    };

    fetchData();
  }, []);

  const styleContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    backgroundColor: "var(--secondary-color)",
    overflow: "hidden"
  };
  return (
    <div>
      <div style={styleContainer}>
        <div>
          <Carousel></Carousel>
        </div>
        <div style={{ width: "100%" }}>
          <Header>Welcome to Movie Finder</Header>
          <Paragraph>Discover and watch</Paragraph>
        </div>
        <Options />

        {props.newestMoviesData && (
          <MovieList movies={props.newestMoviesData.results} />
        )}
      </div>
    </div>
  );
};
const mapStateToDispatch = {
  newestMovies: fetchNewestMovies,
  movieSlider: fetchMovieSlider
};
const mapStateToProps = state => ({
  newestMoviesData: state.newestMovies,
  movieSliderData: state.movieSliderData
});

export default connect(mapStateToProps, mapStateToDispatch)(Home);
