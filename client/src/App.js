import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import categorias from './views/Home/categorias'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import ListaUsu from './views/ListaUsuarios/ListaUsuarios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/categoria' element={<categorias/>}/>
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
        <Route path='/usuarios' element={<ListaUsu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
