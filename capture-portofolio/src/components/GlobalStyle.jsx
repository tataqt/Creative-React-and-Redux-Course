import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1700px){
            font-size: 75%;
        }
    }

    body{
        font-family: 'Inter', sans-serif;
        background: #1b1b1b;
        overflow-x: hidden;
    }

    button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all .5s ease;
        &:hover{
            background: transparent;
            color: #fff;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: #fff;
    }

    h4{
        font-size: 2rem;
        font-weight: bold;
    }

    p{
        padding: 3rem 0rem;
        color: #cccccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        color: #23d997;
    }
`;

export default GlobalStyle;