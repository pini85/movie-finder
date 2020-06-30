import React, { useEffect, useState } from "react";
import { Container } from "./ReviewsCarousel.styles";
import { connect } from "react-redux";
import { ContentContainer } from "./ReviewsCarousel.styles";

const ReviewsCarousel = ({ author, content, color }) => {
  const [exposedText, setExposedText] = useState(null);
  const [hiddenText, setHiddenText] = useState(null);
  const [isHidden, setHidden] = useState(true);
  useEffect(() => {
    if (author === "msbreviews") {
      setExposedText(content.slice(97, 497));
      setHiddenText(content.slice(498));
    }
    setExposedText(content.slice(0, 410));
    setHiddenText(content.slice(411));
  }, []);
  const handleClick = () => {
    setHidden((val) => !val);
  };

  return (
    <Container color={color}>
      <div>
        <i>By: {author} </i>
      </div>
      <ContentContainer>{exposedText}</ContentContainer>
      <div onClick={handleClick}>{!isHidden ? "Show more..." : "Collapse"}</div>
      <div>{!isHidden && hiddenText}</div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  color: state.displayMovie.colors.vibrant,
});
export default connect(mapStateToProps)(ReviewsCarousel);
