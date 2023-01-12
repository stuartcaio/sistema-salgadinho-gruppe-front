import '../css/reset.css';
import { Empresa, Lista, Título, Imagem, Número } from '../styled-components/EmpresasStyle';
import Lateral from '../componentes/Lateral';
import { Corpo, Principal } from '../styled-components/HomeSistemaStyled';
import { empresas } from '../objetos/empresas';

function Empresas(){

    return(
        <>
        <Corpo>
            <Lateral />
            <Principal>
                <Lista>
                {empresas.map((empresa) => (
                    <Empresa>
                        <Imagem src={empresa.imagem} />
                        <Título>{empresa.nome}</Título>
                        <Número>
                            <a href="" onClick={() => {
                                window.open(
                                `http://api.whatsapp.com/send?1=pt_BR&phone=${empresa.numero}`,
                                '_system', 'location=yes')
                            }}>
                                <Imagem src={require('../img/whatsapp.png')} style={{width: '2.5rem', height: '2.5rem'}} />
                            </a>
                            <Título style={{fontSize: '1.25rem'}}>{empresa.numero}</Título>
                        </Número>
                    </Empresa>
                ))}
                </Lista>
            </Principal>
        </Corpo>
        </>
    )
}

export default Empresas;