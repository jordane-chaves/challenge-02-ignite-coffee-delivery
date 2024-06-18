import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    max-width: 72rem;
    margin: 0 auto;
    padding-inline: 1rem;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  h1, h2, h3 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 130%;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`
