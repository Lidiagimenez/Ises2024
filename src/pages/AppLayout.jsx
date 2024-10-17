import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Registros from './Registros'; // Asegúrate de importar el componente correctamente
import Registrar from './Registrar'; // Reemplaza con el componente real
import CargarMateria from './CargarMateria'; // Reemplaza con el componente real
import CargarCarrera from './CargarCarrera'; // Reemplaza con el componente real
import Home from './Home'; // Reemplaza con el componente real

const AppLayout = () => {
    const location = useLocation();

    // Determina si la ruta actual requiere mostrar las tarjetas de registro
    const showRegistros = ["/registrar", "/CargarMateria", "/CargarCarrera"].includes(location.pathname);

    return (
        <div>
            {showRegistros && <Registros />} {/* Solo muestra Registros en rutas específicas */}
            <div style={{ marginTop: '20px' }}> {/* Espacio para que no cubra contenido */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registrar" element={<Registrar />} />
                    <Route path="/CargarMateria" element={<CargarMateria />} />
                    <Route path="/CargarCarrera" element={<CargarCarrera />} />
                </Routes>
            </div>
        </div>
    );
};

export default AppLayout;
