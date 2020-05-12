import styled from "styled-components";
export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 20px;
  background: var(--secondary-color-light);
  height: 7vh;
  padding: 3rem;
  z-index: 5;
`;
export const NavbarItemContainer = styled.ul`
  display: flex;
  margin-right: auto;
`;

export const Img = styled.img`
  height: 6rem;
  width: ${(props) => (props.width < 1000 ? "18rem" : "23rem")};
  margin-top: 1rem;
`;
