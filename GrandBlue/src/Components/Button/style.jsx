import styled from "styled-components";

const ButtonCompBlue = styled.button`
    background-color:#2DABD3;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 65%;
    height: 3rem;
    border: none ;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;

`

const ButtonCompWhite = styled.button`
    color: #2DABD3;
    background-color:#ffffff;
    border: 1px #212121 ;
    text-transform: uppercase;
    letter-spacing: 0.2 rem;
    width: 65%;
    height: 3rem;
    border: none ;
    border-radius: 2rem;
    cursor: pointer;
    a { color: inherit; } 
    text-decoration: none;
`

export {ButtonCompWhite, ButtonCompBlue}