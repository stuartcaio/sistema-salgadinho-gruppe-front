import styled from "styled-components";

export const Lista = styled.ul`
display: flex;
flex-wrap: wrap;
align-self: center;
gap: 2rem;

margin-left: 10rem;

width: 75rem;
`;

export const Empresa = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

border-radius: 10px;
border: 1px solid black;

width: 17.5rem;
height: 15rem;

padding: 2rem;
`;

export const Número = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

export const Imagem = styled.img`
width: 7.5rem;
height: 7.5rem;
`;

export const Título = styled.h1`
font-size: 2rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;
`;