import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, Stack, TextField, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import axios from "../../api/axios.js"
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Login2 = () => {
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);
    const [loginError, setLoginError] = useState("");
  
  
    const validationSchema = Yup.object().shape({
      username: Yup.string()
        .matches(/^[0-9]+$/, "El usuario debe ser exclusivamente numérico.")
        .min(8, "El usuario debe tener al menos 8 números.")
        .required("Campo requerido."),
      password: Yup.string()
        .required("Campo requerido.")
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
        .max(16, "La contraseña debe tener como máximo 16 caracteres.")
    });
  
    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => { 
        try {
          const response = await axios.post("/api/v1/autentificacion/login", {
            username: values.username,
            password: values.password,
          });
      
          if (response.status === 200) {
            const { access_token, refresh_token } = response.data; 
            
            const accessPayload = jwtDecode(access_token);
            const userId = accessPayload.userId;
            const userType = accessPayload.userType;
            const userName = accessPayload.userName
      
           
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('userType', userType);
            localStorage.setItem('userName', userName);
      
            if (userType === 1) {
              navigate("/Home2");
            } else if (userType === 2) {
              navigate("/Home");
            }
          } else {
            setLoginError("Credenciales incorrectas. Por favor, inténtalo nuevamente.");
          }
        } catch (error) {
          setLoginError("Usuario o contraseña incorrectos");
        }
  
        if (rememberMe) {
       
        }
      },
    });
  
    const handleRememberMeChange = (event) => {
      setRememberMe(event.target.checked);
    };
  
    return (
      <Container maxWidth="lg"
      sx={{
        bgcolor: '#2b4e84',
        borderRadius: 2, // Bordes redondeados
        border: '5px solid white', // Borde blanco
        boxShadow: 7, // Sombra
        padding: 2, // Espaciado interno
      }}
    >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper sx={{ padding: "0.5em", borderRadius: "0.5em" }}>
              <Avatar
                alt="Remy Sharp"
                src="/src/assets/LOGO150.png"
                sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
              />
              <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
                Iniciar Sesión
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit} autoComplete="off">
                <Stack spacing={2}>
                  <TextField
                    name="username"
                    margin="normal"
                    size="medium"
                    type="number"
                    fullWidth
                    label="Usuario"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    error={formik.touched.username && formik.errors.username ? true : false}
                    helperText={formik.touched.username && formik.errors.username}
                  />
                  <TextField
                    name="password"
                    margin="normal"
                    size="medium"
                    type="password"
                    fullWidth
                    label="Contraseña"
                    sx={{ mt: 1, mb: 1 }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && formik.errors.password ? true : false}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                    }
                    label="Acuérdate de mí"
                    sx={{ mt: 1 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1.5, mb: 2 }}
                  >
                    Ingresar
                  </Button>
                  
                  {loginError && (
                    <Typography variant="body2" color="error">
                      {loginError}
                    </Typography>
                  )}
                  <Link href="/Recover-User" variant="body2">
                    ¿Olvidó su nombre de usuario o contraseña?
                  </Link>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
}

export default Login2