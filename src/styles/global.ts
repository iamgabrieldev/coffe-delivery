import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-family: "Baloo 2", sans-serif;
  }

  h1,h2 {
    font-weight: 900;
  }

  h3 {
    font-weight: bold;
  }

  li {
    list-style: none;
  }

`
