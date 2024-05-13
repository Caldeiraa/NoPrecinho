import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import ListaUsu from './views/ListaUsuarios/ListaUsuarios';
import Login from './views/Login/index'
import Categorias from './views/categorias/categorias'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import Home from './views/Home/index'
import CarrinhoUm from './views/carrinhos/carrinhoUm'
import CarrinhoDois from './views/carrinhos/carrinhoDois';
import Recuperacao from './views/Recuperacao/index';
import CadastroProdMer from './views/cadastroProduto/cadastroProdMer';
import CadastroProdUsu from './views/cadastroProduto/cadastroProdUsu';
import Cadastrese from './views/cadastrese/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria' element={<Categorias/>}/>
        <Route path='/cadastro/usuario' element={<InserirUsuario/>}/>
        <Route path='/cadastro/mercado' element={<InserirMercado/>}/>
        <Route path='/usuarios' element={<ListaUsu/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/carrinho/default' element={<CarrinhoUm/>}/>
        <Route path='/carrinho/comparacao' element={<CarrinhoDois/>}/>
        <Route path='/recuperacao' element={<Recuperacao/>}/>
        <Route path='/cadastro/produto/mercado' element={<CadastroProdMer/>}/>
        <Route path='/cadastro/produto/usuario' element={<CadastroProdUsu/>}/>
        <Route path='/cadastrese' element={<Cadastrese/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
