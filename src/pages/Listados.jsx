import React, { useState, useEffect } from "react";  
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from '@mui/material/Typography'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

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

const cardStyle = {
  m: 1,
  width: '250px',
  backgroundColor: 'white',
  borderRadius: '20px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
};

const numberTagStyle = (color) => ({
  position: 'absolute',
  backgroundColor: color,
  color: '#fff',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
});

const cardContainerStyle = (color) => ({
  backgroundColor: color,
  padding: '0rem',
  borderRadius: '10px',
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Listados = () => {
  const [abrirMenu, setAbrirMenu] = useState(true);
  const [mostrarListarUsuarios, setMostrarListarUsuarios] = useState(false);
  const [mostrarListarMaterias, setMostrarListarMaterias] = useState(false);
  const [mostrarListarCarreras, setMostrarListarCarreras] = useState(false);

  const opcionesMenu = [
    { text: "Inicio", icon: <HomeIcon fontSize="large" />, link: "/home2" },
    { text: "Listados", icon: <ListIcon fontSize="large" />, link: "/Listados" },
    { text: "Registros", icon: <PersonAddIcon fontSize="large" />, link: "/Registros" },
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
    <Box sx={{ display: "flex", height: "100vh",backgroundColor: '#C1DADF',padding:'0' }}>
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
          // borderRadius: '40px 40px 40px 20px',
        }}
      >
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

        <ListItem disablePadding>
          <ListItemButton onClick={manejarCerrarSesion}>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <LogoutIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="Cerrar Sesión"
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

      <Box sx={{ flexGrow: 1,minHeight: '100vh', padding: '0', marginLeft: abrirMenu ? '250px' : '80px', transition: 'margin-left 0.3s', backgroundColor: '#C1DADF' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <Box sx={cardContainerStyle('#27496D')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#00A8CC')}>01</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AccountCircleIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', mb: '10px' }}>Listar Usuarios</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }} onClick={manejarClicListarUsuarios}>
                  Ver Usuarios
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={cardContainerStyle('#0C7B93')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#0C7B93')}>02</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SchoolIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', mb: '10px' }}>Listar Carreras</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }} onClick={manejarClicListarCarreras}>
                  Ver Carreras
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={cardContainerStyle('#00A8CC')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#00A8CC')}>03</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MenuBookIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', mb: '10px' }}>Listar Materias</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }} onClick={manejarClicListarMaterias}>
                  Ver Materias
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '20px',
            backgroundColor: '#C1DADF',
            // borderRadius: '2rem',
            // padding: '20px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            width:'auto',
            height: 'auto',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
          }}
        >

        {mostrarListarUsuarios && <ListarUsuarios />}
        {mostrarListarCarreras && <ListarCarreras />}
        {mostrarListarMaterias && <ListarMaterias />}
      </Box>
      </Box>
    </Box>
  );
};

export default Listados;
