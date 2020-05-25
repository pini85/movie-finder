import React from "react";
import { Container } from "./ReviewsCarousel.styles";
import { connect } from "react-redux";
import { ContentContainer } from "./ReviewsCarousel.styles";

const ReviewsCarousel = ({ author, content, color }) => {
  const cutContent = (content) => {
    if (author === "msbreviews") {
      return content.slice(97, 497);
    }
    return content.slice(0, 410);
  };

  return (
    <Container color={color}>
      <div>
        <i>By: {author} </i>
      </div>
      <ContentContainer>{cutContent(content)}</ContentContainer>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  color: state.displayMovie.colors.vibrant,
});
export default connect(mapStateToProps)(ReviewsCarousel);
