import React from "react";
import { Container } from "./ReviewsCarousel.styles";
const ReviewsCarousel = ({ author, content }) => {
  return (
    <Container>
      <div>author:{author} </div>
      {/* <div>content: {content}</div> */}
    </Container>
  );
};
export default ReviewsCarousel;
