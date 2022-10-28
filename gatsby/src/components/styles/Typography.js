import { createGlobalStyle } from 'styled-components';

import miwoff from '../../assets/fonts/Misasam-Regular.woff';
import miwoff2 from '../../assets/fonts/Misasam-Regular.woff2';
import mittf from '../../assets/fonts/Misasam-Regular.ttf';

import thwoff from '../../assets/fonts/Tartuffo-ThinItalic.woff';
import thwoff2 from '../../assets/fonts/Tartuffo-ThinItalic.woff2';
import thttf from '../../assets/fonts/Tartuffo-ThinItalic.ttf';



export const Typography = createGlobalStyle`

@import url("https://use.typekit.net/tqe3nzz.css");


@font-face {
    font-family: 'Misasam';
    src: url('${miwoff2}') format('woff2'),
        url('${miwoff}') format('woff'),
        url('${mittf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Tartuffo';
    src: url('${thwoff2}') format('woff2'),
        url('${thwoff}') format('woff'),
        url('${thttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'Misasam', serif;
    --italic: 'Tartuffo', serif;
    --black: #000000;
      --white: #ffffff;
      overflow-wrap: break-word;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
      background-color: var(--black);
        color: var(--white);
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }
`
