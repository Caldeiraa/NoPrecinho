import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
<<<<<<< HEAD
import Categorias from './views/Home/index'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import ListaUsu from './views/ListaUsuarios/ListaUsuarios';
import Login from './views/Login/index'

=======
import Categorias from './views/categorias/categorias'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import ListaUsu from './views/ListaUsuarios/ListaUsuarios'
import Home from './views/Home/index'
>>>>>>> 929137cbfb44a2dc7455dbd91c16df71027826b0

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/categoria' element={<Categorias/>}/>
        <Route path='/login' element={<Login/>}/>
=======
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Categorias/>}/>
>>>>>>> 929137cbfb44a2dc7455dbd91c16df71027826b0
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
        <Route path='/usuarios' element={<ListaUsu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
