import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { goToMovie } from "../../redux/actions/index";
import ShowMovieInfo from "../showMovieInfo/ShowMovieInfo.component";
import ShowMovieOption from "../ShowMovieOption/ShowMovieOption.component";
import MovieCast from "../MovieCast/MovieCast.component";
import Trailer from "../Trailer/Trailer.component";
import {
  Container,
  HeroContainer,
  TopContainer,
  MovieCard,
  TagLineContainer,
  BottomContainer,
  OptionsContainer,
  PlotContainer,
  MovieCastContainer,
} from "./ShowMovie.styles";
import styled from "styled-components";

const ShowMovie = ({ item, colors, goToMovie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    goToMovie(id);
  }, [id]);

  const VibrantC = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${item ? colors.vibrant : "var(primary-color)"};
  `;
  const DarkVibrant = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${item ? colors.darkVibrant : "var(primary-color)"};
  `;
  const LightVibrant = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${item ? colors.lightVibrant : "var(primary-color-light)"};
  `;
  const Muted = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${item ? colors.muted : "var(secondary-color)"};
  `;
  const DarkMuted = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${item ? colors.darkMuted : "var(secondary-color"};
  `;
  const LightMuted = styled.div`
    height: 5rem;
    width: 5rem;
    background: ${item ? colors.lightMuted : "var(secondary-color-light)"};
  `;

  return (
    <div>
      {item && (
        <Container color1={colors.darkMuted} color2={colors.muted}>
          <MovieCard color={colors.lightVibrant}>
            <HeroContainer poster={item.backdrop}>
              <TopContainer>
                <ShowMovieInfo />
              </TopContainer>
              <Trailer poster={item.poster} />
            </HeroContainer>
            <BottomContainer>
              <PlotContainer color={colors.darkVibrant}>
                {item.tagLine && (
                  <TagLineContainer>
                    <span>&ldquo;</span>
                    {item.tagLine}
                    <span>&rdquo;</span>
                  </TagLineContainer>
                )}
                <div>{item.plot}</div>
              </PlotContainer>
              <OptionsContainer>
                <ShowMovieOption title="torrents" type="torrent" left={true} />
                <ShowMovieOption title="subtitles" type="sub" right={true} />
                <ShowMovieOption title="magnets" type="magnets" left={true} />
              </OptionsContainer>
            </BottomContainer>
            {/* 
            <div style={{ display: "flex" }}>
              <DarkVibrant></DarkVibrant>
              <VibrantC></VibrantC>
              <LightVibrant></LightVibrant>
            </div>
            <div style={{ display: "flex" }}>
              <DarkMuted></DarkMuted>
              <Muted></Muted>
              <LightMuted></LightMuted>
            </div> */}
            <MovieCastContainer color={colors.lightVibrant}>
              <MovieCast />
            </MovieCastContainer>
          </MovieCard>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.displayMovie) {
    return {
      item: state.displayMovie,
      colors: state.displayMovie.colors,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, {
  goToMovie: goToMovie,
})(ShowMovie);
