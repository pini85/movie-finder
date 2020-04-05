import styled, { css } from "styled-components";
export const TrailerContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewY(-2.5deg);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background: url(https://image.tmdb.org/t/p/w185//${props => (props.poster ? props.poster : null)});

  background-size: 100% 100%;
  background-repeat: cover;
  background-attachment: inherit;
  height: 25rem;
  width: 17rem;
  bottom: -75px;
  right: -60px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2) skewY(-2.5deg) rotate(5deg);
  }
`;
export const TrailerPlay = styled.div`
  cursor: pointer;
  position: relative;
  height: 35%;
  width: 50%;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  ${props => props.vibrant}
  /* &:hover {
  background: var(--secondary-color);
} */
  &:hover:after {
    color: ${props => props.vibrantDark};
  }
  &:after {
    content: "\\0025BA";
    position: absolute;
    font-size: 4rem;
    color: ${props => props.vibrant};
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
`;