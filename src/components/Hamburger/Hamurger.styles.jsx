import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  /* background: red; */
`;
export const HandleBars = styled.span`
  position: relative;
  bottom: -1.5rem;
  height: 4px;
  width: 5rem;
  display: inline-block;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : "var(--primary-color)"};
  transition: all 1s;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--primary-color);
    left: 0;
    top: -1.5rem;
    transform: ${(props) =>
      props.isOpen ? "rotate(405deg) translateY(-4px) translateX(-6px)" : null};
    transition: all 0.5s;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--primary-color);
    left: 0;
    top: -3rem;
    transform: ${(props) =>
      props.isOpen
        ? "rotate(-405deg) translateY(1px) translateX(-3px);"
        : null};
    transition: all 0.5s;
  }
`;
export const Navigation = styled.div`
  position: absolute;
  top: 3.5vh;
  left: -24px;
  height: 60rem;
  width: 30rem;
  background: blue;
`;
