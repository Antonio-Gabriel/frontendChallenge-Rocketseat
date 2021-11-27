import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  // Variables
  :root {
    --body-bg-color: #22212C;
    --text-color: #837E9F;
    --bg-cards: #302F3D;
    --bg-techs: #CB92B1;
  }

  body {
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

    background: var(--body-bg-color);
  }

`;
