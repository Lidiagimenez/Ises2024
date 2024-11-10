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
  const [mostrarListarUsuarios, setMostrarListarUsuarios] = useState(false);
  const [mostrarListarMaterias, setMostrarListarMaterias] = useState(false);
  const [mostrarListarCarreras, setMostrarListarCarreras] = useState(false);

  // Manejadores de clic para los botones
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
                </Button>
              </CardContent>
            </Card>
          </Box>

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
                </Button>
              </CardContent>
            </Card>
          </Box>

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
                </Button>
              </CardContent>
            </Card>
          </Box>

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