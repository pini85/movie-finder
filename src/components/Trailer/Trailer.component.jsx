import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrailers } from "../../redux/actions/index";
import YouTube from "react-youtube";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal.component";
import Carousel from "../carousel/carousel.component";
import useWidth from "../../hooks/useWidth.hooks";

const Trailer = ({ poster, fetchTrailers, trailers, colors }) => {
  const width = useWidth().width;
  const [isToggled, setToggled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (isToggled) {
        setLoading(true);
        await fetchTrailers();
        setLoading(false);
      }
    };
    fetchData();
  }, [isToggled]);
  const trailersYouTube = () => {
    const optsYouTube = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0,
      },
    };
    const _onReadyYouTube = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    };

    return (
      trailers &&
      trailers.map((trailer) => {
        return (
          <YouTubeContainer width={width}>
            <YouTube videoId={trailer.key} opts={optsYouTube} />
          </YouTubeContainer>
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
    @media screen and (max-width: 1000px) {
      right: 30px;
    }
    @media screen and (max-width: 500px) {
      top: 217px;
    }

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
      color: ${colors.darkVibrant};
    }
    &:after {
      content: "\\0025BA";
      position: absolute;
      font-size: 4rem;
      color: ${colors.vibrant};
      top: 50%;
      left: 53%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }
  `;
  const YouTubeContainer = styled.div`
    transform: scale(0.5);
  `;

  return (
    <>
      <TrailerContainer>
        <TrailerPlay onClick={() => setToggled(true)} />
      </TrailerContainer>
      <Modal skew={true} isToggled={isToggled} setToggled={setToggled}>
        <Carousel
          items={trailersYouTube()}
          type="trailers"
          slidesToShow={1}
          slidesToScroll={1}
          autoPlay={false}
          fade={true}
          color="var(--primary-color)"
        ></Carousel>
        {isLoading ? (
          <FontAwesomeIcon
            icon={faFilm}
            style={{ fontSize: "10rem", color: "red" }}
          />
        ) : null}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  trailers: state.trailers,
  colors: state.displayMovie.colors,
});

export default connect(mapStateToProps, {
  fetchTrailers: fetchTrailers,
})(Trailer);
