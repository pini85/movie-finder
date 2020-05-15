import React, { useState } from "react";
import {
  Container,
  OptionsContainer,
  OptionContainer,
} from "./Customize.styles";
import { motion, AnimatePresence } from "framer-motion";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import Modal from "../Modal/Modal.component";
import CustomizeOption from "../CustomizeOption/CustomizeOption.component";

const Customize = () => {
  const [isToggled, setToggled] = useState(true);
  const [option, setOption] = useState(null);
  const [isSpinners, setSpinners] = useState(null);

  return (
    <div>
      <Modal isToggled={isToggled} setToggled={setToggled}>
        <CategoryTitle title="Customize your experience" />
        <Container>
          <div onClick={() => setSpinners((value) => !value)}>Spinners</div>
          <AnimatePresence>
            {isSpinners && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 1 }}
                style={{ overflow: "hidden" }}
              >
                <OptionContainer
                  data-option="dvd"
                  onClick={(e) =>
                    setOption(e.target.getAttribute("data-option"))
                  }
                >
                  Bouncing dvd
                </OptionContainer>
                <OptionContainer
                  data-option="camera"
                  onClick={(e) =>
                    setOption(e.target.getAttribute("data-option"))
                  }
                >
                  Film
                </OptionContainer>
                <OptionContainer
                  data-option="spin"
                  onClick={(e) =>
                    setOption(e.target.getAttribute("data-option"))
                  }
                >
                  Spin
                </OptionContainer>
              </motion.div>
            )}
          </AnimatePresence>
          <div onClick={() => setOption("theme")}>Color and Font</div>
        </Container>
        <AnimatePresence>
          {option && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              > <CustomizeOption option={option} />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
};
export default Customize;
