import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 2.8rem;
  width: 6rem;
  border: solid 1px black;
  border-radius: 20px;
  background: var(--primary-color);
  cursor: pointer;
  margin-right: 2rem;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 4px;
    height: 85%;
    width: 45%;
    background: white;
    border-radius: 50%;
    transform: ${(props) => (props.toggle ? "translateX(25px)" : null)};
    transition: all 0.3s;
  }
`;
