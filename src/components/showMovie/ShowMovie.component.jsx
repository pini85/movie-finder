import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { goToMovie } from "../../redux/actions/index";
import ShowMovieInfo from "../showMovieInfo/ShowMovieInfo.component";
import ShowMovieOption from "../ShowMovieOption/ShowMovieOption.component";
import MovieCast from "../MovieCast/MovieCast.component";
import Trailer from "../Trailer/Trailer.component";
import Reviews from "../Reviews/Review.component";
import LoadingScreen from "../LoadingScreen/LoadingScreen.component";
import BouncingDvd from "../spinners/BouncingDvd/BouncingDvd.component";
import Film from "../spinners/Film/Film.component";
import useWidth from "../../hooks/useWidth.hooks";

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
  LeftSide,
  RightSide,
} from "./ShowMovie.styles";

const ShowMovie = ({ item, colors, goToMovie, isSecretSequence }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await goToMovie(id);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  // const VibrantC = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.vibrant : "var(primary-color)"};
  // `;
  // const DarkVibrant = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.darkVibrant : "var(primary-color)"};
  // `;
  // const LightVibrant = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.lightVibrant : "var(primary-color-light)"};
  // `;
  // const Muted = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.muted : "var(secondary-color)"};
  // `;
  // const DarkMuted = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.darkMuted : "var(secondary-color"};
  // `;
  // const LightMuted = styled.div`
  //   height: 5rem;
  //   width: 5rem;
  //   background: ${item ? colors.lightMuted : "var(secondary-color-light)"};
  // `;
  const width = useWidth().width;

  const spinner = () => {
    if (width < 1000) {
      return <Film></Film>;
    } else {
      return <BouncingDvd></BouncingDvd>;
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        item && (
          <Container color1={colors.darkMuted} color2={colors.muted}>
            <MovieCard color={colors.lightVibrant}>
              <HeroContainer poster={item.backdrop}>
                <TopContainer>
                  <ShowMovieInfo />
                </TopContainer>
                <Trailer poster={item.poster} />
              </HeroContainer>
              <BottomContainer>
                <LeftSide>
                  <PlotContainer
                    tagline={item.tagLine}
                    color={colors.darkVibrant}
                  >
                    {item.tagLine && (
                      <TagLineContainer>
                        <span>&ldquo;</span>
                        {item.tagLine}
                        <span>&rdquo;</span>
                      </TagLineContainer>
                    )}
                    <p>{item.plot}</p>
                  </PlotContainer>

                  <Reviews />
                  {/* <DirectorAndWriterContainer>
                  <div>Director: {item.director}</div>
                  <div>Writers: {item.writer}</div>
                </DirectorAndWriterContainer> */}
                </LeftSide>
                <RightSide>
                  <AnimatePresence>
                    {isSecretSequence && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <OptionsContainer
                          color1={colors.darkVibrant}
                          color2={colors.vibrant}
                        >
                          <ShowMovieOption title="torrents" type="torrent" />
                          <ShowMovieOption title="subtitles" type="sub" />
                          <ShowMovieOption title="magnets" type="magnets" />
                        </OptionsContainer>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </RightSide>
              </BottomContainer>

              {/* <div style={{ display: "flex" }}>
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
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.displayMovie) {
    return {
      item: state.displayMovie,
      colors: state.displayMovie.colors,
      isSecretSequence: state.isSecretSequence,
    };
  } else {
    return {};
  }
};
export default connect(mapStateToProps, {
  goToMovie: goToMovie,
})(ShowMovie);
