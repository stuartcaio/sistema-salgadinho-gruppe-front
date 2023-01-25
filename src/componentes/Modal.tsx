import '../css/reset.css';
import { Modal as Modal__Componente, Título } from '../styled-components/AgendaStyle';

type Props = {
    texto: string | undefined,
    onClose:  any
}

function Modal(props: Props){
    return(
        <Modal__Componente>
            <Título style={{color: 'black', fontSize: '1.25rem'}}>{props.texto}</Título>
            <button style={{
                backgroundColor: '#2C3E50', 
                color: 'white', 
                fontSize: '1.1rem', 
                fontWeight: '400', 
                fontFamily: 'Rajdhani, sans-serif', 
                borderStyle: 'none', 
                borderRadius: '5px',
                padding: '0.5rem'
            }} onClick={props.onClose}>Fechar</button>
        </Modal__Componente>
    )
}

export default Modal;