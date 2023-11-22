import { createGlobalStyle } from 'styled-components';
import './fonts/digital7.ttf';
import './fonts/minesweeper.ttf';

const GlobalStyles = createGlobalStyle`
:root {
  --color-windows-bg: #c1cfd0;
  --color-windows-border: #8e9b9d;
  --lg-border: linear-gradient(to right, #161d17, #0c71ba);
}

@font-face {
  font-family: "Digital7";
  src: local('Digital7'), url('./fonts/digital7.ttf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Minesweeper";
  src: local('Minesweeper'), url('./fonts/minesweeper.ttf');
  font-weight: normal;
  font-style: normal;
}

*,
*::before,
&::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: sans-serif;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #424242;
}

img, canvas {
  max-width: 100%;
  height: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

button {
  border: none;
  outline: none;
}

.errorInput {
  outline: 1px solid red !important;
}
`;

export default GlobalStyles;

export const borderDarkTop = (width: number) => `
  border-bottom: ${width}px solid #fff;
  border-right: ${width}px solid #fff;
  border-top: ${width}px solid #7b7b7b;
  border-left: ${width}px solid #7b7b7b;
`;

export const borderLightTop = (width: number) => `
  border-top: ${width}px solid #fff;
  border-left: ${width}px solid #fff;
  border-right: ${width}px solid #7b7b7b;
  border-bottom: ${width}px solid #7b7b7b;
`;
