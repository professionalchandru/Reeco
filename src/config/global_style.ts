import styled, { createGlobalStyle } from 'styled-components'
import { palette, key } from 'styled-theme';
import inter from '../assets/fonts/Inter-Regular.ttf';

export const ThemedGlobalStyle = createGlobalStyle`
html {
  width:100vw;
  height:100vh;
  scroll-behavior: smooth;
  
}
  body {
   width:100%;
   height:100%;
    background-color: ${palette('backgroundV3', 0)};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  th,
  td,
  svg {
    margin: 0;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${inter});
  }
  `;

export const AppContainer = styled.div`
background: ${palette('background', 0)};
height: 100vh;
width: 100vw;
overflow-x: hidden;
`

export const PageBody = styled.div`
display: flex;
flex-direction: column;
gap: ${key('size.gutter.normal')};

padding: ${key('size.gutter.normal')} 100px;
// height: calc(100% - 168px);
overflow-y: auto;
`
