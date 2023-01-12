import '../css/reset.css';
import React, {useState, useEffect} from "react";
import Lateral from '../componentes/Lateral';
import { Corpo, Principal} from '../styled-components/HomeSistemaStyled';
import { Link } from 'react-router-dom';
import { itens } from '../objetos/itens';
import { Usuarios, Usuário, Info, Botão } from '../styled-components/UsuáriosStyle';
import api from '../Api';

function Usuários(){

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
        <Corpo>
            <Lateral />
            <Principal style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
                <Usuarios>
                    {usuarios.map((usuario) => 
                        usuario.id <= 6 &&
                            <Usuário>
                                <Info>Nome: {usuario.nome}</Info> 
                                <Info>Data de Nascimento: {usuario.dataDeNascimento.slice(0, 10)}</Info>
                                <Info>Data de Emissão: {usuario.dataDeEmissão.slice(0, 10)}</Info>
                            </Usuário>
                        )
                    }
                </Usuarios>
                {usuarios.length > 6 &&
                    <Link to={'/all-users'}>
                        <Botão>Ver mais</Botão>
                    </Link>
                }
            </Principal>
        </Corpo>
        </>
    )
}

export default Usuários;