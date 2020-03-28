import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Button, ButtonContainer } from "./Modal.styles";

const Modal = ({ isToggled, setToggled, items, children }) => {
  console.log(items);
  console.log(children);

  //Multilayer animations

  return (
    <AnimatePresence>
      {isToggled && (
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div initial={{ y: 0 }} animate={{ y: 30 }} exit={{ y: 30 }}>
              <div className="YO">
                <ButtonContainer>
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
