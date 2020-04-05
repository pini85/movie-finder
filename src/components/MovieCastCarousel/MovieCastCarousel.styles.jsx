import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  color: ${(props) => props.fontColor};
  font-weight: 700;
  border-radius: 10px;
  padding: 5px;
  height: 30rem;
  max-width: 18rem;
  margin: 0 1rem;
  margin-bottom: 2rem;
  text-align: left;

  font-size: 16px;
  background: ${(props) => props.color};
  background: transparent;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  /* border-top-left-radius: 120px;
  border-top-right-radius: 120px; */
`;
const noPhotoStyles = `
height: 14rem;
width:14rem
`;
export const Img = styled.img`
  border-radius: 10px;
  padding-top: 1rem;
  margin: 0 auto;
  ${(props) => (!props.profile ? noPhotoStyles : null)}
`;

export const BottomContainer = styled.div`
  padding: 1rem;
`;

export const NameContainer = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const CharacterContainer = styled.div`
  font-weight: 300;
  font-size: 1.4rem;
`;