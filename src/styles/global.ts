import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']};
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

  h1, h2, h3, h4, h5 {
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

  h5 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.subtitle};
    font-weight: 700;
  }

  ::-webkit-scrollbar {
    background-color: 
      rgba(from  ${(props) => props.theme.colors.title} r g b / 0.1);
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: 
      rgba(from  ${(props) => props.theme.colors.title} r g b / 0.4);
    border-radius: 9999px;
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
