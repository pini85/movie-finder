import styled from "styled-components";
export const Container = styled.div`
  position: absolute;
  top: 3.8vh;
  left: -30px;
  width: 30rem;
  background: var(--secondary-color);
  border: 2px solid var(--primary-color);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 5px;
`;

export const Options = styled.ul`
  padding: 7rem 3rem;
`;

export const Option = styled.li`
  padding: 0.2rem 0;
  color: var(--text-white);
  font-size: 2rem;
  transition: all 0.3s;
  &:hover {
    color: var(--primary-color);
  }
`;
