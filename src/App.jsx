import { BrowserRouter, Routes, Route, Outlet, Navigate  } from 'react-router-dom';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import React, { useEffect } from "react";
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
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const AuthenticatedRoute = ({ element, allowedRoles }) => {
  const accessToken = localStorage.getItem('access_token');
  const userRole = parseInt(localStorage.getItem('userType'), 10);

  if (!allowedRoles.includes(userRole)) {
    alert('Permiso negado');
    window.location.href = '/';
  }

  const refreshAccessToken = async () => {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      const response = await axios.post("http://localhost:3000/api/v1/refrescar-token", {
        refresh_token: refresh_token,
      });

      if (response.status === 200) {
        const { access_token } = response.data;
        localStorage.setItem('access_token', access_token);
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      window.location.href = '/';
    }
  };

  const checkTokenExpiration = () => {
    if (accessToken) {
      const tokenPayload = jwtDecode(accessToken);
      const expirationTime = tokenPayload.exp * 1000;
      const currentTime = Date.now();

      if (expirationTime - currentTime < 120000) {
        const extendSession = window.confirm('Tu sesión está a punto de expirar. ¿Deseas extenderla por 15 minutos más?');

        if (extendSession) {
          refreshAccessToken();
        } else {
          window.location.href = '/';
        }
      }
    }
  };

  useEffect(() => {
    const tokenExpirationInterval = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(tokenExpirationInterval);
  }, [accessToken, allowedRoles]);

  if (!accessToken) {
    return <Navigate to="/login2" />;
  }

  return element;
};

// Componente Layout con el Navegador
function LayoutWithNav() {
  return (
    <>
    {/* <Nav /> */}
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
          <Route path="/Listados" element={<Listados />} />
          <Route path="/Registros" element={<Registros />} />


          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
