import '../css/reset.css';
import Lateral from '../componentes/Lateral';
import { Corpo, Principal, Título} from '../styled-components/HomeSistemaStyled';

function HomeSistema(){
    return(
        <>
        <Corpo>
            <Lateral />
            <Principal>
                <Título style={{fontSize: '2rem'}}>Seja bem-vindo ao Sistema de Salgadinhos da Gruppe Tecnologia</Título>
            </Principal>
        </Corpo>
        </>
    )
}

export default HomeSistema;