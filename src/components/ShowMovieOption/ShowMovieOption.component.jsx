import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal.component";
import ShowTorrents from "../ShowTorrents/ShowTorrents.component";
import ShowSubtitles from "../ShowSubtitles/ShowSubtitles.component";
import ShowMagnets from "../ShowMagnets/ShowMagnets.component";
import { Container } from "./showMovieOption.styles";

const ShowMovieOption = props => {
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
      <div onClick={() => setToggled(true)}>{props.title}</div>;
      <Modal isToggled={isToggled} setToggled={setToggled}>
        <Container>{isToggled && showOption()}</Container>
      </Modal>
    </>
  );
};

export default ShowMovieOption;
