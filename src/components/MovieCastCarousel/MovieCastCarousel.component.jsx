import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Img,
  BottomContainer,
  NameContainer,
  CharacterContainer,
} from "./MovieCastCarousel.styles";

const MovieCastCarousel = ({ colors, name, character, profile }) => {
  const profileImage = () => {
    return profile
      ? `http://image.tmdb.org/t/p/w138_and_h175_face/${profile}`
      : "https://i.ibb.co/nLjmy5r/empty-Profile.png";
  };

  return (
    <Container fontColor={colors.darktMuted} color={colors.vibrant}>
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
export default connect(mapStateToProps)(MovieCastCarousel);