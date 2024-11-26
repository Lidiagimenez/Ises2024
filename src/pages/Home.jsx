import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import inicio from '../assets/inicio2.svg';

function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#C1DADF",
        padding: "20px", // Espacio interno en la pantalla
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#27496D",
          // borderRadius: "30px",
          padding: "20px",
          marginBottom: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Sombra suave
        }}
      >
        {/* Logo/Title */}
        <Typography
          sx={{
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsividad en el tamaño de la fuente
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <span style={{ color: "#ffffff" }}>ISES</span>
          <span style={{ color: "#D00A2E", marginLeft: "10px" }}>GESTIÓN</span>
        </Typography>

        {/* Botón de Acceso */}
        <Button
          variant="contained"
          onClick={() => { window.location.href = './Login2'; }}
          sx={{
            height: "4rem",
            width: { xs: "80%", sm: "11rem" }, // Responsividad en el ancho
            backgroundColor: "#D00A2E",
            borderRadius: "30px",
            fontSize: { xs: "18px", sm: "24px" }, // Responsividad en el tamaño de la fuente
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#B00926",
            },
          }}
        >
          ACCEDER
        </Button>
      </Box>

      {/* Contenedor central con imagen y texto */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3d7",
          // borderRadius: "30px",
          padding: "20px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Sombra para el panel principal
        }}
      >
        {/* Paneles de información e imagen */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Cambia de columna a fila en pantallas pequeñas
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            width: "100%", // Asegura que ocupe todo el espacio disponible
          }}
        >
          {/* Imagen */}
          <Box
            sx={{
              flex: 1, // Ocupa el espacio disponible
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={inicio}
              alt="Inicio"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Sombra en la imagen
              }}
            />
          </Box>

          {/* Texto */}
          <Box
            sx={{
              flex: 1, // Ocupa el espacio disponible
              textAlign: "left",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: { xs: "20px", sm: "0" }, // Espacio alrededor del texto
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "3rem", sm: "4rem", md: "6rem" }, // Responsividad en el tamaño de la fuente
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                lineHeight: "1.2",
              }}
            >
              Sistema de Gestión <br />
              Administrativo
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
