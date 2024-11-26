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
  const numberTagStyle = (color) => ({
    position: 'absolute',
    // top: '-20px',
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

  return (
    <>
   
<<<<<<< HEAD
      <Box sx={numberTagStyle('#27496D')}>03</Box>
      <Typography
        align="center"
        padding={"2rem"}
        sx={{
          fontSize: '1.5rem', 
=======
     {/* <Navegador/> */}
      <Typography
        align="center"
        padding={"10px"}
        sx={{
          fontSize: '2rem', 
<<<<<<< HEAD
=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
          fontWeight: 'bold',
          color:"#27496D", 
  
        }}
       >
<<<<<<< HEAD
        Completar Formulario <br /> de registro Materias
=======
<<<<<<< HEAD
        Completar Formulario de registro Materias
=======
        Completar Formulario <br /> de registro Materias
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
      </Typography>
      <Box  component="form" onSubmit={formik.handleSubmit}>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        
        >
            <TextField
<<<<<<< HEAD
            // value={}
=======
            value={formik.values.nombre}
>>>>>>> fd7ed5792b1c1f85c648b87b6d7837b30dca0835
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
            value={formik.values.id_tipo_materia}
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
            value={formik.values.id_estado_materia}
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

            <Button
            href="Listados"
            // href="/listarmaterias"
            variant="contained"
            type="submit"
            edge="start"
            aria-label="menu"
            sx={{width: 300,
              mt: 3,
              backgroundColor: '#27496D', // Color de fondo
              borderRadius: "0.5rem",
              '&:hover': {
                backgroundColor: '#00A8CC'
              }
              }}
          >
            Ver Todas las Materias. 
          </Button>
        </Grid>               
       
      </Box>
    </>
  );
};

export default CargarMaterias;
