import styled from "styled-components";

export const BottomContainer = styled.div`
  height: 46.4%;
  display: flex;
  flex-wrap: wrap;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  align-self: flex-start;
  padding: 4rem 0;
`;

export const PlotContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
  align-self: flex-start;
  color: ${props => props.color};
  font-size: var(--paragraph);
  /* background: red; */
`;
