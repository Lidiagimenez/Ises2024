import * as React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Navegador from "../components/Navegador";
import Modal from "@mui/material/Modal";
import Registros from "./Registros";
import Home2 from "./Home2";


const currencies = [
  { value: '1', label: 'Regular', },
  { value: '2', label: 'Promocional', },
];
const currencies2 = [
  { value: '1', label: 'Activo', },
  { value: '2', label: 'Inactivo', },
];

const CargarMaterias = () => {

  const formik = useFormik({
    initialValues: {
        nombre: "",
        id_tipo_materia:"",
        id_estado_materia:"",
        alta_baja: "1",
     
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar un nombre"),
      id_tipo_materia: Yup.number().required("ingrese tipo materia"),
      id_estado_materia: Yup.number().required("ingrese estado materia"),
      alta_baja: Yup.number(1).required("ingrese alt")
    }),

    //hasta aca

    onSubmit: async (data) => {
      try {
        const respuesta = await axios.post("http://localhost:3000/api/v1/materias",data);
        abrirModal();
        formik.resetForm();
        
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    formik.resetForm(); // Esto restablecerá el formulario a sus valores iniciales.
  };

  return (
    <>
    <Registros />
   
     {/* <Navegador/> */}
      <Typography variant="h4" component="h4" color="blue" align="center"marginTop={"100px"}>
        Formulario de registro Materias
      </Typography>
      <Box sx={{ mt: 10 }} component="form" onSubmit={formik.handleSubmit}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 10 }}
        >
            <TextField
            type="text"
            label="Nombre"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // Para gestionar cuando el input pierde el foco
            error={formik.touched.nombre && Boolean(formik.errors.nombre)} // Muestra error si hay
            helperText={formik.touched.nombre && formik.errors.nombre} // Muestra el mensaje de error
          />
          <TextField
            type="number"
            select
            label="Tipo Materia"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="id_tipo_materia"
            onChange={formik.handleChange}
          >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
            type="number"
            select
            label="Estado Materia"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="id_estado_materia"
            onChange={formik.handleChange}
          >
          {currencies2.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>


<Button variant="contained" type="submit" sx={{ width: 300, mt: 3, mx:1 }} disabled={!formik.isValid}>
              Enviar Formulario
            </Button>
         
          <Modal open={modalAbierto} onClose={cerrarModal}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4 }}>
              <Typography variant="h6" component="div">
                Formulario enviado con éxito.
              </Typography>
                <Button variant="contained" onClick={cerrarModal} sx={{ width: 300, mt: 3 }}>
                  Cerrar
                </Button>

              </Box>
          </Modal>





            <IconButton
            href="/listarmaterias"
            variant="contained"
            type="submit"
            edge="start"
            aria-label="menu"
            sx={{ width: 300, mt: 3 }}
          >
            Ver Todas las Materias. 
          </IconButton>
        </Grid>               
       
      </Box>
    </>
  );
};

export default CargarMaterias;
