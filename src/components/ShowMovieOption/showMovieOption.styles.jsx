import styled from "styled-components";

export const ModalContainer = styled.div`
  background: white;
  width: 50rem;
`;

// export const Container = styled.div`
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 3rem;
//   border-radius: 15px;
//   background: ${props => props.color};
//   margin: 2rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//   &:hover {
//     background: ${props => props.colorHover};
//     box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//   }
// `;

export const Container = styled.div`
  box-sizing: border-box;
  width: 15em;
  height: 3em;
  font-size: 20px;
  border-radius: 0.5em;
  margin: 0.5em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  color: white;
  text-transform: capitalize;
  line-height: 3em;
  transition: 0.3s;
  cursor: pointer;
  background: linear-gradient(to right, orange, tomato);
  text-align: left;
  padding-left: 10%;
  transform: perspective(500px) rotateY(45deg);
  &:hover {
    transform: perspective(200px) rotateY(45deg);
    padding-left: 5%;
  }
`;
