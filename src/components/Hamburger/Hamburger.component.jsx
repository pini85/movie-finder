import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, HandleBars } from "./Hamurger.styles";
import Navigation from "../Navigation/Navigation.component";
const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container onClick={() => setOpen((value) => !value)}>
      <HandleBars isOpen={isOpen}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Navigation></Navigation>
            </motion.div>
          )}
        </AnimatePresence>
      </HandleBars>
    </Container>
  );
};
export default Hamburger;
