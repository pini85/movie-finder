import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal.component";
import ShowTorrents from "../ShowTorrents/ShowTorrents.component";
import ShowSubtitles from "../ShowSubtitles/ShowSubtitles.component";
import ShowMagnets from "../ShowMagnets/ShowMagnets.component";
import { Container, ModalContainer } from "./showMovieOption.styles";
import styled from "styled-components";

const ShowMovieOption = ({ colors, title, type, left, right }) => {
  const [isToggled, setToggled] = useState(false);

  const showOption = () => {
    switch (type) {
      case "torrent":
        return <ShowTorrents></ShowTorrents>;
      case "sub":
        return <ShowSubtitles></ShowSubtitles>;
      case "magnets":
        return <ShowMagnets></ShowMagnets>;
    }
  };

  return (
    <>
      <Container
        left={left}
        right={right}
        color1={colors.darkVibrant}
        color2={colors.vibrant}
        textLight={colors.lightVibrant}
      >
        <div onClick={() => setToggled(true)}>{title}</div>
      </Container>

      <Modal isToggled={isToggled} setToggled={setToggled}>
        <ModalContainer>{isToggled && showOption()}</ModalContainer>
      </Modal>
    </>
  );
};
const mapStateToProps = state => ({
  colors: state.displayMovie.colors
});
export default connect(mapStateToProps)(ShowMovieOption);
