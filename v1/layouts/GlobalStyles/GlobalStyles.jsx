import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    overscroll-behavior: none;
    margin: 0;
    padding: 0;
    // font
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  }

  html, body, #root {
    background-color: #0a0a0a;
    color: #fff;
    font-weight: 600;
    box-sizing: border-box;
    cursor: pointer;
    // full size screen
    position: relative;
    height: 100%;
  }
 

  ::selection {
    background-color: rgb(7, 238, 0, 99.9999999999999%); // 99%: 사파리 대응을 위해 반투명 설정함
    color: #000;
  } 
  ::-webkit-scrollbar {
    display: none;
  } 
  // #0077ee #ff880f #07ee00
`;

export default GlobalStyles;
