import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Categorias from './views/Home/index'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import ListaUsu from './views/ListaUsuarios/ListaUsuarios';
import Login from './views/Login/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/categoria' element={<Categorias/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
        <Route path='/usuarios' element={<ListaUsu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
