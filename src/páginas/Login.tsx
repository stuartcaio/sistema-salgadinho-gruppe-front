import '../css/reset.css';
import { Corpo, Formulário, Input } from '../styled-components/registroStyled';
import { Botão } from '../styled-components/homeStyled';
import { useState } from 'react';
import api from '../Api';

function Login(){
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();

    const token = sessionStorage.getItem('token');

    function aoEnviar(e: HTMLFormElement){
        e.preventDefault();

        const usuario = {
            email,
            senha
        }

        api.post('logar', usuario).then((resposta) => {
            if(resposta.data.user.nome == 'Caio Weber Stuart' && resposta.data.user.email == 'caiostuart06@gmail.com'){
                sessionStorage.setItem('tokenXandão', resposta.data.tokenXandão);
            } else{
                sessionStorage.setItem('token', resposta.data.token);
            }
            setEmail('');
            setSenha('');
            window.location.href='/sistema';
        }).catch((erro) => {
            if(erro?.resposta?.data?.menssage){
                alert(erro.response.data?.menssage);
            } else{
                alert('Aconteceu erro ao efetuar o login.');
            };
        });
    }

    return(
        <>
        <Corpo>
            <Formulário onSubmit={(e: any) => aoEnviar(e)} style={{justifyContent: 'center', gap: '2rem'}}>
                <Input placeholder="Insira o seu e-mail" name="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required />
                <Input placeholder="Insira a sua senha" name="senha" type={'password'} value={senha} onChange={(e: any) => setSenha(e.target.value)} required />
                <Botão type="submit">Enviar</Botão>
            </Formulário>
        </Corpo>
        </>
    )
}

export default Login;