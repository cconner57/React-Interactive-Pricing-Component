import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
}

html {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    @media (min-width: 375px) {
        
    }
    @media (min-width: 1440px) {
        
    }
}
`

export default GlobalStyle;


// - Font size (Introductory Paragraph): 15px

