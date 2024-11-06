import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Nav = () => {
  const [abrirMenu, setAbrirMenu] = useState(true);
  const navigate = useNavigate();

  const opcionesMenu = [
    {
      text: "Inicio",
      icon: <HomeIcon fontSize="large" />,
      link: "/Home2",
    },
    {
      text: "Listados",
      icon: <ListIcon fontSize="large" />,
<<<<<<< HEAD
      
      link: "/Listados",
      
      
    },
    {
      text: "Registros",
      icon: <PersonAddIcon fontSize="large" />,
      link: "/Registros",
      
      
=======
      link: "/Listados",
    },
    {
      text: "Registrar",
      icon: <PersonAddIcon fontSize="large" />,
      link: "/Registros",
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
    },
  ];

  const manejarCerrarSesion = () => {
    // Lógica para cerrar sesión aquí
    navigate("/login2"); // Redirige a la página de inicio de sesión
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
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
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
<<<<<<< HEAD
          // borderRadius: '40px 40px 40px 20px',
=======
          borderRadius: '40px 40px 40px 20px',
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
          overflow: 'hidden',
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
          
          {/* Botón de Cerrar Sesión */}
          <ListItem disablePadding>
<<<<<<< HEAD
  <ListItemButton
    onClick={manejarCerrarSesion}
    sx={{
      '&:hover': {
        backgroundColor: '#C1DADF',
        borderRadius: '20px 0px 0px 20px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out', // animación suave
      },
    }}
  >
    <ListItemIcon sx={{ color: '#ffffff' }}>
      <LogoutIcon fontSize="large" />
    </ListItemIcon>
    <ListItemText
      primary="Cerrar"
      sx={{
        color: '#ffffff',
        opacity: abrirMenu ? 1 : 0,
        transition: 'opacity 0.3s',
        fontSize: '1.2rem',
      }}
    />
  </ListItemButton>
</ListItem>
=======
            <ListItemButton onClick={manejarCerrarSesion}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <LogoutIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Cerrar"
                sx={{
                  color: '#ffffff',
                  opacity: abrirMenu ? 1 : 0,
                  transition: 'opacity 0.3s',
                  fontSize: '1.2rem',
                }}
              />
            </ListItemButton>
          </ListItem>
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
        </List>
      </Box>
    </Box>
  );
};

export default Nav;
