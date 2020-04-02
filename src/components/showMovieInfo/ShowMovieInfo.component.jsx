import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  text-align: center;
  width: fit-content;
  height: fit-content;
  margin-top: 3rem;
  border-radius: 8px;
  padding: 2rem 4rem;

  color: ${props => props.color};
`;

const TitleContainer = styled.div`
  font-weight: 700;
  font-size: var(--heading-secondary);
`;

const GenreContainer = styled.div`
  font-size: 1.7rem;
`;
const YearContainer = styled.div`
  font-size: var(--paragraph);
`;

const ImageContainer = styled.div`
  display: inline-block;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
`;

const ReviewContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 2rem;
  width: 3rem;
  position: relative;
  z-index: -1;
  display: block;
`;
const ShowMovieInfo = ({ color, title, year, genre, runTime }) => {
  return (
    <Container style={{ color: color }}>
      <TitleContainer>
        {title} ({year})
      </TitleContainer>
      <GenreContainer>
        {genre}
        &nbsp;<span>&#124;</span>&nbsp;
        {runTime}min
      </GenreContainer>

      <ReviewContainer>
        <ImageContainer>
          <Image src={require("../../images/imdb.png")} alt="" />
        </ImageContainer>
        <div>
          <Image src={require("../../images/tomato.png")} alt="" />
        </div>
        <div>
          <Image src={require("../../images/meta-critic.png")} alt="" />
        </div>
      </ReviewContainer>
    </Container>
  );
};

export default ShowMovieInfo;
