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
    color: ${(props) => props.theme.colors.text};
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  h1, h2, h3, h4 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 130%;
  }

  h1 {
    color: ${(props) => props.theme.colors.title};
    font-size: 3rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 2rem;
  }

  h3 {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 1.5rem;
  }

  h4 {
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 1.25rem;
    font-weight: 700;
  }

  @media (max-width: ${(props) => props.theme.screens.md}) {
    body, button, input, textarea {
      font-size: 0.875rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25;
    }
  }
`
