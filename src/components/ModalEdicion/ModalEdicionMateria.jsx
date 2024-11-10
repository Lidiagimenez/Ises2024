import React from "react";
import { Modal, Button } from "@mui/material";

function ModalEdicionMaterias(props) {
  const {
    open,
    handleClose,
    editedMateriaData,
    handleSaveEdit,
    handleEditModalClose,
    handleRadioChange,
    handleRadioChange2,
    setEditedMateriaData,
  } = props;

  const modalStyles = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  const formGroupStyles = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    width: "100%",
  };

  const labelStyles = {
    marginBottom: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold", // Aplicar negrita
  };

  const inputStyles = {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    border: "1px solid #ccc",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="edit-modal" style={modalStyles}>
        <h2>Editar MATERIA</h2>
        <form>
          <div style={formGroupStyles}>
            <label htmlFor="nombre" style={labelStyles}>Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={editedMateriaData.nombre}
              onChange={(e) =>
                setEditedMateriaData({
                  ...editedMateriaData,
                  nombre: e.target.value,
                })
              }
              style={inputStyles}
            />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Tipo Materia:</label>
            <div>
              <input
                type="radio"
                id="regular"
                name="id_tipo_materia"
                value="1"
                checked={editedMateriaData.id_tipo_materia === "1"}
                onChange={(e) => handleRadioChange(e)}
                style={{ marginRight: "0.5rem" }}
              />
              <label htmlFor="regular" style={{ marginRight: "1rem" }}>Regular</label>

              <input
                type="radio"
                id="promocional"
                name="id_tipo_materia"
                value="2"
                checked={editedMateriaData.id_tipo_materia === "2"}
                onChange={(e) => handleRadioChange(e)}
                style={{ marginRight: "0.5rem" }}
              />
              <label htmlFor="promocional">Promocional</label>
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Estado Materia:</label>
            <div>
              <input
                type="radio"
                id="activo"
                name="id_estado_materia"
                value="1"
                checked={editedMateriaData.id_estado_materia === "1"}
                onChange={(e) => handleRadioChange2(e)}
                style={{ marginRight: "0.5rem" }}
              />
              <label htmlFor="activo" style={{ marginRight: "1rem" }}>Activo</label>

              <input
                type="radio"
                id="inactivo"
                name="id_estado_materia"
                value="2"
                checked={editedMateriaData.id_estado_materia === "2"}
                onChange={(e) => handleRadioChange2(e)}
                style={{ marginRight: "0.5rem" }}
              />
              <label htmlFor="inactivo">Inactivo</label>
            </div>
          </div>
        </form>

        <div>
          <Button variant="contained" color="primary" onClick={handleSaveEdit} style={{ marginRight: "1rem" }}>
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

export default ModalEdicionMaterias;
