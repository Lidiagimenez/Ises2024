<<<<<<< HEAD
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Card, CardContent, Button, Box, Typography, Container   } from '@mui/material'; 
import Nav from './nav';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Icono para listar usuarios
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Icono para listar materias
import SchoolIcon from '@mui/icons-material/School'; // Icono para listar carreras
import ListarUsuarios from '../components/ModalListar/ListarUsuarios';
import ListarCarreras from '../components/ModalListar/ListarCarrera';
import ListarMaterias from '../components/ModalListar/ListarMaterias';

const Listados = () => {
  // Estados para mostrar cada lista
=======
import React, { useState, useEffect } from "react";  
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
<<<<<<< HEAD
=======
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
import Typography from '@mui/material/Typography'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

<<<<<<< HEAD
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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
<<<<<<< HEAD

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
=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e

const Listados = () => {
  const [abrirMenu, setAbrirMenu] = useState(true);
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
  const [mostrarListarUsuarios, setMostrarListarUsuarios] = useState(false);
  const [mostrarListarMaterias, setMostrarListarMaterias] = useState(false);
  const [mostrarListarCarreras, setMostrarListarCarreras] = useState(false);

<<<<<<< HEAD
  // Manejadores de clic para los botones
  const manejarClicListarUsuarios = () => {
    setMostrarListarUsuarios(true);
    setMostrarListarMaterias(false);
    setMostrarListarCarreras(false);
  };

=======
  const opcionesMenu = [
<<<<<<< HEAD
    { text: "Inicio", icon: <HomeIcon fontSize="large" />, link: "/home2" },
    { text: "Listados", icon: <ListIcon fontSize="large" />, link: "/Listados" },
    { text: "Registros", icon: <PersonAddIcon fontSize="large" />, link: "/Registros" },
=======
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
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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

>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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

<<<<<<< HEAD
  const cardStyle = {
    width: '220px',
    height: '250px',
    borderRadius: '15px',
    backgroundColor: '#FFFFFF', 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const numberTagStyle = (color) => ({
    position: 'absolute',
    top: '-20px',
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
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });


  return (
  
    <Container sx={{ 
      display: 'flex', 
      minHeight: '100rem',
      minWidth:'100rem', 
      borderRadius:'3rem',
      background: 'linear-gradient(135deg, #0C7B93, #27496D)',
      overflowX: 'auto', // Permitir scroll horizontal si es necesario
    }}
    >
       <Nav />  
       <Box sx={{ flexGrow: 1, padding: '20px',maxWidth: '100rem', }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Mantener las tarjetas en fila
            justifyContent: 'space-between', // Distribuir las tarjetas uniformemente
            // backgroundColor: '#f9f9f9',
            padding: '10px', // Reducir el padding para evitar espacios excesivos
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            gap: '10px', // Reducir el gap entre las tarjetas
            height: 'auto',
            flexWrap: 'wrap' // Hacer que las tarjetas se ajusten a la pantalla en caso de necesitar más espacio
          }}
        >
        {/* Tarjeta de Listar Usuarios */}

          <Box sx={cardContainerStyle('#27496D')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#00A8CC')}>01</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <AccountCircleIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', marginBottom: '10px' }}>Listado de Usuarios</Typography>
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }}
                  onClick={manejarClicListarUsuarios}
                >
                  Listar Usuarios
=======
  return (
<<<<<<< HEAD
    <Box sx={{ display: "flex", height: "100vh",backgroundColor: '#C1DADF',padding:'0' }}>
=======
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Navbar izquierdo */}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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
<<<<<<< HEAD
          // borderRadius: '40px 40px 40px 20px',
        }}
      >
=======
          borderRadius: '40px 40px 40px 20px',
        }}
      >
        {/* Botón para abrir/cerrar el menú */}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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

<<<<<<< HEAD
=======
        {/* Opciones del menú */}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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

<<<<<<< HEAD
=======
        {/* Botón de Cerrar Sesión */}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
        <ListItem disablePadding>
          <ListItemButton onClick={manejarCerrarSesion}>
            <ListItemIcon sx={{ color: '#ffffff' }}>
              <LogoutIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
<<<<<<< HEAD
              primary="Cerrar Sesión"
=======
              primary="Cerrar "
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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

<<<<<<< HEAD
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
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
                </Button>
              </CardContent>
            </Card>
          </Box>

<<<<<<< HEAD
        {/* Tarjeta de Listar Materias */}


          <Box sx={cardContainerStyle('#0C7B93')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#0C7B93')}>02</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SchoolIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', marginBottom: '10px' }}>Listado de Materias</Typography>
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#0C7B93', color: '#FFFFFF' }}
                  onClick={manejarClicListarMaterias}
                >
                 Listar Materias
=======
          <Box sx={cardContainerStyle('#0C7B93')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#0C7B93')}>02</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SchoolIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', mb: '10px' }}>Listar Carreras</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }} onClick={manejarClicListarCarreras}>
                  Ver Carreras
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
                </Button>
              </CardContent>
            </Card>
          </Box>

<<<<<<< HEAD
        {/* Tarjeta de Listar Carreras */}

          <Box sx={cardContainerStyle('#00A8CC')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#27496D')}>03</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <MenuBookIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', marginBottom: '10px' }}>Listado de Carreras</Typography>
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#27496D', color: '#FFFFFF' }}
                  onClick={manejarClicListarCarreras}
                >
                  Listar Carreras
=======
          <Box sx={cardContainerStyle('#00A8CC')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#00A8CC')}>03</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MenuBookIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', mb: '10px' }}>Listar Materias</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }} onClick={manejarClicListarMaterias}>
                  Ver Materias
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
                </Button>
              </CardContent>
            </Card>
          </Box>
<<<<<<< HEAD

      </Box>
      

      {/* Espacio para las grillas */}
      <Box
          sx={{
            marginTop: '10px',
            backgroundColor: '#C1DADF',
            borderRadius: '10px',
            // padding: '20px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            
          }}
        >
      {/* Renderiza los componentes según el estado */}
      <div style={{ marginTop: '20px' }}>
        {mostrarListarUsuarios && <ListarUsuarios />}
        {mostrarListarMaterias && <ListarMaterias />}
        {mostrarListarCarreras && <ListarCarreras />}
      </div>
      </Box>
    </Box>
      </Container>
     
  );
  
};
export default Listados;
=======
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
=======
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
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
      </Box>
    </Box>
  );
};

<<<<<<< HEAD
export default Listados;
=======
export default Listados;
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
