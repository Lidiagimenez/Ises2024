import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Home from './pages/Home';
import CargarMaterias from './pages/CargarMateria';
import UserTable from './components/ModalListar/ListarUsuarios';
import ModalEdicion from './components/ModalEdicion/ModalEdicion';
import MateriasTable from './components/ModalListar/ListarMaterias';
import CargarCarrera from './pages/CargarCarrera';
import CarrerasTable from './components/ModalListar/ListarCarrera';
import Registros from './pages/Registros';
import Navegador from './components/Navegador';
import Listados from './pages/Listados';
import Home2 from './pages/Home2';
import  Login2 from "./pages/login/Login2";

// Componente Layout con el Navegador
function LayoutWithNav() {
  return (
    <>
       {/* <Navegador />  */}
      <Outlet /> {/* renderiza los componentes hijos */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* Ruta que redirige la raíz a /home */}
         <Route path="/" element={<Home/>} />
        {/* Ruta para el Login sin el Navegador */}
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/home2" element={<Home2 />} />

        {/* Rutas que incluyen el Navegador */}
        <Route element={<LayoutWithNav />}>
          <Route path="/home" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/CargarMateria" element={<CargarMaterias />} />
          <Route path="/listarusuarios" element={<UserTable />} />
          <Route path="/modaledicion" element={<ModalEdicion />} />
          <Route path="/listarmaterias" element={<MateriasTable />} />
          <Route path="/CargarCarrera" element={<CargarCarrera />} />
          <Route path="/listarcarreras" element={<CarrerasTable />} />
          <Route path="/listados" element={<Listados />} />
          <Route path="/registros" element={<Registros />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
