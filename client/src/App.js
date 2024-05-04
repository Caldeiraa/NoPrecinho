import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './views/Home/index'
<<<<<<< HEAD
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
=======
import ListaUsu from './views/ListaUsuarios/ListaUsuarios'
>>>>>>> 3f40ba0596f81a13a0237d9cc83602c7d8d09b4d

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
=======
        <Route path='/usuarios' element={<ListaUsu/>}/>
>>>>>>> 3f40ba0596f81a13a0237d9cc83602c7d8d09b4d
      </Routes>
    </BrowserRouter>
  );
}

export default App;
