import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
const Navegador = () => {
  const [listadosAnchorEl, setListadosAnchorEl] = useState(null);
  const [registrosAnchorEl, setRegistrosAnchorEl] = useState(null);
  const navigate = useNavigate();
  

  const handleMenuClose = () => {
    setListadosAnchorEl(null);
    setRegistrosAnchorEl(null);
  };

  const listadosLinks = [
    { to: "/listarusuarios", label: "Listar Usuarios" },
    { to: "/listarmaterias", label: "Listar Materias" },
    { to: "/listarcarreras", label: "Listar Carrera" },
  ];

  const registrosLinks = [
    { to: "/registrar", label: "Registrar Usuario" },
    { to: "/CargarMateria", label: "Registrar Materias" },
    { to: "/CargarCarrera", label: "Registrar Carrera" },
  ];
  

  return (
    <Box sx={{ flexGrow: 1, margin: 1 }}>
      <AppBar // Propirdad de material UI agregado para que el nav sea horizontal
      position="fixed" 
      sx={{ 
        height: "100vh", // Altura completa de la pantalla
        width: "200px", // Ancho personalizado de la barra
        left: 0, // Alineado al lado izquierdo
        top: 0, // Desde la parte superior
        border: 1,
        backgroundColor: "#2A2185", // Color de fondo
        }}>
        <ThemeProvider theme={theme}>
          <Toolbar
            variant="dense" // Altura un poco menor de lo normal
            style={{
              display: "flex",
              flexDirection: "column", // Cambiar a columna para que los items sean verticales
              alignItems: "center", // Alineación centrada horizontalmente
              justifyContent: "flex-start", // Alineación hacia la parte superior
              padding: "10px",
            }}
          >
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                mr: 2, // Alineación hacia la parte superior
                fontSize: "25px",
              }}
            >
              <Link
                to="/home" 
                style={{ textDecoration: "none", 
                  color: "inherit",
               }}
              >
                Inicio 
              </Link>
            </Typography>
           {/* ----------------------Modoficar Login para que sea Acceso------------- */}
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ mr: 2, 
                fontSize: "25px" 
              }}
            >
              
              <Link to="/" style={{ 
                textDecoration: "none", 
                color: "inherit",
                 }}>
                Login
              </Link>
            </Typography>

            {/* ----------------------Modificar botones---------------------- */}

            <IconButton
        edge="start"
        color="inherit"
        aria-label="listados"
        onClick={() => navigate('/listados')}
        sx={{ mr: 2, borderBottom: 2, borderColor: "#ffffff" }}
      >
        Listados
      </IconButton>

      <IconButton
        edge="start"
        color="inherit"
        aria-label="registros"
        onClick={() => navigate('/registros')}
        sx={{ mr: 2, borderBottom: 2, borderColor: "red" }}
      >
        Registros
      </IconButton>


            {/* ----------------------Boton ISES---------------------- */}

            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                mr: 2,
                fontSize: "25px",
              }}
            >
              <Link
                to="https://itesposadas.edu.ar/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                ISES
              </Link>
            </Typography>
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </Box>
  );
};

export default Navegador;
