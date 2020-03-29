import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Button, ButtonContainer } from "./Modal.styles";

const Modal = ({ isToggled, setToggled, skew, children }) => {
  const trailerStyles = () => {
    if (skew) {
      return {
        transform: "translate(-50%, -25%) skewY(-2.5deg)",
        top: "50%",
        left: "49"
      };
    }
  };

  //Multilayer animations

  return (
    <AnimatePresence>
      {isToggled && (
        <Container
          style={
            skew ? { transform: "skewY(-2.5deg)" } : { top: "0", left: "-15px" }
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div initial={{ y: 0 }} animate={{ y: 30 }} exit={{ y: 30 }}>
              <div className="YO">
                <ButtonContainer
                  style={
                    !skew
                      ? { position: "absolute", right: "-78px", top: "-29px" }
                      : null
                  }
                >
                  <Button onClick={() => setToggled(false)}>
                    <div> &#215;</div>
                  </Button>
                </ButtonContainer>
              </div>

              {children}
            </motion.div>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
};
export default Modal;
