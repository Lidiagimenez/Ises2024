import React, { useState, useEffect } from "react";
import { Modal, Button, Grid, TextField, FormControlLabel, Radio, RadioGroup, FormLabel, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import axios from 'axios';
import axios from "../../api/axios.js";

function ModalEdicion(props) {
  const {
    open,
    handleClose,
    editedUserData,
    handleSaveEdit,
    handleEditModalClose,
    setEditedUserData,
  } = props
  const [carreras, setCarreras] = useState([]);

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    backgroundColor: "white",
    padding: "2rem", // padding en rem
    borderRadius: "0.5rem", // borderRadius en rem
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
  };

  useEffect(() => {
    axios.get("/api/v1/carreras") 
      .then((response) => {
        setCarreras(response.data);  
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCarreraChange = (event) => {
    setEditedUserData({
      ...editedUserData,
      id_carrera: event.target.value, // Actualiza el campo de carrera con el valor seleccionado
    });
  };


  // Función para manejar cambios en los radio buttons de tipo de usuario
  const handleTipoUsuarioChange = (event) => {
    setEditedUserData({
      ...editedUserData,
      id_tipo_usuario: parseInt(event.target.value),
    });
  };

  // Función para manejar cambios en los radio buttons de estado de usuario
  const handleEstadoUsuarioChange = (event) => {
    setEditedUserData({
      ...editedUserData,
      id_estado_usuario: parseInt(event.target.value),
    });
  };
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={modalStyles}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="DNI"
                type="number"
                fullWidth
                value={editedUserData.dni || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    dni: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre"
                type="text"
                fullWidth
                value={editedUserData.nombre || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    nombre: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Apellido"
                type="text"
                fullWidth
                value={editedUserData.apellido || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    apellido: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Dirección"
                type="text"
                fullWidth
                value={editedUserData.direccion || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    direccion: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Correo 1"
                type="email"
                fullWidth
                value={editedUserData.correo1 || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    correo1: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Correo 2"
                type="email"
                fullWidth
                value={editedUserData.correo2 || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    correo2: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Teléfono 1"
                type="number"
                fullWidth
                value={editedUserData.telefono1 || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    telefono1: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Teléfono 2"
                type="number"
                fullWidth
                value={editedUserData.telefono2 || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    telefono2: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fecha de Nacimiento"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={editedUserData.fecha_nacimiento || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    fecha_nacimiento: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nacionalidad"
                type="text"
                fullWidth
                value={editedUserData.nacionalidad || ""}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    nacionalidad: e.target.value,
                  })
                }
              />
            </Grid>

            {/* Radio Group for Tipo de Usuario */}
            <Grid item xs={12}>
              <FormLabel>Tipo de Usuario</FormLabel>
              <RadioGroup
                row
                value={editedUserData.id_tipo_usuario || ""}
                onChange={handleTipoUsuarioChange}
              >
                <FormControlLabel value={1} control={<Radio />} label="Administrador" />
                <FormControlLabel value={2} control={<Radio />} label="Preceptor" />
                <FormControlLabel value={3} control={<Radio />} label="Alumno/a" />
              </RadioGroup>
            </Grid>

            {/* Radio Group for Estado Usuario */}
            <Grid item xs={12}>
              <FormLabel>Estado Usuario</FormLabel>
              <RadioGroup
                row
                value={editedUserData.id_estado_usuario || ""}
                onChange={handleEstadoUsuarioChange}
              >
                <FormControlLabel value={1} control={<Radio />} label="Activo" />
                <FormControlLabel value={2} control={<Radio />} label="Inactivo" />
              </RadioGroup>
            </Grid>

            {/* Conditional fields */}
            {editedUserData.id_tipo_usuario === 3 && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Legajo"
                    type="text"
                    fullWidth
                    value={editedUserData.legajo || ""}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        legajo: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha Inscripción"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={editedUserData.fecha_inscripcion || ""}
                    onChange={(e) =>
                      setEditedUserData({
                        ...editedUserData,
                        fecha_inscripcion: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Seleccione la Carrera</InputLabel>
                <Select
                  value={editedUserData.id_carrera || ""}
                  onChange={handleCarreraChange}
                >
                  {carreras.map((carrera) => (
                    <MenuItem key={carrera.id_carrera} value={carrera.id_carrera}>
                      {carrera.nombre} {/* Asumiendo que la carrera tiene un campo 'nombre' */}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
              </>
            )}
          </Grid>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
            <Button variant="contained" color="primary" onClick={handleSaveEdit} style={{ marginRight: "10px" }}>
              Guardar
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalEdicion;
