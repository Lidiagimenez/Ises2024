<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Modal, Button, Grid, TextField, FormControlLabel, Radio, RadioGroup, FormLabel, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import axios from 'axios';
=======
import React from "react";
import { Modal, Button, TextField, Typography } from "@mui/material";
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e

function ModalEdicion(props) {
  const {
    open,
    handleClose,
    editedUserData,
    handleSaveEdit,
    handleEditModalClose,
    setEditedUserData,
<<<<<<< HEAD
  } = props
  const [carreras, setCarreras] = useState([]);
=======
  } = props;
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
<<<<<<< HEAD
    width: "90%",
    maxWidth: "600px",
=======
    width: "40rem", // ancho en rem
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
    backgroundColor: "white",
    padding: "2rem", // padding en rem
    borderRadius: "0.5rem", // borderRadius en rem
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
  };

<<<<<<< HEAD
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/carreras") 
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
  

=======
  const formStyles = {
    display: "flex",
    flexWrap: "wrap", // permite que los campos se envuelvan si no caben en una fila
    gap: "1rem", // espacio entre los campos
  };

  const inputStyles = {
    flex: "1 1 calc(50% - 1rem)", // cada campo ocupa el 50% del ancho menos el espacio
    minWidth: "15rem", // ancho mínimo en rem
  };

>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
<<<<<<< HEAD
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
=======
      <div className="edit-modal" style={modalStyles}>
        <Typography variant="h6" align="center" gutterBottom>
          Editar Usuario
        </Typography>
        <form style={formStyles}>
          {[
            { id: "dni", label: "DNI", type: "number" },
            { id: "nombre", label: "Nombre", type: "text" },
            { id: "apellido", label: "Apellido", type: "text" },
            { id: "direccion", label: "Dirección", type: "text" },
            { id: "correo1", label: "Correo 1", type: "email" },
            { id: "correo2", label: "Correo 2", type: "email" },
            { id: "telefono1", label: "Teléfono 1", type: "number" },
            { id: "telefono2", label: "Teléfono 2", type: "number" },
            { id: "fecha_nacimiento", label: "Fecha de Nacimiento", type: "date" },
            { id: "nacionalidad", label: "Nacionalidad", type: "text" },
          ].map(({ id, label, type }) => (
            <TextField
              key={id}
              id={id}
              name={id}
              label={label}
              type={type}
              value={editedUserData[id]}
              onChange={(e) =>
                setEditedUserData({
                  ...editedUserData,
                  [id]: e.target.value,
                })
              }
              style={inputStyles}
              margin="normal"
              variant="outlined"
            />
          ))}
          <div style={{ flex: "1 1 100%", margin: "1rem 0" }}>
            <Typography variant="body1">Tipo de Usuario:</Typography>
            {["1", "2", "3"].map((value) => (
              <div key={value} style={{ display: "inline-block", marginRight: "1rem" }}>
                <input
                  type="radio"
                  id={`tipo_usuario_${value}`}
                  name="id_tipo_usuario"
                  value={value}
                  checked={editedUserData.id_tipo_usuario === value}
                  onChange={handleRadioChange}
                  style={{ margin: "0 5px" }}
                />
                <label htmlFor={`tipo_usuario_${value}`}>
                  {value === "1" ? "Administrador" : value === "2" ? "Preceptor" : "Alumno/a"}
                </label>
              </div>
            ))}
          </div>

          <div style={{ flex: "1 1 100%", margin: "1rem 0" }}>
            <Typography variant="body1">Estado Usuario:</Typography>
            {["1", "2"].map((value) => (
              <div key={value} style={{ display: "inline-block", marginRight: "1rem" }}>
                <input
                  type="radio"
                  id={`estado_usuario_${value}`}
                  name="id_estado_usuario"
                  value={value}
                  checked={editedUserData.id_estado_usuario === value}
                  onChange={handleRadioChange2}
                  style={{ margin: "0 5px" }}
                />
                <label htmlFor={`estado_usuario_${value}`}>
                  {value === "1" ? "Activo" : "Inactivo"}
                </label>
              </div>
            ))}
          </div>

          {/* Campos específicos para el tipo de usuario "Alumno" */}
          {editedUserData.id_tipo_usuario === "3" && (
            <>
              <TextField
                id="legajo"
                name="legajo"
                label="Legajo"
                value={editedUserData.legajo}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    legajo: e.target.value,
                  })
                }
                style={{ flex: "1 1 calc(50% - 1rem)", minWidth: "15rem" }} // 50% del ancho
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="fecha_inscripcion"
                name="fecha_inscripcion"
                label="Fecha Inscripción"
                type="date"
                value={editedUserData.fecha_inscripcion}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    fecha_inscripcion: e.target.value,
                  })
                }
                style={{ flex: "1 1 calc(50% - 1rem)", minWidth: "15rem" }} // 50% del ancho
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="id_carrera"
                name="id_carrera"
                label="Seleccione la Carrera"
                type="number"
                value={editedUserData.id_carrera}
                onChange={(e) =>
                  setEditedUserData({
                    ...editedUserData,
                    id_carrera: e.target.value,
                  })
                }
                style={{ flex: "1 1 calc(50% - 1rem)", minWidth: "15rem" }} // 50% del ancho
                margin="normal"
                variant="outlined"
              />
            </>
          )}
        </form>
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Guardar
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleEditModalClose}>
            Cancelar
          </Button>
        </div>
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
      </div>
    </Modal>
  );
}

export default ModalEdicion;
