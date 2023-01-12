import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Registro from './páginas/Registro';
import Login from './páginas/Login';
import HomeSistema from './páginas/Home-Sistema';
import Edição from './páginas/Edição';
import Empresas from './páginas/Empresas';
import UsuáriosAdmin from './páginas/UsuáriosAdmin';
import Usuários from './páginas/Usuários';
import AllUsers from './páginas/AllUsers';
import Agenda from './páginas/Agenda'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const token = sessionStorage.getItem('token');
const tokenXandão = sessionStorage.getItem('tokenXandão');
const usuarioEstaLogado = (token != null || tokenXandão != null);
const admEstaLogado = (tokenXandão != null);

function verificaAutenticacao(componente: any){
  if(usuarioEstaLogado){
    return componente
  } else{
    return <Login />
  }
}

function verificaAutenticacaoAdmin(componente: any){
  if(admEstaLogado){
    return componente;
  }
}

function verificaComponenteLogin(componente: any){
  if(usuarioEstaLogado){
    return <HomeSistema />
  } else{
    return componente
  }
}


root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/login' element={verificaComponenteLogin(<Login />)} />
      <Route path='/sistema' element={verificaAutenticacao(<HomeSistema />)} />
      <Route path='/usuários-admin' element={verificaAutenticacaoAdmin(<UsuáriosAdmin />)} />
      <Route path='/usuários/editar/:id' element={verificaAutenticacaoAdmin(<Edição />)} />
      <Route path='/empresas' element={verificaAutenticacao(<Empresas />)} />
      <Route path='/usuários' element={verificaAutenticacao(<Usuários />)} />
      <Route path='/all-users' element={verificaAutenticacao(<AllUsers />)} />
      <Route path='/agenda' element={verificaAutenticacao(<Agenda />)} />
    </Routes>
  </Router>
);