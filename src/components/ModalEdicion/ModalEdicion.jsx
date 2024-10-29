import React from "react";
import { Modal, Button, TextField, Typography } from "@mui/material";

function ModalEdicion(props) {
  const {
    open,
    handleClose,
    editedUserData,
    handleSaveEdit,
    handleEditModalClose,
    handleRadioChange,
    handleRadioChange2,
    setSelectedUser,
    setEditedUserData,
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

  const formStyles = {
    display: "flex",
    flexWrap: "wrap", // permite que los campos se envuelvan si no caben en una fila
    gap: "1rem", // espacio entre los campos
  };

  const inputStyles = {
    flex: "1 1 calc(50% - 1rem)", // cada campo ocupa el 50% del ancho menos el espacio
    minWidth: "15rem", // ancho mínimo en rem
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
      </div>
    </Modal>
  );
}

export default ModalEdicion;
