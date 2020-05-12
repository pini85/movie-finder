import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 70%;
  height: fit-content;
  margin: 4rem;
  color: ${(props) => props.fontColor};
  @media screen and (max-width: 800px) {
    width: auto;
  }

  &:before {
    content: "";
    position: absolute;
    left: 5rem;
    top: 11%;
    height: 64.5%;
    width: 1px;
    background: ${(props) => props.borderColor};
  }
  &:after {
    content: "";
    position: absolute;
    right: 4.5rem;
    top: 11%;
    height: 64.5%;
    width: 1px;
    background: ${(props) => props.borderColor};
  }
`;
