import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { selectedMovie, displayMovie } from "../../redux/actions/index";
import YouTube from "react-youtube";
import Test from "../skeletons/test";
import ShowMovieInfo from "../showMovieInfo/ShowMovieInfo.component";

const ShowMovie = props => {
  console.log("WHAT", props.item);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("im envoked");

    props.displayMovie();
  }, [props.id]);

  const optsYouTube = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0
    }
  };

  const _onReadyYouTube = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

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

  const trailers = () => {
    return (
      props.item &&
      props.item.trailers.map(trailer => {
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

  const torrents = () => {
    return (
      props.item &&
      props.item.torrents.map(torrent => {
        return (
          <div>
            <div>
              Url: <a href={torrent.url}>link!!!</a>
            </div>
            <div>seeds: {torrent.seeds}</div>
            <div>peers: {torrent.peers}</div>
            <div>size:{torrent.size}</div>
            <div>type:{torrent.type}</div>
          </div>
        );
      })
    );
  };

  const magnets = () => {
    return (
      props.item &&
      props.item.magnets.map(magnet => {
        return (
          <div>
            <a href={magnet}>magnet</a>
          </div>
        );
      })
    );
  };

  const subtitle = () => {
    return props.item && props.item.subtitle ? (
      <div>
        <a href={props.item.subtitle}> subtitle</a>
      </div>
    ) : null;
  };

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
    background: ${props.item
      ? props.item.colors[2]
      : "var(primary-color-light)"};
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
    background: white;
    height: calc(100vh - 7vh);
  `;

  const TrailerContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(-2.5deg);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background: url(https://image.tmdb.org/t/p/w185//${props.item ? props.item.poster : null});

    background-size: 100% 100%;
    background-repeat: cover;
    background-attachment: inherit;
    height: 25rem;
    width: 17rem;
    bottom: -75px;
    right: -60px;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
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
    /* &:hover {
      background: var(--secondary-color);
    } */
    &:hover:after {
      color: ${colors.vibrantDark};
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
            <TrailerContainer>
              <TrailerPlay />
            </TrailerContainer>
          </HeroContainer>
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
              <img
                src={`http://image.tmdb.org/t/p/w185//${props.item.poster}`}
                alt=""
              />
              {/* {images()} */}
              {trailers()}
              {torrents()}
              {subtitle()}
              {magnets()}
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
