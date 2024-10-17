import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import inicio from '../assets/inicio2.svg'; 
function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100vh", // Altura del 100% de la vista
        width: "100vw", // Ancho del 100% de la vista
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #662409, #CC4712)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop:"10px",
          padding: "20px",
          // backgroundColor: "#A2BEDC",
          // backgroundColor:"#FAEADD",
          backgroundColor:"#545CA1",
          borderRadius:"30px 30px 30px 30px"
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            fontSize: "3rem", // Aumenta el tamaño del texto
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <span style={{ color: "#ffffff" }}>Ises</span>
          <span style={{ color: "#D00A2E", marginLeft: "10px" }}>GESTIÓN</span>
        </Typography>
        <Button
            variant="contained"
            onClick={() => { window.location.href = '/Home2'; }}
            sx={{
              height: "4rem",
              width: "11rem",
              backgroundColor: "#D00A2E",
              borderRadius: "30px",
              fontSize: "24px",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#B00926",
              },
           }}
      >
        ACCEDER
      </Button>
      </Box>
      
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          
        }}
      >
         <Box 
          sx={{
            display: "flex", // Alinear imagen y texto horizontalmente
            alignItems: "center", // Centrar verticalmente
            textAlign: "left", // Alinear texto a la izquierda
            position: "relative",
            marginLeft:"2.5rem"
          }}
        >
          <img 
            src={inicio} 
            alt="Inicio"
            style={{ 
              width: '100vh', // tamaño de la imagen 
              height: 'auto', 
              marginRight: '20px', // Espacio entre la imagen y el texto
            }} 
          />
          <Typography
             sx={{
            color: "#ffffff",
            fontSize: "8rem", // Aumenta el tamaño del texto
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        
          >
            <span style={{ color: "#ffffff" }}>Sistema de Gestión</span> <br />
            <span style={{ color: "#ffffff", marginLeft: "2px" }}>Administrativo</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
