import React, { useEffect } from "react";
import { TrailerContainer } from "./Carousel.styles";
import YouTube from "react-youtube";
import "./carousel.styles.css";
import { connect } from "react-redux";

import Slider from "react-slick";
import MovieSlider from "../movieSLider/MovieSlider.component";
const Carousel = props => {
  const optsYouTube = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0
    }
  };

  // const trailersYouTube = () => {

  //   return (
  //     props.trailers &&
  //     props.trailers.map(trailer => {
  //       return (
  //         <>
  //           <YouTube
  //             videoId={trailer.key}
  //             opts={optsYouTube}
  //             // onReady={_onReadyYouTube}
  //           />
  //         </>
  //       );
  //     })
  //   );
  // };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    lazyLoad: true
  };
  const styleContainer = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <div style={styleContainer}>
      <Slider {...settings}>
        {props.type === "trailers"
          ? props.trailers &&
            props.trailers.map(trailer => {
              return (
                <div className="test">
                  <TrailerContainer>
                    <YouTube
                      videoId={trailer.key}
                      opts={optsYouTube}
                      // onReady={_onReadyYouTube}
                    />
                  </TrailerContainer>
                </div>
              );
            })
          : props.movies &&
            props.movies.map(movie => {
              // debugger;
              return (
                <div key={movie.id}>
                  <MovieSlider movie={movie}></MovieSlider>
                </div>
              );
            })}

        {/*        
        {props.movies &&
          props.movies.map(movie => {
            return (
              <div key={movie.id}>
                <MovieSlider movie={movie}></MovieSlider>
              </div>
            );
          })} */}
      </Slider>
    </div>
  );
};
const mapStateToProps = state => ({
  movies: state.movieSlider,
  trailers: state.trailers
});

export default connect(mapStateToProps)(Carousel);
