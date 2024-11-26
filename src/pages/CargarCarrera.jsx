import * as React from "react";
import { useFormik } from "formik";
// import axios from "axios";
import axios from "../api/axios.js";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const currencies = [
  { value: "1", label: "Activo" },
  { value: "2", label: "Inactivo" },
];

const CargarCarrera = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      id_estado_carrera: "1", 
      alta_baja: "1",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Debe ingresar un nombre"),
      id_estado_carrera: Yup.string().required("ingrese estado carrera"), 
      alta_baja: Yup.number().required("ingrese alt"),
    }),
    onSubmit: async (data) => {
      try {
        const respuesta = await axios.post(
          "/api/v1/carreras",
          data
        );
        abrirModal();
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => {
    setModalAbierto(true); // Cambiado a true para abrir el modal
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
      <Box sx={numberTagStyle('#0C7B93')}>02</Box>
      <Typography
        align="center"
        padding={"2rem"}
        sx={{
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          color: "#27496D",
        }}
      >
        Completar Formulario de registro Carreras
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            type="text"
            label="Nombre"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre} // Asegúrate de que el valor sea controlado
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
          />
          <TextField
            select
            label="Estado Carrera"
            variant="outlined"
            sx={{ width: 300, mt: 3 }}
            name="id_estado_carrera"
            value={formik.values.id_estado_carrera} // Asegúrate de que el valor sea controlado
            onChange={formik.handleChange}
            error={formik.touched.id_estado_carrera && Boolean(formik.errors.id_estado_carrera)}
            helperText={formik.touched.id_estado_carrera && formik.errors.id_estado_carrera}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            type="submit"
            sx={{ width: 300, mt: 3, mx: 1 }}
            disabled={!formik.isValid}
          >
            Enviar Formulario
          </Button>

          <Modal open={modalAbierto} onClose={cerrarModal}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" component="div">
                Formulario enviado con éxito.
              </Typography>
              <Button
                variant="contained"
                onClick={cerrarModal}
                sx={{ width: 300, mt: 3 }}
              >
                Cerrar
              </Button>
            </Box>
          </Modal>

          <Button
            href="Listados"
            variant="contained"
            sx={{
              width: 300,
              mt: 3,
              backgroundColor: '#27496D',
              borderRadius: "0.5rem",
              '&:hover': {
                backgroundColor: '#00A8CC'
              }
            }}
          >
            Ver Todas las Carreras.
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default CargarCarrera;
