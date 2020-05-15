import styled from "styled-components";

export const Container = styled.div`
  color: var(--text-white);
  width: fit-content;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  width: fit-content;
  font-size: 2rem;
  margin-left: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:last-child {
    margin-bottom: 2.5rem;
  }
`;
