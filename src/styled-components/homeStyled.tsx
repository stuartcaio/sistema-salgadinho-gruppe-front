import React from "react";
import styled from 'styled-components';

export const Corpo = styled.body`
display: flex;
flex-direction: column;

background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,27,112,1) 100%);

width: 100vw;
height: 100vh;
`;

export const Cabecalho = styled.header`
display: flex;
justify-content: right;
align-items: center;
gap: 0.5rem;

padding: 1rem;
`;

export const Principal = styled.main`
display: flex;
justify-content: center;
align-items: center;

height: 80rem;
`;

export const Texto = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`;

export const Título = styled.h1`
font-size: 4rem;
font-weight: 400;
font-family: 'Rajdhani', sans-serif;

color: #009AB2;
`;

export const Subtítulo = styled.h2`
font-size: 2rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;
color: #AAE8FE;
`;

export const BotãoOff = styled.button`
background-color: inherit;
color: white;

font-size: 1.25rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;

border-radius: 5px;

width: 7.5rem;
height: 2.5rem;
`;

export const Botão = styled.button`
background-color: #AAE8FE;
color: black;

font-size: 1.25rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;

border-radius: 5px;

width: 7.5rem;
height: 2.5rem;
`;