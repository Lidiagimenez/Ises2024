import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, MenuList } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEdicion from "../ModalEdicion/ModalEdicion";
import ModalBorrarUsuario from "../ModalBorrar/ModalBorrarUsuario";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Typography from "@mui/material/Typography";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectUserDelete, setSelectUserDelete] = useState(null);
  const [isEditModa2Open, setIsEditModa2Open] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    id_usuario: "",
    dni: "",
    nombre: "",
    apellido: "",
    direccion: "",
    correo1: "",
    telefono1: "",
    fecha_nacimiento: "",
    id_tipo_usuario: "",
    id_estado_usuario: "",
    legajo: "",
    fecha_inscripcion: "",
    id_carrera: "",
  });

  const tipoUsuarioMap = {
    1: "Administrador",
    2: "Preceptor/a",
    3: "Alumno/a",
  };

  const estadoUsuarioMap = {
    1: "Activo",
    2: "Inactivo",
  };

  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setEditedUserData({
      ...editedUserData,
      id_tipo_usuario: newValue,
    });
  };

  const handleRadioChange2 = (e) => {
    const newValue = e.target.value;
    setEditedUserData({
      ...editedUserData,
      id_estado_usuario: newValue,
    });
  };

  const listado = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/api/v1/users");
      setUsers(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listado();
  }, []);

  const columns = [
    { field: "id_usuario", headerName: "ID", width: 100 },
    { field: "dni", headerName: "DNI", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 100 },
    { field: "apellido", headerName: "Apellido", width: 100 },
    { field: "direccion", headerName: "Direccion", width: 100 },
    { field: "correo1", headerName: "Correo 1", width: 100 },
    { field: "telefono1", headerName: "Teléfono 1", width: 100 },
    { field: "fecha_nacimiento", headerName: "Fecha Nacimiento", width: 100 },
    {
      field: "id_tipo_usuario",
      headerName: "Tipo Usuario",
      width: 100,
      valueGetter: (params) => tipoUsuarioMap[params.row.id_tipo_usuario] || "",
    },
    {
      field: "id_estado_usuario",
      headerName: "Estado Usuario",
      width: 90,
      valueGetter: (params) => estadoUsuarioMap[params.row.id_estado_usuario] || "",
    },
    {
      field: "actions", 
      headerName: "Acciones", 
      width: 200, 
      renderCell: (params) => (
        <div>
          <Button
            startIcon={<BorderColorOutlinedIcon />}
            variant="outlined"
            color="success"
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            {/* Editar */}
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row)}
            style={{ marginLeft: 8 }}
          >
            {/* Borrar */}
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (row) => {
    setEditedUserData(row);
    setIsEditModalOpen(true);
  };

  const handleDelete = (row) => {
    setSelectUserDelete(row);
    setIsEditModa2Open(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/v1/users/${editedUserData.id_usuario}`, {
        ...editedUserData,
      });
      const updatedUsers = users.map((user) =>
        user.id_usuario === editedUserData.id_usuario ? editedUserData : user
      );
      setUsers(updatedUsers);
      setIsEditModalOpen(false);
    } catch (error) {
      console.log("Error al guardar los cambios: ", error);
    }
  };

  const handleSaveDelete = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/users/${selectUserDelete.id_usuario}`, 
        { alta_baja: 0 }
      );
      if (response.status === 200) {
        const updatedUsers = users.filter((user) => user.id_usuario !== selectUserDelete.id_usuario);
        setUsers(updatedUsers);
        setIsEditModa2Open(false);
      }
    } catch (error) {
      console.log("Error al borrar el usuario: ", error);
    }
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setIsEditModa2Open(false);
  };

  const customLocaleText = {

    footerPaginationRowsPerPage: "Filas por página:",

       // Traducciones del panel de filtro
  filterPanelColumns: "Columnas",
  filterPanelOperator: "Operador",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Filtrar valor",
    // Traducción de las opciones en el menú de columnas
    columnMenuLabel: "Menú",  // Texto del menú de las columnas
    columnMenuShowColumns: "Mostrar columnas",  // Mostrar columnas
    columnMenuFilter: "Filtrar",  // Filtrar
    columnMenuHideColumn: "Ocultar columna",  // Ocultar columna
    columnMenuUnsort: "Quitar orden",  // Quitar orden
    columnMenuSortAsc: "Ordenar ASC",  // Ordenar ascendente
    columnMenuSortDesc: "Ordenar DESC",  // Ordenar descendente


    toolbarExport: "Exportar",
    toolbarColumns: "Columnas",
    toolbarFilters: "Filtros",
    toolbarDensity: "Vista",
    toolbarDensityCompact: "Compacto",
    toolbarDensityStandard: "Estándar",
    toolbarDensityComfortable: "Confortable",
    columnsPanelShowAllButton: "Mostrar todo",
    columnsPanelHideAllButton: "Ocultar todo",
    toolbarExportCSV: "Exportar CSV",
    toolbarExportPrint: "Imprimir",

     // Operaciones de filtro
  filterOperatorContains: "Contiene",
  filterOperatorEquals: "Igual a",
  filterOperatorStartsWith: "Empieza con",
  filterOperatorEndsWith: "Termina con",
  filterOperatorIs: "Es",
  filterOperatorNot: "No es",
  filterOperatorAfter: "Después de",
  filterOperatorOnOrAfter: "En o después de",
  filterOperatorBefore: "Antes de",
  filterOperatorOnOrBefore: "En o antes de",
  filterOperatorIsEmpty: "Está vacío",
  filterOperatorIsNotEmpty: "No está vacío",

  
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          marginTop: '3rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: "#27496D",
          textAlign: 'center',
        }}
      >
        Listado de Usuarios
      </Typography>

      <Container sx={{ marginTop: "10px", 
        display: "flex", 
        justifyContent: "center",
        overflow: "hidden", 
       }}
        >
        <div style={{ height: '80rem', 
          width: "100%" }}>
          <DataGrid
            rows={users.filter((user) => user.alta_baja === 1)}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            getRowId={(row) => row.id_usuario}
            localeText={customLocaleText}
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              toolbar: {
                sx: {
                  backgroundColor: "",
                  color: "#ffffff",
                  border: "0.5rem solid #27496D",
                  padding: "1rem 1,5rem",
                  borderRadius: "1rem",
                },
              },
            }}
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "1px solid #27496D",
                backgroundColor: "#0C7B93",
                color: "#ffffff",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
              },
              "& .MuiDataGrid-cell": {
                borderRight: "1px solid #27496D",
              },
            }}
          />

          {/* Modal de edición */}
          <ModalEdicion
            open={isEditModalOpen}
            handleClose={() => setIsEditModalOpen(false)}
            editedUserData={editedUserData}
            handleSaveEdit={handleSaveEdit}
            handleEditModalClose={handleEditModalClose}
            handleRadioChange={handleRadioChange}
            handleRadioChange2={handleRadioChange2}
            setEditedUserData={setEditedUserData}
          />

          {/* Modal de borrar */}
          <ModalBorrarUsuario
            open={isEditModa2Open}
            handleClose={() => setIsEditModa2Open(false)}
            handleSaveDelete={handleSaveDelete}
            handleEditModalClose={handleEditModalClose}
          />
        </div>
      </Container>
    </>
  );
}

export default UserTable;
