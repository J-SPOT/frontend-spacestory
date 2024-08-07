import { Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, css, theme } from 'twin.macro';

const customStyles = css`
  html,
  body,
  #__next {
    height: 100%;
  }
  body {
    position: relative;
    width: 100%;
    overflow: auto;
    min-width: ${theme`variables.apps.min-width`};
    background-color: white;
    -webkit-tap-highlight-color: transparent;
    font-family: 'NanumGothic', 'Pretendard', Helvetica, 'Apple SD Gothic Neo',
      Sans-serif !important;
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={{ ...customStyles }} />
  </>
);

export default GlobalStyles;
