import React, { useState } from "react";
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
import bien from '../assets/bien.svg';
import LogoutIcon from "@mui/icons-material/Logout";
const manejarCerrarSesion = () => {
  // Lógica para cerrar sesión aquí
  navigate("/login"); // Redirige a la página de inicio de sesión
};

const Home2 = () => {
  const [abrirMenu, setAbrirMenu] = useState(true);

  const opcionesMenu = [
    {
      text: "Inicio",
      icon: <HomeIcon fontSize="large" />,
      link: "/home2",
    },
    {
      text: "Listados",
      icon: <ListIcon fontSize="large" />,
      link: "/Listados",
    },
    {
      text: "Registrar",
      icon: <PersonAddIcon fontSize="large" />,
      link: "/registros",
    },
  ];

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
          zIndex: 1, /* Z-index más bajo para que quede debajo del contenido principal */
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
          marginLeft: abrirMenu ? '250px' : '80px', /* Ajustar espacio al abrir/cerrar menú */
          width: 'calc(112rem - 80px)', /* Resto del espacio para el contenido */
          padding: '20px',
          backgroundColor: '#C1DADF', /* Fondo blanco para simular la superposición */
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          height: '100%',
          borderRadius: '30px', /* Bordes redondeados */
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', /* Sombra */
          zIndex: '2', /* Z-index más alto para que se vea sobre el navbar */
          position: 'relative',
        }}
      >
        {/* Contenedor de texto a la izquierda */}
        <Box sx={{ width: '30%', padding: '20px' }}>
          <h1 style={{ color: '#27496D', fontSize: '3rem', fontWeight: 'bold' }}>
            Bienvenido a ISES Gestión
          </h1>
          <p style={{ color: '#545CA1', fontSize: '1.5rem', lineHeight: '1.7' }}>
            En este sistema podrás registrar usuarios, cargar materias y carreras, 
            así como listar las mismas para sus respectivas modificaciones.
          </p>
        </Box>

        {/* Espacio para la imagen a la derecha */}
        <Box
          sx={{
            width: '80%',
            height: '100%', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Coloca aquí la imagen */}
          <img src={bien} alt="Gestión" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home2;
