import React from "react";
import Search from "../Search/Search.component";
import { Link } from "react-router-dom";
import NavbarItem from "../NavbarItem/NavbarItem.component";
import Hamburger from "../Hamburger/Hamburger.component";
import LightSwitch from "../LightSwitch/LightSwitch.component";
import UseWidth from "../../hooks/useWidth.hooks";
import "../../themes/replaceTheme";
import { Container, NavbarItemContainer, Img } from "./Navbar.styles";

const Navbar = (props) => {
  const width = UseWidth().width;

  return (
    <Container>
      {width > 800 ? (
        <>
          <Link to="/">
            <div>
              <Img
                width={width}
                src={require("../../assets/images/logo.png")}
                alt=""
              />
            </div>
          </Link>
          <NavbarItemContainer>
            <NavbarItem
              link="/movies/latest/page/1"
              title="movies"
            ></NavbarItem>
            <NavbarItem link="/tv/latest/page/1" title="tv shows"></NavbarItem>
            <NavbarItem
              link="/advanced-search/"
              title="Advanced Search"
            ></NavbarItem>
            <NavbarItem
              link="/popular-actors/page/1"
              title="Popular Actors"
            ></NavbarItem>
            <NavbarItem link="/customize" title="Customize"></NavbarItem>
          </NavbarItemContainer>
          <LightSwitch></LightSwitch>
        </>
      ) : (
        <Hamburger>
          <NavbarItem link="/" title="home"></NavbarItem>
          <NavbarItem link="/movies/latest/page/1" title="movies"></NavbarItem>
          <NavbarItem link="/tv/latest/page/1" title="tv shows"></NavbarItem>
          <NavbarItem
            link="/advanced-search/"
            title="Advanced Search"
          ></NavbarItem>
          <NavbarItem
            link="/popular-actors/page/1"
            title="Popular Actors"
          ></NavbarItem>
        </Hamburger>
      )}

      <Search />
    </Container>
  );
};

export default Navbar;
