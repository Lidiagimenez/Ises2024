import React from 'react';
import { Card, CardContent, Button } from '@mui/material'; 
import { Link } from 'react-router-dom'; // Importa el componente Link
import Home from './Home';
import Home2 from './Home2';

const Listados = () => {
    return (
    
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <Home2/>
        <Card>
          <CardContent>
            <Link to="/listarusuarios" style={{ textDecoration: 'none' }}> {/* Ruta para Listar Usuarios */}
              <Button variant="contained" color="primary" fullWidth>
                Listar Usuario
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Link to="/listarmaterias" style={{ textDecoration: 'none' }}> {/* Ruta para Listar Materias */}
              <Button variant="contained" color="primary" fullWidth>
                Listar Materia
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Link to="/listarcarreras" style={{ textDecoration: 'none' }}> {/* Ruta para Listar Carreras */}
              <Button variant="contained" color="primary" fullWidth>
                Listar Carrera
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  };
  
export default Listados;
