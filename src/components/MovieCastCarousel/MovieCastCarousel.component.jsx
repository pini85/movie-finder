import React from "react";
import { connect } from "react-redux";
import { fetchActorMovies, fetchMovies } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import {
  Container,
  Img,
  BottomContainer,
  NameContainer,
  CharacterContainer,
} from "./MovieCastCarousel.styles";

const MovieCastCarousel = ({
  colors,
  name,
  character,
  profile,
  fetchCastMovies,
  history,
}) => {
  const profileImage = () => {
    return profile
      ? `http://image.tmdb.org/t/p/w138_and_h175_face/${profile}`
      : "https://i.ibb.co/nLjmy5r/empty-Profile.png";
  };
  const handleClick = () => {
    fetchActorMovies(name, 1);
    history.push(`/actors/${name}/page/1`);
  };

  return (
    <Container
      onClick={handleClick}
      fontColor={colors.darktMuted}
      color={colors.vibrant}
    >
      <Img
        profile={profile}
        borderColor={colors.darkMuted}
        src={profileImage()}
        alt=""
      />
      <BottomContainer>
        <NameContainer>{name}</NameContainer>
        <CharacterContainer>{character}</CharacterContainer>
      </BottomContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  colors: state.displayMovie.colors,
});

const mapStateToDispatch = {
  fetchActorMovies: (name, page) => fetchActorMovies(name),
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapStateToDispatch)
)(MovieCastCarousel);
