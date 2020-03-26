import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 70rem;
  justify-content: center;
  padding-bottom: 4rem;
  background: var(--secondary-color);
`;
export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  background: var(--secondary-color-light);
  color: var(--text-white);

  padding: 3px 8px;
  border: 1px solid var(--secondary-color-lightest);
  transition: all 0.3s;
  &:hover {
    background: var(--secondary-color-lightest);
    color: var(--text-dark);
  }
  &:focus {
    outline: 0 !important;
  }
`;
