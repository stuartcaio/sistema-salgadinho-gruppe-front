import styled from "styled-components";

export const Corpo = styled.body`
display: flex;
`;

export const Lateral = styled.div`
display: flex;
flex-direction: column;

width: 12.5vw;
height: 100vh;

border-right: 1px solid black;
`;

export const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;

height: 22.22vh;

padding: 1rem;

border-bottom: 1px solid black;

transition: 1s;

&:hover {
    background-color: rgb(100, 100, 100);
    color: white;
}
`;

export const Imagem = styled.img`
width: 2rem;
height: 2rem;
`;

export const Título = styled.h2`
font-size: 1.5rem;
font-weight: 400;
font-family: 'Rajdhani', sans-serif;
`;

export const Principal = styled.main`
display: flex;
justify-content: left;
align-items: flex-start;

padding: 2rem;

width: 87vw;
`;