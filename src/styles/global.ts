import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body {
    display: flex;
    justify-content: center;
    background: #0A71A8;
    color: #3A3031;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 54px;
    font-weight: 800;
    color: #F5EF0F;
  }

  h2 {
    font-size: 36px;
    font-weight: 800;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;

    & + h3 {
      margin-top: 24px;
    }
  }


  strong {
    font-weight: 500;
  }


`;
