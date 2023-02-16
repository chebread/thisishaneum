import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    box-sizing: border-box;
  }
  
  html, body, #root {
    position: relative;
    height: 100%;
    background-color: #0a0a0a;
    color: #fff;
    font-weight: 600;
    box-sizing: border-box;
    cursor: text; // none
  }
  
  /* ::selection {
    background-color: rgb(7, 238, 0, 99.9999999999999%); // 99%: 사파리 대응을 위해 반투명 설정함
    color: #000;
  } */

  ::-webkit-scrollbar {
    display: none;
  }
  /* @media (max-width: 1150px) {
    body {
      display: none;
    }
  } */
`;

export default GlobalStyles;
