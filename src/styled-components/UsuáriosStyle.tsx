import styled from "styled-components";

export const Usuarios = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
`;

export const Usuário = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

background-color: #2C3E50;
color: white;

padding: 1rem;

width: 25rem;

border-radius: 15px;
border: 1px solid black;
`;

export const Info = styled.h2`
font-size: 1.5rem;
font-weight: 400;
font-family: 'Rajdhani', sans-serif;
`;

export const Botão = styled.button`
background-color: #2C3E50;
color: white;

font-size: 1rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;

width: 7.5rem;

padding: 0.5rem;

border-radius: 5px;
border-style: none;
`;