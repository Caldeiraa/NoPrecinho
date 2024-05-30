import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ListaUsu from './views/ListaUsuarios/ListaUsuarios';
import Login from './views/Login/index'
import Categorias from './views/categorias/categorias'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import Home from './views/Home/index'
import CarrinhoDois from './views/carrinhos/carrinhoDois';
import Recuperacao from './views/Recuperacao/index';
import CadastroProdMer from './views/cadastroProduto/cadastroProdMer';
import CadastroProdUsu from './views/cadastroProduto/cadastroProdUsu';
import Cadastrese from './views/cadastrese/index';
import FeedMercado from './views/FeedMercado/feedMercado';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Categorias/>}/>
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
        <Route path='/usuarios' element={<ListaUsu/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/carrinho/comparacao' element={<CarrinhoDois/>}/>
        <Route path='/recuperacao' element={<Recuperacao/>}/>
        <Route path='/cadastro/produto/mercado' element={<CadastroProdMer/>}/>
        <Route path='/cadastro/produto/usuario' element={<CadastroProdUsu/>}/>
        <Route path='/cadastrese' element={<Cadastrese/>}/>
        <Route path='/feedM' element={<FeedMercado/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
