import { useParams } from 'react-router-dom';
import api from '../Api';
import '../css/reset.css';
import { Botão } from '../styled-components/homeStyled';
import { Corpo, Título, Formulário, Info, Input } from '../styled-components/registroStyled';

function Edição(){

    const {id} = useParams();

    function aoEnviar(e: any, id: any){
        e.preventDefault();
        
        api.post(`editar/${id}`);
    }

    return(
        <>
        <Corpo>
            <Formulário onSubmit={(e: any) => aoEnviar(e, id)} method='post' style={{gap: '1.5rem', height: '25rem'}}>
            <Info>
                    <Título>Nome:</Título>
                    <Input placeholder="Insira o seu nome" name="nome" required />
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
};

export default Edição;