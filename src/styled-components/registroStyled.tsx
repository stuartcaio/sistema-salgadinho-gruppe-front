import styled from 'styled-components';

export const Corpo = styled.body`
display: flex;
justify-content: center;
align-items: center;

background-color: #2C3E50;

width: 100vw;
height: 100vh;
`;

export const Formulário = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

background-color: white;

padding: 5rem;

width: 
height: 20rem;

border-radius: 15px;
border-style: none;
`;

export const Input = styled.input`
padding: 0.5rem;

font-size: 1rem;

width: 15rem;
height: 1.5rem;

border: 1px solid grey;
border-radius: 5px;
`;

export const Título = styled.h1`
font-size: 1.25rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;
align-self: flex-start;
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`;