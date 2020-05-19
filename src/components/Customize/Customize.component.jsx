import React, { useState } from "react";
import { connect } from "react-redux";
import { displayTheme } from "../../redux/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  OptionsContainer,
  OptionContainer,
  IconContainer,
} from "./Customize.styles";
import { motion, AnimatePresence } from "framer-motion";
import CategoryTitle from "../CategoryTitle/CategoryTitle.component";
import Modal from "../Modal/Modal.component";
import CustomizeOption from "../CustomizeOption/CustomizeOption.component";
import NavbarItem from "../NavbarItem/NavbarItem.component";

const Customize = ({ displayTheme }) => {
  // document.documentElement.style.setProperty("--primary-color", "red");
  const [isToggled, setToggled] = useState(false);
  const [option, setOption] = useState(null);
  const [isSpinners, setSpinners] = useState(null);
  const [isThemes, setThemes] = useState(null);

  return (
    <>
      <IconContainer onClick={() => setToggled(true)}>
        <FontAwesomeIcon icon={faCog} />
      </IconContainer>

      <Modal
        isToggled={isToggled}
        setToggled={setToggled}
        setSpinners={setSpinners}
        setThemes={setThemes}
        setOption={setOption}
      >
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
          <div onClick={() => setThemes((value) => !value)}>Themes</div>
          <AnimatePresence>
            {isThemes && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 1 }}
                style={{ overflow: "hidden" }}
              >
                <OptionContainer onClick={() => displayTheme("default-theme")}>
                  Default Theme
                </OptionContainer>
                <OptionContainer onClick={() => displayTheme("dark-theme")}>
                  Dark Theme
                </OptionContainer>
                <OptionContainer onClick={() => displayTheme("beige-theme")}>
                  Beige Theme
                </OptionContainer>
              </motion.div>
            )}
          </AnimatePresence>
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
    </>
  );
};
export default connect(null, {
  displayTheme: (theme) => displayTheme(theme),
})(Customize);
