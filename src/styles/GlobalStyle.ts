import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Red Hat Display", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        
        @media (max-width: 999px) {
            background-image: url(${process.env.PUBLIC_URL}/assets/images/pattern-background-mobile.svg);
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: 100%;
            background-color: #e0e8ff;
        }

        @media (min-width: 1000px) {
            background-image: url(${process.env.PUBLIC_URL}/assets/images/pattern-background-desktop.svg);
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: 100%;
            background-color: #e0e8ff;
        }
    }
`