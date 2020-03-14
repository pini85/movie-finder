import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPopularMovies } from "../../redux/actions";
import { tmdbApi, tmdbIdApi } from "../../apis/tmdbApi";
import Carousel from "../carousel/carousel.component";

const Home = props => {
  useEffect(() => {
    const fetchData = async () => {
      props.popularMovies();
    };

    fetchData();
  }, []);

  const styleContainer = {
    height: "calc(100vh - 6vh)",

    backgroundColor: "var(--secondary-color)",
    overflow: "hidden"
  };
  return (
    <div>
      <div style={styleContainer}>
        <div>
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  popularMovies: fetchPopularMovies
})(Home);
