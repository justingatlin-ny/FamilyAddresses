import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${props => (props.whiteFontColor ? "white" : "black")};
    background-color: ${props =>
      props.blackBackgroundColor ? "black" : "white"};
  }
  a  {
    color: black;
  }

`;

export default GlobalStyles;
