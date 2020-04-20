import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  text-align: center;
  width: 50%;
  color: var(--text-white);
  font-size: 2rem;
  padding: 0 5rem;
`;
export const Title = styled.div`
  display: inline-block;
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    height: 2px;
    width: 95%;
    background: white;
    transform: translate(-50%, -50%);
  }
`;
