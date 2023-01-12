import React from "react";
import '../css/reset.css';
import { Botão } from "../styled-components/homeStyled";
import { Corpo, Formulário, Input, Título, Info } from "../styled-components/registroStyled";

function Registro(){
    return(
        <>
        <Corpo>
            <Formulário action="http://localhost:8080/registrar" method="post" style={{gap: '1.5rem', height: '25rem'}}>
                <Info>
                    <Título>Nome:</Título>
                    <Input placeholder="Insira o seu nome" name="nome" required />
                </Info>
                <Info>
                    <Título>E-mail:</Título>
                    <Input placeholder="Insira o seu e-mail" name="email" required />
                </Info>
                <Info>
                    <Título>Senha:</Título>
                    <Input placeholder="Insira a sua senha" type={'password'} name="senha" required />
                </Info>
                <Info>
                    <Título>Data de Nascimento:</Título>
                    <Input type={'date'} name="dataDeNascimento" required />
                </Info>
                <Info>
                    <Título>Data de Emissão</Título>
                    <Input type={'date'} name="dataDeEmissão" required />
                </Info>
                <Botão type="submit">Enviar</Botão>
            </Formulário>
        </Corpo>
        </>
    )
}

export default Registro;