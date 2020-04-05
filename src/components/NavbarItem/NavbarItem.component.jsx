import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./NavbarItem.styles";
const NavbarItem = ({ link, title }) => {
  return (
    <Container>
      <Link to={link}>{title}</Link>
    </Container>
  );
};

export default NavbarItem;
