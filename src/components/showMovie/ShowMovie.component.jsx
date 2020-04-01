import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { goToMovie, selectedMovie } from "../../redux/actions/index";
import ShowMovieInfo from "../showMovieInfo/ShowMovieInfo.component";
import ShowMovieOption from "../ShowMovieOption/ShowMovieOption.component";
import Trailer from "../Trailer/Trailer.component";
import {
  BottomContainer,
  OptionsContainer,
  PlotContainer
} from "./ShowMovie.styles";

const ShowMovie = props => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    props.goToMovie(id);
  }, [id]);

  const ratings = () => {
    return (
      <div>
        {props.item.ratings
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

  // const colors = () => {
  //   if(props.item.colors){
  //     return props.item.colors
  //   }
  // }

  const colors = {
    vibrant: props.item ? props.item.colors[0] : "white",
    vibrantDark: props.item ? props.item.colors[1] : "white",
    vibrantLight: props.item ? props.item.colors[2] : "white",
    muted: props.item ? props.item.colors[3] : "white",
    mutedDark: props.item ? props.item.colors[4] : "white",
    mutedLight: props.item ? props.item.colors[5] : "white"
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
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;

  return (
    <div>
      {props.item && (
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
            <BottomContainer>
              <PlotContainer color={colors.vibrantDark}>
                <div>{props.item.plot}</div>
              </PlotContainer>

              <OptionsContainer>
                <ShowMovieOption
                  color1={colors.vibrantDark}
                  color2={colors.vibrant}
                  textLight={colors.vibrantLight}
                  title="torrents"
                  type="torrent"
                  left={true}
                />
                <ShowMovieOption
                  color1={colors.vibrantDark}
                  color2={colors.vibrant}
                  textLight={colors.vibrantLight}
                  title="subtitles"
                  type="subtitle"
                  right={true}
                />
                <ShowMovieOption
                  color1={colors.vibrantDark}
                  color2={colors.vibrant}
                  textLight={colors.vibrantLight}
                  title="magnets"
                  type="magnets"
                  left={true}
                />
              </OptionsContainer>
            </BottomContainer>
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

            <>
              <div>Year: {props.item.year}</div>
              <div>Genre: {props.item.genre}</div>
              <div>Actors: {props.item.actors}</div>
              <div>Director: {props.item.director}</div>
              <div>Writer: {props.item.writer}</div>
              <div>Runtime: {props.item.runTime}</div>

              <div>tagline: {props.item.tagLine}</div>
              <div>language: {props.item.language}</div>
              {magnets()}
            </>
          </div>
          )}
        </Container>
      )}
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
  goToMovie: goToMovie
})(ShowMovie);
