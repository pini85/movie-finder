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
  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 3rem;
  }

  &:before {
    content: "";
    position: absolute;
    left: 41px;
    top: 11%;
    height: 64.5%;
    width: 1px;
    background: ${(props) => props.borderColor};
  }
  &:after {
    content: "";
    position: absolute;
    right: 41px;
    top: 11%;
    height: 64.5%;
    width: 1px;
    background: ${(props) => props.borderColor};
  }
`;
