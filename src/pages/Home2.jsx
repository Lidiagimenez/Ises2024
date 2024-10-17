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
import InfoIcon from "@mui/icons-material/Info";
import ListIcon from "@mui/icons-material/List"; /*icono Para listar*/
import PersonAddIcon from "@mui/icons-material/PersonAdd"; /*icono Para registrar*/

const Home2 = () => {
  const [abrirMenu, setabrirMenu] = useState(true); 
  const opmenu = [
    {
      text: "Inicio",
      icon: <HomeIcon fontSize="large" />,
      link: "/",
    },
    {
      text: "Listados",
      icon: <ListIcon fontSize="large" />,
      link: "/listados",
    },
    {
      text: "Registrar",
      icon: <PersonAddIcon fontSize="large"/>,
      link: "/registros",
    },
  ];

  return (
    <Box
      sx={{
        position: 'fixed', /* navbar fijo */
        left: 0, /* Alineamiento a la izquierda*/
        display: 'flex',
        flexDirection: 'column',
        width: abrirMenu ? '250px' : '80px', /* Ancho cambia según estado*/
        height: '100%',
        backgroundColor: '#545CA1', /* Color del color del navbar */
        borderRadius:"30px",
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        zIndex: 1000,
        
      }}
    >
      {/* Contenedor para el botón del menú */}
      <Box sx={{ display: 'flex', 
        alignItems: 'center', 
        height: '64px', 
        padding: '0 16px', 
        backgroundColor: '#545CA1',
        /* tamaño del boton para desplegar*/
         }}>
        <ListItemButton onClick={() =>setabrirMenu(!abrirMenu)}>
          <ListItemIcon sx={{ color: 'white', fontSize: "2.7rem",}}>
            <HiOutlineBars3 />
          </ListItemIcon>
        </ListItemButton>
      </Box>

      {/* recorro las opciones del nav */}
      <List sx={{ padding: "0rem" }}>
        {opmenu.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              sx={{
                justifyContent: abrirMenu ? 'flex-start' : 'center', /* Centrados cuando el menú está cerrado*/
                padding: '8px 16px',
                marginLeft: abrirMenu ? '10px' : '0',
                '&:hover': {
                  backgroundColor: '#A2BEDC', /* Cambia el color al pasar el mouse*/
                  borderRadius: '20px 0 0 20px', /* Redondea el lado izquierdo*/
                  clipPath: 'inset(1 0 0 0  )',/*Crea el efecto corte*/
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Sombra */
                  transform: 'scale(1.05)', /* Aumenta el tamaño del botón al pasar el mouse*/
                },
              }}
             
            >
              
              <ListItemIcon sx={{ color: '#ffffff',/* cambiar color del icono*/
                minWidth: abrirMenu ? '40px' : 'auto',}}> 
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ fontSize:"3rem",
                  opacity: abrirMenu ? 1 : 0, /*oculta el texto al cerrar el navbar*/
                  transition: 'opacity 0.3s',
                  typography: 'navText'}}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );
};

export default Home2;
