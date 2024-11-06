import React, { useEffect } from "react";
import { Modal, Button } from "@mui/material";

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
    flexDirection: "column",
    margin: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
  };

  // Asegúrate de que los valores se actualicen cuando el modal se abra
  useEffect(() => {
    if (open) {
      // Aquí se puede hacer cualquier validación o ajuste del estado
      // por ejemplo, asegurándote de que editedMateriaData esté correctamente inicializado
    }
  }, [open]); // Solo se ejecuta cuando el modal se abre

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="edit-modal" style={modalStyles}>
        <h2>Editar CARRERA</h2>
        <form>
          <div>
            <label htmlFor="nombre">Nombre Carrera</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={editedMateriaData.nombre || ""} // Aseguramos que el campo tenga un valor por defecto
              onChange={(e) =>
                setEditedMateriaData({
                  ...editedMateriaData,
                  nombre: e.target.value,
                })
              }
              style={{
                margin: "10px",
              }}
            />
          </div>

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
        </div>
      </div>
    </Modal>
  );
}

export default ModalEdicionCarrera;
