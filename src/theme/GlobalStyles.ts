import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    color-scheme: dark;
  }

  body {
    background-color: ${({ theme }) => theme.colors.darkBase};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* Custom Selection Color */
  ::selection {
    background-color: ${({ theme }) => theme.colors.accentLime};
    color: ${({ theme }) => theme.colors.darkBase};
  }

  /* Headings with discipline */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    color: ${({ theme }) => theme.colors.textHighlight};
    letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  }

  /* Display Font Class for Poiret One accents */
  .font-display {
    font-family: ${({ theme }) => theme.fonts.display};
    letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  img, svg, picture, video {
    display: block;
    max-width: 100%;
  }

  /* Subtle Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkBase};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondarySurface};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.darkBase};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accentLime};
  }
`;
