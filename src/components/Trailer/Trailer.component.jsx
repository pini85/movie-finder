import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrailers } from "../../redux/actions/index";
import YouTube from "react-youtube";

import styled from "styled-components";

import Modal from "../Modal/Modal.component";
import Carousel from "../carousel/carousel.component";

const Trailer = ({ poster, vibrant, vibrantDark, ...props }) => {
  console.log("trailer", props);

  const [isToggled, setToggled] = useState(false);
  useEffect(() => {
    isToggled && props.fetchTrailers();
    console.log("useeffect", props.trailers);
  }, [isToggled]);
  const trailersYouTube = () => {
    const optsYouTube = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      props.trailers &&
      props.trailers.map(trailer => {
        return (
          <>
            <YouTube
              videoId={trailer.key}
              opts={optsYouTube}
              // onReady={_onReadyYouTube}
            />
          </>
        );
      })
    );
  };

  const TrailerContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(-2.5deg);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background: url(https://image.tmdb.org/t/p/w185//${poster ? poster : null});

    background-size: 100% 100%;
    background-repeat: cover;
    background-attachment: inherit;
    height: 25rem;
    width: 17rem;
    bottom: -75px;
    right: -60px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2) skewY(-2.5deg) rotate(5deg);
    }
  `;
  const TrailerPlay = styled.div`
    cursor: pointer;
    position: relative;
    height: 35%;
    width: 50%;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.3s;

    &:hover:after {
      color: ${vibrantDark};
    }
    &:after {
      content: "\\0025BA";
      position: absolute;
      font-size: 4rem;
      color: ${vibrant};
      top: 50%;
      left: 53%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }
  `;
  return (
    <>
      <TrailerContainer>
        <TrailerPlay onClick={() => setToggled(true)} />
      </TrailerContainer>
      <Modal
        isToggled={isToggled}
        setToggled={setToggled}
        items={trailersYouTube()}
      >
        <Carousel items={trailersYouTube()} type="trailers"></Carousel>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  trailers: state.trailers
});

export default connect(mapStateToProps, {
  fetchTrailers: fetchTrailers
})(Trailer);
