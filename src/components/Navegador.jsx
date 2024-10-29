import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout"; // Ícono de cerrar sesión
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

const Navegador = () => {
  const [abrirMenu, setAbrirMenu] = useState(true);
  const navigate = useNavigate();

  const opcionesMenu = [
    {
      text: "Inicio",
      icon: <HomeIcon fontSize="large" />,
      link: "/home",
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

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Navbar izquierdo */}
      <AppBar
        position="fixed"
        sx={{
          height: "100vh",
          width: abrirMenu ? "250px" : "80px",
          backgroundColor: "#27496D",
          transition: "width 0.3s ease",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "40px 40px 40px 20px",
          zIndex: 1000,
        }}
      >
        <ThemeProvider theme={theme}>
          <Toolbar
            variant="dense"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px",
            }}
          >
            {/* Botón para abrir/cerrar el menú */}
            <IconButton
              onClick={() => setAbrirMenu(!abrirMenu)}
              sx={{ color: "white", fontSize: "2.7rem" }}
            >
              <HiOutlineBars3 />
            </IconButton>

            {/* Opciones del menú */}
            {opcionesMenu.map((item) => (
              <IconButton
                key={item.text}
                component={Link}
                to={item.link}
                sx={{
                  color: "#ffffff",
                  justifyContent: abrirMenu ? "flex-start" : "center",
                  padding: "8px 16px",
                  marginLeft: abrirMenu ? "10px" : "0",
                  "&:hover": {
                    backgroundColor: "#C1DADF",
                    borderRadius: "20px 0px 0px 20px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {item.icon}
                <Typography
                  sx={{
                    color: "#ffffff",
                    opacity: abrirMenu ? 1 : 0,
                    transition: "opacity 0.3s",
                    fontSize: "1.2rem",
                    marginLeft: abrirMenu ? "10px" : "0",
                  }}
                >
                  {item.text}
                </Typography>
              </IconButton>
            ))}

            {/* Ícono de cerrar sesión */}
            <IconButton
              onClick={() => {
                // Lógica para cerrar sesión
                navigate("/");
              }}
              sx={{
                color: "#ffffff",
                justifyContent: abrirMenu ? "flex-start" : "center",
                padding: "8px 16px",
                marginLeft: abrirMenu ? "10px" : "0",
                marginTop: "auto",
                "&:hover": {
                  backgroundColor: "#C1DADF",
                  borderRadius: "20px 0px 0px 20px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <LogoutIcon fontSize="large" />
              <Typography
                sx={{
                  color: "#ffffff",
                  opacity: abrirMenu ? 1 : 0,
                  transition: "opacity 0.3s",
                  fontSize: "1.2rem",
                  marginLeft: abrirMenu ? "10px" : "0",
                }}
              >
                Cerrar sesión
              </Typography>
            </IconButton>
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </Box>
  );
};

export default Navegador;
