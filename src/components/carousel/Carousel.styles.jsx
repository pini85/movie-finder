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
    @media screen and (max-width: 700px) {
      padding: 0;
    }
  }
  & .slick-arrow {
    font-size: 2rem;
  }
  & .slick-arrow.slick-prev {
    position: absolute;
    top: 50%;
    left: 1rem;
  }
  & .slick-arrow.slick-next {
    position: absolute;
    top: 50%;
    right: 1.8rem;
  }
  & .slick-next::before,
  & .slick-prev::before {
    font-size: 3rem;
    color: ${(props) => props.color};
  }

  & .slick-dots {
    height: 4rem;
    width: 89%;
    bottom: -17px;
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
