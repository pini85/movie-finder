import React from "react";
import {
  Container,
  CustomizeContainer,
  SearchContainer,
  Options,
  Option,
} from "./Navigation.styles";
import Customize from "../Customize/Customize.component";
import Search from "../Search/Search.component";
import LightSwitch from "../LightSwitch/LightSwitch.component";
import useWidth from "../../hooks/useWidth.hooks";
const Navigation = () => {
  const width = useWidth().width;
  console.log(width);

  return (
    <Container>
      {width < 500 ? (
        <>
          <CustomizeContainer>
            <LightSwitch></LightSwitch>
            <Customize></Customize>
          </CustomizeContainer>
          <SearchContainer>
            <Search></Search>
          </SearchContainer>
        </>
      ) : null}
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
