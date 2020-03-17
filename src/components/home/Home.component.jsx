import React, { useEffect, useState } from "react";
import { Header, Paragraph, OptionContainer } from "./Home.styles";
import { connect } from "react-redux";
import { fetchPopularMovies } from "../../redux/actions";
import { tmdbApi, tmdbIdApi, tmdbLatestApi } from "../../apis/tmdbApi";
import Carousel from "../carousel/carousel.component";
import Option from "../Option/Option.component";
import Card from "../card/Card";

const Home = props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      props.popularMovies();
      const movies = await tmdbLatestApi();
      setData(movies);
    };

    fetchData();
  }, []);

  const styleContainer = {
    height: "100vh",

    backgroundColor: "var(--secondary-color)",
    overflow: "hidden"
  };
  return (
    <div>
      <div style={styleContainer}>
        <div>
          <Carousel></Carousel>
        </div>
        <Header>Welcome to Movie Finder</Header>
        <Paragraph>Discover and watch</Paragraph>
        <OptionContainer>
          <Option title="Most Popular Today"></Option>
          <Option title="Highest Rating"></Option>
          <Option title="Recommded for you"></Option>
        </OptionContainer>
        <div>
          {data &&
            data.results.map(item => {
              console.log(item);

              return <Card movie={item}></Card>;
            })}
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  popularMovies: fetchPopularMovies
})(Home);
