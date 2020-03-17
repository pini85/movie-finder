import styled from "styled-components";

export const Container = styled.div`
  color: var(--text-white);
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  background: transparent;
  border: 1px solid var(--primary-color);
  margin: 0 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--text-dark);
    background: var(--primary-color);
  }
`;
