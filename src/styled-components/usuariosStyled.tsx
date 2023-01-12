import styled from 'styled-components';

export const Corpo = styled.body`
display: flex;
justify-content: center;
align-items: center;

padding: 5rem;

background-color: #2C3E50;
`;

export const Logins = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

padding: 5rem;

border-radius: 15px;
border-style: none;

background-color: white;
`;

export const Login = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

font-size: 2rem;
font-weight: 700;
font-family: 'Rajdhani', sans-serif;

width: 50rem;

padding: 2rem;

border-radius: 15px;
border: 1px solid black;
`;

export const Info = styled.h1`

`;

export const Botões = styled.div`
display: flex;
gap: 1rem;

margin-top: 1rem;
`;

export const Botão = styled.button`
padding: 0.5rem;

background-color: #2C3E50;

border-radius: 5px;
border-style: none;
`;