import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html { 
  font-size:62.5%;
  @media screen and (max-width:1300px){
    font-size:55%;
  }
  @media screen and (max-width:1200px){
    font-size:49%;
  }
  @media screen and (max-width:1000px){
    font-size:45%;
  }
 }
body {
  margin: 0;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.7;
}
ul {list-style-type: none; }
a:visited {
  color: var(--text-white);
}
:any-link {
  text-decoration: none;
}
`;
