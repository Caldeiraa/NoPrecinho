import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './views/Home/index'
import ListaUsu from './views/ListaUsuarios/ListaUsuarios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usuarios' element={<ListaUsu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
