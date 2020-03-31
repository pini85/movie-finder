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
    <Container color={props.color} colorHover={props.colorHover}>
      <div onClick={() => setToggled(true)}>{props.title}</div>
      <Modal isToggled={isToggled} setToggled={setToggled}>
        <ModalContainer>{isToggled && showOption()}</ModalContainer>
      </Modal>
    </Container>
  );
};

export default ShowMovieOption;
