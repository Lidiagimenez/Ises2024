import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Box, Container } from '@mui/material'; 
import Nav from './nav';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Registrar from './Registrar';
import CargarCarrera from './CargarCarrera';
import CargarMateria from './CargarMateria';

const Registros = () => {
  const [mostrarRegistrar, setMostrarRegistrar] = useState(false);
  const [mostrarCargarCarrera, setMostrarCargarCarrera] = useState(false);
  const [mostrarCargarMateria, setMostrarCargarMateria] = useState(false);

  const manejarClicRegistrar = () => {
    setMostrarRegistrar(true);
    setMostrarCargarCarrera(false);
    setMostrarCargarMateria(false);
  };

  const manejarClicCargarCarrera = () => {
    setMostrarCargarCarrera(true);
    setMostrarRegistrar(false);
    setMostrarCargarMateria(false);
  };

  const manejarClicCargarMateria = () => {
    setMostrarCargarMateria(true);
    setMostrarRegistrar(false);
    setMostrarCargarCarrera(false);
  };

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
    <Container 
      sx={{ 
        display: 'flex', 
        minHeight: '100rem',
        minWidth:'100rem', 
        borderRadius:'3rem',
        background: 'linear-gradient(135deg, #0C7B93, #27496D)',
        // backgroundColor: '#27496D',
        // // padding: '20px',
      }}
    >
      <Nav /> 
      <Box sx={{ flexGrow: 1, marginTop:'2rem'  }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >

          {/* contenedor de card */}
          <Box sx={cardContainerStyle('#27496D')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#00A8CC')}>01</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <AccountCircleIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', marginBottom: '10px' }}>Registro Usuarios</Typography>
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#00A8CC', color: '#FFFFFF' }}
                  onClick={manejarClicRegistrar}
                >
                  Registrar
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={cardContainerStyle('#0C7B93')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#0C7B93')}>02</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SchoolIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', marginBottom: '10px' }}>Cargar Carrera</Typography>
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#0C7B93', color: '#FFFFFF' }}
                  onClick={manejarClicCargarCarrera}
                >
                  Cargar
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={cardContainerStyle('#00A8CC')}>
            <Card sx={cardStyle}>
              <Box sx={numberTagStyle('#27496D')}>03</Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <MenuBookIcon sx={{ fontSize: '40px', color: '#27496D' }} />
                <Typography variant="h6" sx={{ color: '#27496D', marginBottom: '10px' }}>Cargar Materia</Typography>
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#27496D', color: '#FFFFFF' }}
                  onClick={manejarClicCargarMateria}
                >
                  Cargar
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: '20px',
            backgroundColor: '#FFFFFF',
            borderRadius: '2rem',
            padding: '20px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {mostrarRegistrar && <Registrar />}
          {mostrarCargarCarrera && <CargarCarrera />}
          {mostrarCargarMateria && <CargarMateria />}
        </Box>
      </Box>
    </Container>
  );
};

export default Registros;
