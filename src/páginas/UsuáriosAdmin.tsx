import { useEffect, useState } from 'react';
import api from '../Api';
import '../css/reset.css';
import { Botão } from '../styled-components/homeStyled';
import { Info } from '../styled-components/registroStyled';
import { Botões, Corpo, Login, Logins } from '../styled-components/usuariosStyled';
import { Link } from 'react-router-dom';

function UsuáriosAdmin(){

    const [usuarios, setUsuarios] = useState<any[]>([]);

    const token = sessionStorage.getItem('tokenXandão') || undefined;

    async function consultaUsuários(){
        await api.get('usersADM').then(({data}) => {
            setUsuarios(data);
        })
    }

    useEffect(() => {
        consultaUsuários();
    }, []);

    function aoEnviar(e: any, id: any){
        e.preventDefault();

        api.get(`excluir/${id}`);
    }

    return(
        <>
        <Corpo>
            <Logins>
                {usuarios.map((usuario) => (
                    <Login key={usuario.id}>
                        <Info>Nome: {usuario.nome}</Info>
                        <Info>E-mail: {usuario.email}</Info>
                        <Info>Senha: {usuario.senha}</Info>
                        <Info>Data de nascimento: {usuario.dataDeNascimento}</Info>
                        <Info>Data de emissão: {usuario.dataDeEmissão}</Info>

                        <Botões>
                            <form onSubmit={(e: any) => aoEnviar(e, usuario.id)} method="delete">
                                <Botão type='submit'>Excluir</Botão>
                            </form>   
                            <Link to={`/usuários/editar/${usuario.id}`}>
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