import { createGlobalStyle } from 'styled-components';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'circular-std';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root{
    min-height: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body,input,button{
    color: #222;
    font-size: 14px;
    font-family: 'CircularStd', sans-serif;
  }

  textarea{
    font-family: 'CircularStd', sans-serif;
  }

  button {
    cursor: pointer;

    > span {
      font-weight: 600
    }
  }

`;
