import styled from "styled-components";
import Slider from "react-slick";
export const TrailerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CarouselStyling = styled(Slider)`
  /* & .slick-slider.slick-initialized {
    padding: 0 4rem;
    @media screen and (max-width: 700px) {
      padding: 0;
    }
  } */
  & .slick-arrow {
    font-size: 2rem;
  }
  & .slick-arrow.slick-prev {
    position: absolute;
    top: 50%;
    left: 1rem;
    z-index: 99;
  }
  & .slick-arrow.slick-next {
    position: absolute;
    top: 50%;
    right: 1.8rem;
    z-index: 99;
  }
  & .slick-next::before,
  & .slick-prev::before {
    font-size: 3rem;

    color: ${(props) => props.color};
    /* @media screen and (max-width: 700px) {
      font-size: 4rem;
    } */
  }

  & .slick-dots {
    height: 4rem;

    bottom: -17px;
    display: flex;
    justify-content: center;
  }
  & .slick-dots li.slick-active button:before {
    opacity: 0.8;
    color: ${(props) => props.activeDotColor};
  }
  & .slick-dots li button:before {
    opacity: 0.5;
    color: white;
  }
`;
