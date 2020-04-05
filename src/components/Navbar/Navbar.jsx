import React from "react";
import Search from "../Search/Search.component";
import { Link } from "react-router-dom";
import NavbarItem from "../NavbarItem/NavbarItem.component";
import { NavbarItemContainer } from "./Navbar.styles";

const styleContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 6px 20px",
  background: "var(--secondary-color-light)",
  height: "7vh",
  padding: "3rem",
  zIndex: "2",
  position: "relative",
};
const image = {
  height: "6rem",
  width: "23rem",
  marginTop: "1rem",
};
const Navbar = (props) => {
  return (
    <div style={styleContainer}>
      <Link to="/">
        <div>
          <img style={image} src={require("../../images/logo.png")} alt="" />
        </div>
      </Link>
      <NavbarItemContainer>
        <NavbarItem link="/movies/latest/page/1" title="movies"></NavbarItem>
      </NavbarItemContainer>

      <Search />
    </div>
  );
};

export default Navbar;
