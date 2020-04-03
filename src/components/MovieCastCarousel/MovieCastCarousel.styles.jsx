import styled from "styled-components";

export const Container = styled.div`
position: relative;
    overflow: hidden;
    max-width:17rem;
  
    color: #141414;
    text-align: left;
    line-height: 1.4em;
    font-size: 16px;
   background:${props => props.color}
}
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: top;
  margin: 0 auto;
  box-shadow: 0 0 5px 10px #555;
`;
