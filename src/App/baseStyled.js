import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    // font-family: "Prompt";
    scroll-behavior: smooth;
    // background-color: rgba(0,0,0,0.8);
    // color: #fff;
  }

  body {
    -webkit-tap-highlight-color: transparent;
  }
`;
