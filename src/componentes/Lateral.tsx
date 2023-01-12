import { Lateral as Lateral__Componente, Item, Imagem, Título } from '../styled-components/HomeSistemaStyled';
import { Link } from 'react-router-dom';
import { itens } from '../objetos/itens';
import '../css/reset.css';

function Lateral(){
    const token = sessionStorage.getItem('token');
    const tokenXandão = sessionStorage.getItem('tokenXandão');

    function sair(){
        if(token != null){
            sessionStorage.removeItem('token');
            window.location.href='/';
        }

        if(tokenXandão != null){
            sessionStorage.removeItem('tokenXandão');
            window.location.href='/';
        }
    }

    return(
        <>
        <Lateral__Componente>
            {itens.map((item) => (
                <>
                    {item.titulo === 'Sair' &&
                        <Item onClick={() => {
                            sair();
                        }}>
                            <Imagem src={item.imagem} />
                            <Título>{item.titulo}</Título>
                        </Item>
                    }

                    {item.titulo != 'Sair' &&
                        <Link to={`/${item.titulo}`} style={{textDecoration: 'none', color: 'inherit'}}>
                            {item.id === '1' &&
                                <Item style={{borderTop: '1px solid black'}}>
                                    <Imagem src={item.imagem} />
                                    <Título>{item.titulo}</Título>
                                </Item>
                            }

                            {item.id != "1" &&
                                <Item>
                                    <Imagem src={item.imagem} />
                                    <Título>{item.titulo}</Título>
                                </Item>
                            }
                        </Link>
                    }
                </>
            ))}
        </Lateral__Componente>
        </>
    )
}

export default Lateral;