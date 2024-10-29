import React, { useState, useEffect } from "react";  
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from '@mui/material/Typography'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import ListarUsuarios from '../components/ModalListar/ListarUsuarios';
import ListarCarreras from '../components/ModalListar/ListarCarrera';
import ListarMaterias from '../components/ModalListar/ListarMaterias';

const manejarCerrarSesion = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("userId");
  localStorage.removeItem("userType");
  localStorage.removeItem("userName");

  window.location.href = "/login2";
};

const Listados = () => {
  const [abrirMenu, setAbrirMenu] = useState(true);
  const [mostrarListarUsuarios, setMostrarListarUsuarios] = useState(false);
  const [mostrarListarMaterias, setMostrarListarMaterias] = useState(false);
  const [mostrarListarCarreras, setMostrarListarCarreras] = useState(false);

  const opcionesMenu = [
    {
      text: "Inicio",
      icon: <HomeIcon fontSize="large" />,
      link: "/home2",
    },
    {
      text: "Listados",
      icon: <ListIcon fontSize="large" />,
      link: "/listados",
    },
    {
      text: "Registrar",
      icon: <PersonAddIcon fontSize="large" />,
      link: "/registros",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth < 519 && abrirMenu) {
      setAbrirMenu(false);
    } else if (window.innerWidth >= 519 && !abrirMenu) {
      setAbrirMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [abrirMenu]);

  const manejarClicListarUsuarios = () => {
    setMostrarListarUsuarios(true);
    setMostrarListarMaterias(false);
    setMostrarListarCarreras(false);
  };

  const manejarClicListarMaterias = () => {
    setMostrarListarMaterias(true);
    setMostrarListarUsuarios(false);
    setMostrarListarCarreras(false);
  };

  const manejarClicListarCarreras = () => {
    setMostrarListarCarreras(true);
    setMostrarListarUsuarios(false);
    setMostrarListarMaterias(false);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Navbar izquierdo */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          width: abrirMenu ? '250px' : '80px', 
          height: '100%',
          backgroundColor: '#27496D', 
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          zIndex: 1,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
          borderRadius: '40px 40px 40px 20px',
        }}
      >
        {/* Botón para abrir/cerrar el menú */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            height: '64px', 
            padding: '0 16px',
            backgroundColor: '#00A8CC',
          }}
        >
          <ListItemButton onClick={() => setAbrirMenu(!abrirMenu)}>
            <ListItemIcon sx={{ color: 'white', fontSize: "2.7rem" }}>
              <HiOutlineBars3 />
            </ListItemIcon>
          </ListItemButton>
        </Box>

        {/* Opciones del menú */}
        <List sx={{ padding: "0rem" }}>
          {opcionesMenu.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  justifyContent: abrirMenu ? 'flex-start' : 'center',
                  padding: '8px 16px',
                  marginLeft: abrirMenu ? '10px' : '0',
                  '&:hover': {
                    backgroundColor: '#C1DADF',
                    borderRadius: '20px 0px 0px 20px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#ffffff', minWidth: abrirMenu ? '40px' : 'auto' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: '#ffffff',
                    opacity: abrirMenu ? 1 : 0,
                    transition: 'opacity 0.3s',
                    fontSize: '1.2rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Botón de Cerrar Sesión */}
        <ListItem disablePadding>
          <ListItemButton onClick={manejarCerrarSesion}>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <LogoutIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Cerrar "
              sx={{
                color: '#ffffff',
                opacity: abrirMenu ? 1 : 0,
                transition: 'opacity 0.3s',
                fontSize: '1.2rem',
              }}
            />
          </ListItemButton>
        </ListItem>
      </Box>

      {/* Contenido sobrepuesto a la derecha del navbar */}
      <Box
        sx={{
          marginLeft: abrirMenu ? '250px' : '80px', 
          width: 'calc(100% - (abrirMenu ? 250px : 80px))',
          height:'100vh',
          padding: '20px',
          // backgroundColor: '#C1DADF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: '100%',
          borderRadius: '30px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          zIndex: '2',
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', width: '100%', mb: 2 }}>
          {/* Tarjeta de Listar Usuarios */}
          <Card sx={{ m: 1, width: '250px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="large" />
              </ListItemIcon>
              <Typography variant="h6" textAlign="left">
                Listar Usuarios
              </Typography>
              <Button
                onClick={manejarClicListarUsuarios}
                variant="contained"
                sx={{ backgroundColor: '#00A8CC', color: '#ffffff', marginTop: '10px' }}
              >
                Listar
              </Button>
            </CardContent>
          </Card>

          {/* Tarjeta de Listar Carreras */}
          <Card sx={{ m: 1, width: '250px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
              <ListItemIcon>
                <SchoolIcon fontSize="large" />
              </ListItemIcon>
              <Typography variant="h6" textAlign="left">
                Listar Carreras
              </Typography>
              <Button
                onClick={manejarClicListarCarreras}
                variant="contained"
                sx={{ backgroundColor: '#00A8CC', color: '#ffffff', marginTop: '10px' }}
              >
                Listar
              </Button>
            </CardContent>
          </Card>

          {/* Tarjeta de Listar Materias */}
          <Card sx={{ m: 1, width: '250px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
              <ListItemIcon>
                <MenuBookIcon fontSize="large" />
              </ListItemIcon>
              <Typography variant="h6" textAlign="left">
                Listar Materias
              </Typography>
              <Button
                onClick={manejarClicListarMaterias}
                variant="contained"
                sx={{ backgroundColor: '#00A8CC', color: '#ffffff', marginTop: '10px' }}
              >
                Listar
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Grillas debajo de las tarjetas */}
        <Box sx={{ width: '100%' }}>
          {mostrarListarUsuarios && <ListarUsuarios onClose={() => setMostrarListarUsuarios(false)} />}
          {mostrarListarMaterias && <ListarMaterias onClose={() => setMostrarListarMaterias(false)} />}
          {mostrarListarCarreras && <ListarCarreras onClose={() => setMostrarListarCarreras(false)} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Listados;