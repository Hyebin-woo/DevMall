import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
button {
  border: none;
  cursor: pointer;
  background-color: transparent;
}
input {
  border: none;
  background-color: inherit;
}
input:focus {
  outline: none;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.ir {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
`;

export default GlobalStyles;
