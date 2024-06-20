import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ListaUsu from './views/ListaUsuarios/ListaUsuarios';
import LoginM from './views/Login/index'
import LoginU from './views/Login/indexU'
import Categorias from './views/categorias/categorias'
import InserirUsuario from './views/InserirUsuario/inserirUsuario';
import InserirMercado from './views/InserirMercado/inserirMercado';
import Home from './views/Home/index'
import CarrinhoDois from './views/carrinhos/carrinhoDois';
import Recuperacao from './views/Recuperacao/index';
import CadastroProdMer from './views/cadastroProduto/cadastroProdMer';
import CadastroProdUsu from './views/cadastroProduto/cadastroProdUsu';
import FeedMercado from './views/FeedMercado/feedMercado';
import TipoUsuario from './views/Login/tipoUsuario';
import Produtos from './views/Produto/Produtos';
import GerenciamentoM from './views/GerenciamentoMercado/GerenciamentoM';
import EditarProduto from './views/EditarProduto/EditarProduto';

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
        <Route path='/login' element={<TipoUsuario/>}/>
        <Route path='/loginM' element={<LoginM/>}/>
        <Route path='/loginU' element={<LoginU/>}/>
        <Route path='/carrinho/comparacao' element={<CarrinhoDois/>}/>
        <Route path='/recuperacao' element={<Recuperacao/>}/>
        <Route path='/cadastro/produto/mercado/:id_categoria' element={<CadastroProdMer/>}/>
        <Route path='/cadastro/produto/usuario' element={<CadastroProdUsu/>}/>
        <Route path='/feedM' element={<FeedMercado/>}/>
        <Route path='/produto/:id_prod' element={<Produtos/>}/>
        <Route path='/gerenciamentoM' element={<GerenciamentoM/>}/>
        <Route path='/produto/:id/editar' element={<EditarProduto/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
