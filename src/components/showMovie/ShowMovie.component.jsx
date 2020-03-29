import React, { useEffect, useState, useRef } from "react";
import framer from "framer-motion";
import { connect } from "react-redux";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { selectedMovie, displayMovie } from "../../redux/actions/index";
import YouTube from "react-youtube";
import Test from "../skeletons/test";
import ShowMovieInfo from "../showMovieInfo/ShowMovieInfo.component";
import Trailer from "../Trailer/Trailer.component";
import ShowMovieOption from "../ShowMovieOption/ShowMovieOption.component";

const ShowMovie = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalTorrents, setModalTorrents] = useState(false);

  useEffect(() => {
    props.displayMovie();
  }, [props.id]);

  const ratings = () => {
    return (
      <div>
        {props.item
          ? props.item.ratings.map(item => {
              return (
                <div>
                  <div>
                    {item.Source}: {item.Value}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  // const magnets = () => {
  //   return (
  //     props.item &&
  //     props.item.magnets.map(magnet => {
  //       return (
  //         <div>
  //           <a href={magnet}>magnet</a>
  //         </div>
  //       );
  //     })
  //   );
  // };

  const imageTarget = () => {
    return `http://image.tmdb.org/t/p/w185//${props.item.poster_path}`;
  };

  // const colors = () => {
  //   if(props.item.colors){
  //     return props.item.colors
  //   }
  // }

  const colors = {
    vibrant: props.item.colors[0],
    vibrantDark: props.item.colors[1],
    vibrantLight: props.item.colors[2],
    muted: props.item.colors[3],
    mutedDark: props.item.colors[4],
    mutedLight: props.item.colors[5]
  };

  const VibrantC = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${props.item ? colors.vibrant : "var(primary-color)"};
  `;
  const DarkVibrant = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${props.item ? colors.vibrantDark : "var(primary-color)"};
  `;
  const LightVibrant = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${props.item
      ? colors.vibrantLight
      : "var(primary-color-light)"};
  `;
  const Muted = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${props.item ? colors.muted : "var(secondary-color)"};
  `;
  const DarkMuted = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${props.item ? colors.mutedDark : "var(secondary-color"};
  `;
  const LightMuted = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${props.item
      ? colors.mutedLight
      : "var(secondary-color-light)"};
  `;

  const Container = styled.div`
    padding: 0 14vw;
    background-image: ${`linear-gradient(to bottom, ${colors.mutedDark}, ${colors.muted})`};
    /* background: ${
      props.item ? colors.mutedDark : "var(primary-color-light)"
    }; */
  `;

  const HeroContainer = styled.div`
    height: 50vh;
    position: relative;

    z-index: 1;

    transform: skewY(2.5deg) translateY(-30px);

    color: var(--text-white);
    display: flex;
    justify-content: center;

    &:after {
      content: "";
      position: absolute;

      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      overflow: hidden;
      background: url(https://image.tmdb.org/t/p/w1280//${props.item ? props.item.backdrop : null});
      background-size: 100% 100%;
      background-repeat: cover;
      background-attachment: inherit;
    }
  `;

  const TopContainer = styled.div`
    transform: skewY(-2.5deg);
    /* position: relative; */
  `;

  const MovieCard = styled.div`
    background: ${colors.vibrantLight};
    height: calc(100vh - 7vh);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;

  return (
    <div>
      <Container>
        <MovieCard>
          <HeroContainer>
            <TopContainer>
              <ShowMovieInfo
                color={colors.mutedLight}
                title={props.item.title}
                year={props.item.year}
              />
            </TopContainer>
            <Trailer
              poster={props.item.poster}
              vibrant={colors.vibrant}
              vibrantDark={colors.vibrantDark}
            />
          </HeroContainer>
          <ShowMovieOption title="TORRENT" type="torrent" />
          <ShowMovieOption title="SUBTITLES" type="subtitle" />
          <ShowMovieOption title="MAGNETS" type="magnets" />
        </MovieCard>
        <div style={{ display: "flex" }}>
          <DarkVibrant></DarkVibrant>
          <VibrantC></VibrantC>
          <LightVibrant></LightVibrant>
        </div>
        <div style={{ display: "flex" }}>
          <DarkMuted></DarkMuted>
          <Muted></Muted>
          <LightMuted></LightMuted>
        </div>
        <div>
          {ratings()}
          {props.item ? (
            <>
              <div>Year: {props.item.year}</div>
              <div>Genre: {props.item.genre}</div>
              <div>Actors: {props.item.actors}</div>
              <div>Director: {props.item.director}</div>
              <div>Writer: {props.item.writer}</div>
              <div>Runtime: {props.item.runTime}</div>
              <div>plot: {props.item.plot}</div>
              <div>tagline: {props.item.tagLine}</div>
              <div>language: {props.item.language}</div>
            </>
          ) : null}
        </div>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    query: state.search,
    id: state.selectedMovieId,
    item: state.displayMovie
  };
};
export default connect(mapStateToProps, {
  selectedMovie: selectedMovie,
  displayMovie: displayMovie
})(ShowMovie);
