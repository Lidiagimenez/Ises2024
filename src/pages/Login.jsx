import * as React from "react";
import { Typography } from "@mui/material"; // Asegúrate de importar Typography
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navegador from "../components/Navegador";
import ModalEdicion from "../components/ModalEdicion/ModalEdicion";
import ModalBorrarUsuario from "../components/ModalBorrar/ModalBorrarUsuario";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { FaHome } from "react-icons/fa";
import { Box } from '@mui/material';
import Home2 from "./Home2";
import Login2 from "./login/Login2";

export default function Login() {
  return (
    <>
      <Home2/> 
      <Typography
        variant="h6" // Tamaño texto
        onClick={() => { window.location.href = '/Home2'; }} // Redirigir a la ruta Login
        sx={{
          color: "red",
          fontSize: "24px", // Tamaño del texto
          cursor: "pointer", // Cambiar cursor al pasar sobre el texto
          textDecoration: "none", // Sin subrayado
        }}
      >
        ACCEDER
      </Typography>
    </>
  );
}

// function Login () {
//   return (
//     <>
//     <Navegador />
//     <FaHome />
//     <h1>LOGIN 1</h1>
//     <h1>LOGIN 2</h1>
//     <h1>LOGIN 3</h1>
//     <h1>LOGIN 4</h1>

//     </>
//   );
// }

// export default Login
