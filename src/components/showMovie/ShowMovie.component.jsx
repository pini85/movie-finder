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
  PlotContainer
} from "./ShowMovie.styles";

const ShowMovie = ({ item, colors, goToMovie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    goToMovie(id);
  }, [id]);

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
          </MovieCard>
          <MovieCast />
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  if (state.displayMovie) {
    return {
      item: state.displayMovie,
      colors: state.displayMovie.colors
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, {
  goToMovie: goToMovie
})(ShowMovie);
