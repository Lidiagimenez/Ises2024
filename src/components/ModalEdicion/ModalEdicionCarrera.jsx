<<<<<<< HEAD
import React, { useEffect } from "react";
import { Modal, Button } from "@mui/material";
=======
import React from "react";
import { Modal, Button, TextField, Typography, Grid } from "@mui/material";
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e

function ModalEdicionCarrera(props) {
  const {
    open,
    handleClose,
    editedMateriaData,
    handleSaveEdit,
    handleEditModalClose,
    handleRadioChange,
    setEditedMateriaData,
  } = props;

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem", // ancho en rem
    backgroundColor: "white",
    padding: "2rem", // padding en rem
    borderRadius: "0.5rem", // borderRadius en rem
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
  };

<<<<<<< HEAD
  // Asegúrate de que los valores se actualicen cuando el modal se abra
  useEffect(() => {
    if (open) {
      // Aquí se puede hacer cualquier validación o ajuste del estado
      // por ejemplo, asegurándote de que editedMateriaData esté correctamente inicializado
    }
  }, [open]); // Solo se ejecuta cuando el modal se abre

=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="edit-modal" style={modalStyles}>
        <Typography variant="h6" align="center" gutterBottom>
          Editar CARRERA
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="nombre"
              name="nombre"
<<<<<<< HEAD
              value={editedMateriaData.nombre || ""} // Aseguramos que el campo tenga un valor por defecto
=======
              label="Nombre Carrera"
              value={editedMateriaData.nombre}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
              onChange={(e) =>
                setEditedMateriaData({
                  ...editedMateriaData,
                  nombre: e.target.value,
                })
              }
              fullWidth // ocupa todo el ancho del contenedor
              variant="outlined"
            />
          </Grid>

<<<<<<< HEAD
          <div>
            <label htmlFor="id_estado_carrera">Estado Carrera:</label>
            <input
              type="radio"
              id="activo"
              name="id_estado_carrera"
              value="1"
              checked={editedMateriaData.id_estado_carrera === "1"} // Verifica que se seleccione el valor correcto
              onChange={handleRadioChange} // Utiliza la función pasada como prop
              style={{
                width: 20,
                height: 20,
                margin: "10px",
              }}
            />
            <label htmlFor="activo">Activo</label>

            <input
              type="radio"
              id="inactivo"
              name="id_estado_carrera"
              value="2"
              checked={editedMateriaData.id_estado_carrera === "2"} // Verifica que se seleccione el valor correcto
              onChange={handleRadioChange} // Utiliza la función pasada como prop
              style={{
                width: 20,
                height: 20,
                margin: "10px",
              }}
            />
            <label htmlFor="inactivo">Inactivo</label>
          </div>
        </form>

        <div>
          <Button onClick={handleSaveEdit}>Guardar</Button>
          <Button onClick={handleEditModalClose}>Cancelar</Button>
=======
          <Grid item xs={12}>
            <Typography variant="body1">Estado Carrera:</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <input
                  type="radio"
                  id="activo"
                  name="id_estado_carrera"
                  value="1"
                  checked={editedMateriaData.id_estado_carrera === "1"}
                  onChange={handleRadioChange}
                  style={{ marginRight: "0.5rem" }}
                />
                <label htmlFor="activo">Activo</label>
              </Grid>

              <Grid item>
                <input
                  type="radio"
                  id="inactivo"
                  name="id_estado_carrera"
                  value="2"
                  checked={editedMateriaData.id_estado_carrera === "2"}
                  onChange={handleRadioChange}
                  style={{ marginRight: "0.5rem" }}
                />
                <label htmlFor="inactivo">Inactivo</label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="primary" onClick={handleSaveEdit}>
            Guardar
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleEditModalClose}>
            Cancelar
          </Button>
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
        </div>
      </div>
    </Modal>
  );
}

export default ModalEdicionCarrera;
