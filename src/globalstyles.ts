import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-windows-bg: #c1cfd0;
  --lg-border: linear-gradient(to right, #161d17, #0c71ba);
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
`;

export default GlobalStyles;
