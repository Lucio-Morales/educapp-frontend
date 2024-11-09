import { createGlobalStyle } from 'styled-components';
import GradientAnimation from './animations/GradientAnimation';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
    overflow-x: hidden;
    overscroll-behavior: none;
    position: relative;
  }
  html,
  body,
  #root {
    height: 100%;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    letter-spacing: .3px;
    touch-action: pan-x pan-y;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar {
      display: none;
      @media (min-width: 431px) {
        display: unset;
        width: 9px;
        margin:9px;
      }
    }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
    padding: 9px;
  }
  body::-webkit-scrollbar-thumb {
    -webkit-border-radius: 9px;
    border-radius: 9px;
    background: ${({ theme }) => theme.scrollbar};
  }
  * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  }
  .animatedGradientBackground {
    background: linear-gradient(
      180deg,
      rgba(138, 150, 163, 0.1),
      rgb(34, 34, 34),
      rgba(138, 150, 163, 0.1)
    );
    background-size: 300% 300%;
    animation: ${GradientAnimation} 3s ease-in-out infinite;
  }
  .noScrollbar::-webkit-scrollbar {
      display: none;
    }
`;

export default GlobalStyle;
