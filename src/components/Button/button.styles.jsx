import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1rem 2.5rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-dark);
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s;
  &:hover {
    background-color: var(--primary-color-light);
    transform: translateY(-3px);
  }
`;
