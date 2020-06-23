import styled from "styled-components";
export const Container = styled.div`
  box-sizing: border-box;
  width: 15em;
  height: 3em;
  font-size: 20px;
  border-radius: 0.5em;
  margin: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  color: ${(props) => props.textLight};
  text-transform: uppercase;
  line-height: 3em;
  font-weight: 700;

  transition: all 0.3s;
  cursor: pointer;
  /* ${(props) =>
    props.left
      ? `background:linear-gradient(to right, ${props.color2}, ${props.color1}); text-align: left; padding-left: 10%;  transform: perspective(500px) rotateY(45deg); `
      : `background:linear-gradient(to left, ${props.color2}, ${props.color1});  text-align: right; padding-right: 10%; transform: perspective(500px) rotateY(-45deg);`}; */
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0.5em;

    background: ${(props) =>
      props.left
        ? `linear-gradient(to right, ${props.color1}, ${props.color2})`
        : `linear-gradient(to right, ${props.color2}, ${props.color1})`};
    z-index: -1;
    transition: opacity 0.3s;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    ${(props) =>
      props.left
        ? `transform: perspective(200px) rotateY(45deg);padding-left: 5%;`
        : `transform: perspective(200px) rotateY(-45deg);padding-right: 5%; background:linear-gradient(to right, ${props.color2}, ${props.color1});`};
  }
`;
