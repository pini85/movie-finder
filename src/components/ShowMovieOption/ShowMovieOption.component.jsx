import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal.component";
import ShowTorrents from "../ShowTorrents/ShowTorrents.component";
import ShowSubtitles from "../ShowSubtitles/ShowSubtitles.component";
import ShowMagnets from "../ShowMagnets/ShowMagnets.component";
import { Container, ModalContainer } from "./showMovieOption.styles";
import styled from "styled-components";

const ShowMovieOption = props => {
  console.log(props);

  const [isToggled, setToggled] = useState(false);

  const showOption = () => {
    switch (props.type) {
      case "torrent":
        return <ShowTorrents></ShowTorrents>;
      case "subtitle":
        return <ShowSubtitles></ShowSubtitles>;
      case "magnets":
        return <ShowMagnets></ShowMagnets>;
    }
  };

  return (
    <>
      <Container
        left={props.left}
        right={props.right}
        color1={props.color1}
        color2={props.color2}
        textLight={props.textLight}
      >
        <div onClick={() => setToggled(true)}>{props.title}</div>
      </Container>
      <Modal isToggled={isToggled} setToggled={setToggled}>
        <ModalContainer>{isToggled && showOption()}</ModalContainer>
      </Modal>
    </>
  );
};

export default ShowMovieOption;
