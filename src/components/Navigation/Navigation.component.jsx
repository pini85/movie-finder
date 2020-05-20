import React from "react";
import { Container, Options, Option } from "./Navigation.styles";
const Navigation = () => {
  return (
    <Container>
      <Options>
        <Option link="/">Home</Option>
        <Option link="/movies/latest/page/1">Movies</Option>
        <Option link="/tv/latest/page/1">Tv Shows</Option>
        <Option link="/advanced-search/">Advanced Search</Option>
        <Option link="/popular-actors/page/1">Popular Actors</Option>
      </Options>
    </Container>
  );
};
export default Navigation;
