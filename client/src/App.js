import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './views/Home/index'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
