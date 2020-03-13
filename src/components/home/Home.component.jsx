import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { popularMovies } from "../../redux/actions";
import { tmdbApi, tmdbIdApi } from "../../apis/tmdbApi";
import Carousel from "../carousel/carousel.component";

const Home = props => {
  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesData = [];
      const data = await tmdbApi();
      Promise.all(
        data.map(async item => {
          const movies = await tmdbIdApi(item.id);

          popularMoviesData.push(movies);
        })
      );
      props.popularMovies(popularMoviesData);
    };

    fetchData();
  }, []);

  const styleContainer = {
    height: "calc(100vh - 6vh)",
    backgroundColor: "white",
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
  popularMovies: popularMovies
})(Home);
