import styled from "styled-components";

export const Calendário = styled.div`
display: flex;
justify-content: space-around;
gap: 5rem;
`;

export const Título = styled.h1`
font-size: 2rem;
font-weight: 400;
font-family: 'Rajdhani', sans-serif;
color: white;
`;

export const Formulário = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 1rem;

padding: 2rem;

background-color: #2C3E50;

border-radius: 15px;
border-style: none;

width: 20rem;
`;

export const Input = styled.input`
padding: 0.5rem;

width: 17.5rem;

border: 1px solid grey;
border-radius: 5px;
`;

export const Botão = styled.button`
padding: 0.5rem;

font-size: 1.25rem;
font-weight: 400;
font-family: 'Rajdhani', sans-serif;

background-color: white;

width: 10rem;

border-radius: 5px;
border-style: none;

transition: 1s;

&:hover {
    background-color: rgb(225, 225, 225);
}
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

background-color: 0E5F9D;
`;

export const Modal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

background-color: white;
color: black;

padding: 2rem;

border-radius: 15px;
border: 1px solid black;

z-index: auto;
position: fixed;
top: 10px;
left: 50;
height: 8rem;
width: 30rem;
`;