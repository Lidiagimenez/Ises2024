import React from "react";
import { Modal, Button, TextField, Typography, Grid } from "@mui/material";

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
              label="Nombre Carrera"
              value={editedMateriaData.nombre}
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
        </div>
      </div>
    </Modal>
  );
}

export default ModalEdicionCarrera;
