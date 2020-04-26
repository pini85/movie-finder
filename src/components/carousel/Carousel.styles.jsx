import styled from "styled-components";
import Slider from "react-slick";
export const TrailerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CarouselStyling = styled(Slider)`
  & .slick-slider.slick-initialized {
    padding: 0 4rem;
  }
  & .slick-arrow {
    font-size: 2rem;
  }
  & .slick-arrow.slick-prev {
    position: absolute;
    top: 50%;
    left: 0.5%;
  }
  & .slick-arrow.slick-next {
    position: absolute;
    top: 50%;
    right: 1%;
  }
  & .slick-next::before,
  & .slick-prev::before {
    font-size: 3rem;
    color: ${(props) => props.color};
  }

  & .slick-dots {
    height: 4rem;
    bottom: -20px;
  }
  & .slick-dots li.slick-active button:before {
    opacity: 0.8;
    color: var(--primary-color);
  }
  & .slick-dots li button:before {
    opacity: 0.5;
    color: white;
  }
`;
