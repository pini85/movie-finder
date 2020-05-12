import React, { useState } from "react";
import { Container, HandleBars, Navigation } from "./Hamurger.styles";
const Hamburger = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container onClick={() => setOpen((value) => !value)}>
      <HandleBars isOpen={isOpen}>
        {isOpen ? <Navigation>{children}</Navigation> : null}
      </HandleBars>
    </Container>
  );
};
export default Hamburger;
