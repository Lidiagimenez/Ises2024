import React from 'react';
import { Card, CardContent, Button } from '@mui/material'; 
import { Link } from 'react-router-dom'; // Importa el componente Link
import Home2 from './Home2';


const Registros = () => {
    return (

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <Home2/>
        <Card>
          <CardContent>
            <Link to="/registrar" style={{ textDecoration: 'none' }}> {/* Ruta de Registro de Usuarios */}
              <Button variant="contained" color="primary" fullWidth>
                Registro Usuarios
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Link to="/CargarMateria" style={{ textDecoration: 'none' }}> {/* Ruta de Registro de Materias */}
              <Button variant="contained" color="primary" fullWidth>
                Registro Materias
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Link to="/CargarCarrera" style={{ textDecoration: 'none' }}> {/* Ruta de Registro de Carreras */}
              <Button variant="contained" color="primary" fullWidth>
                Registro Carrera
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
};

export default Registros;
