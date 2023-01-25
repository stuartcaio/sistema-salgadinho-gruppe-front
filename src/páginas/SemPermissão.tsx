import { Título } from "../styled-components/HomeSistemaStyled";
import { Botão } from "../styled-components/UsuáriosStyle";
import { Link } from "react-router-dom";

function SemPermissão(){
    return(
        <>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Título style={{textAlign: 'center', padding: '2rem', fontSize: '2rem'}}>Você não tem permissão para acessar este local :/</Título>
            <Link to={'/sistema'}>
                <Botão style={{width: '4rem', height: '2rem'}}>Voltar</Botão>
            </Link>
        </div>
        </>
    );
}

export default SemPermissão;