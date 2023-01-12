import React from 'react';
import './css/reset.css';
import { Botão, BotãoOff, Cabecalho, Corpo, Principal, Subtítulo, Texto, Título } from './styled-components/homeStyled';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Corpo>
      <Cabecalho>
          <BotãoOff>
            <Link to="/registro" style={{textDecoration: 'none', color: 'inherit'}}>
              Registrar
            </Link>
          </BotãoOff>
          <Botão>
            <Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}>
              Login
            </Link>
          </Botão>
      </Cabecalho>
      <Principal>
        <Texto>
          <Título>Sistema de Salgadinho</Título>
          <Subtítulo>Gruppe Tecnologia</Subtítulo>
        </Texto>
      </Principal>
    </Corpo>
    </>
  );
}

export default App;
