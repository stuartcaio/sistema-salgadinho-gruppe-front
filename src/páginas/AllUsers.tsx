import '../css/reset.css';
import React, {useState, useEffect} from 'react';
import { Usuarios } from '../styled-components/UsuáriosStyle';
import { Usuário, Info } from '../styled-components/UsuáriosStyle';
import api from '../Api';
import { Corpo } from '../styled-components/usuariosStyled';

function AllUsers(){

    const [usuarios, setUsuarios] = useState<any[]>([]);

    async function consultaUsuário(){
        await api.get('users').then(({data}) => {
            setUsuarios(data);
        });
    };
    
    useEffect(() => {
        consultaUsuário();
    }, []);

    return(
        <>
        <Corpo style={{backgroundColor: 'white'}}>
            <Usuarios>
                {usuarios.map((usuario) => 
                        <Usuário>
                            <Info>Nome: {usuario.nome}</Info> 
                            <Info>Data de Nascimento: {usuario.dataDeNascimento}</Info>
                            <Info>Data de Emissão: {usuario.dataDeEmissão}</Info>
                            <Info>Status: Pago</Info>
                        </Usuário>
                    )
                }
            </Usuarios>
        </Corpo>
        </>
    )
}

export default AllUsers;