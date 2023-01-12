import { useEffect, useState } from 'react';
import api from '../Api';
import '../css/reset.css';
import { Botão } from '../styled-components/homeStyled';
import { Info } from '../styled-components/registroStyled';
import { Botões, Corpo, Login, Logins } from '../styled-components/usuariosStyled';
import { Link } from 'react-router-dom';

function UsuáriosAdmin(){

    const [usuarios, setUsuarios] = useState<any[]>([]);

    async function consultaUsuários(){
        await api.get('users').then(({data}) => {
            setUsuarios(data);
        });
    }

    useEffect(() => {
        consultaUsuários();
    }, []);

    return(
        <>
        <Corpo>
            <Logins>
                {usuarios.map((usuário) => (
                    <Login>
                        <Info>Nome: {usuário.nome}</Info>
                        <Info>E-mail: {usuário.email}</Info>
                        <Info>Senha: {usuário.senha}</Info>
                        <Info>Data de nascimento: {usuário.dataDeNascimento}</Info>
                        <Info>Data de emissão: {usuário.dataDeEmissão}</Info>

                        <Botões>
                            <form action={`http://localhost:8080/excluir/${usuário.id}`} method="delete">
                                <Botão type='submit'>Excluir</Botão>
                            </form>   
                            <Link to={`/usuários/editar/${usuário.id}`}>
                                <Botão type='submit'>Editar</Botão>
                            </Link>
                        </Botões>
                    </Login>
                ))}
            </Logins>
        </Corpo>
        </>
    )
}

export default UsuáriosAdmin;