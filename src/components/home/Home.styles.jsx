import styled from "styled-components";
export const Container = styled.div`
  padding: 0 8vw;
  background-color: var(--secondary-color);
  overflow: hidden;
  @media screen and (max-width: 1300px) {
    padding: 0;
  }
`;
export const CarouselContainer = styled.div`
  padding: 0 10%;
  @media screen and (max-width: 1200px) {
    padding: 0 3%;
  }
`;
export const Header = styled.div`
  font-size: var(--heading-primary);
  font-weight: 700;
  color: var(--text-white);
  text-align: center;
  margin-top: 4rem;
`;

export const Paragraph = styled.div`
  font-size: var(--heading-secondary);
  font-weight: 700;
  color: var(--primary-color);
  text-align: center;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 4rem 0;
`;
