import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  text-align: center;
  font-size: var(--heading-secondary);
  width: fit-content;
  height: fit-content;
  margin-top: 3rem;
  border-radius: 8px;
  padding: 2rem 4rem;
  font-weight: 700;
  color: ${props => props.color};
`;
const YearContainer = styled.div`
  font-size: var(--paragraph);
`;

const ReviewContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 2rem;
  width: 3rem;
`;
const ShowMovieInfo = props => {
  return (
    <Container style={{ color: props.color }}>
      <div>
        {props.title} ({props.year})
      </div>

      <ReviewContainer>
        <div>
          <Image src={require("../../images/imdb.png")} alt="" />
        </div>
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
