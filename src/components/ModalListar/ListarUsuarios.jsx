import * as React from "react"; 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEdicion from "../ModalEdicion/ModalEdicion";
import ModalBorrarUsuario from "../ModalBorrar/ModalBorrarUsuario";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectUserDelete, setSelectUserDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    setSelectedUser({
      ...editedMateriaData,
      id_tipo_usuario: newValue,
    });
  };


  const fetchUsers = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3000/api/v1/users");
      setUsers(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los usuarios: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { field: "id_usuario", headerName: "ID", width: 60 },
    { field: "dni", headerName: "DNI", width: 60 },
    { field: "nombre", headerName: "Nombre", width: 60 },
    { field: "apellido", headerName: "Apellido", width: 60 },
    { field: "direccion", headerName: "Direccion", width: 60 },
    { field: "correo1", headerName: "Correo 1", width: 60 },
    { field: "telefono1", headerName: "Teléfono 1", width: 60 },
    { field: "fecha_nacimiento", headerName: "Fecha Nacimiento", width: 60 },
    {
      field: "id_tipo_usuario",
      headerName: "Tipo Usuario",
      width: 60,
      valueGetter: (params) => tipoUsuarioMap[params.row.id_tipo_usuario] || "",
    },
    {
      field: "id_estado_usuario",
      headerName: "Estado Usuario",
      width: 70,
      valueGetter: (params) => estadoUsuarioMap[params.row.id_estado_usuario] || "",
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => (
        <div>
          <Button
            startIcon={<BorderColorOutlinedIcon />}
            variant="outlined"
            color="success"
            size="small"
            onClick={() => openEditModal(params.row)}
          >
            {/* Editar */}
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            size="small"
            onClick={() => openDeleteModal(params.row)}
            style={{ marginLeft: 8 }}
          >
            {/* Borrar */}
          </Button>
        </div>
      ),
    },
  ];

  const openEditModal = (user) => {
    setEditedUserData(user);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (user) => {
    setSelectUserDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/v1/users/${editedUserData.id_usuario}`, editedUserData);
      const updatedUsers = users.map((user) => 
        user.id_usuario === editedUserData.id_usuario ? editedUserData : user
      );
      setUsers(updatedUsers);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error al guardar los cambios: ", error);
    }
  };
  

  const handleSaveDelete = async () => {
    try {
      await axios.put(`http://localhost:3000/api/v1/users/${selectUserDelete.id_usuario}`, { alta_baja: 0 });
      setUsers(users.filter(user => user.id_usuario !== selectUserDelete.id_usuario));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error al borrar el usuario: ", error);
    }
  };

  const customLocaleText = {
    footerPaginationRowsPerPage: "Filas por página:",
    filterPanelColumns: "Columnas",
    filterPanelOperator: "Operador",
    filterPanelInputLabel: "Valor",
    filterPanelInputPlaceholder: "Filtrar valor",
    columnMenuLabel: "Menú",
    columnMenuShowColumns: "Mostrar columnas",
    columnMenuFilter: "Filtrar",
    columnMenuHideColumn: "Ocultar columna",
    columnMenuUnsort: "Quitar orden",
    columnMenuSortAsc: "Ordenar ASC",
    columnMenuSortDesc: "Ordenar DESC",
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
      <Box sx={numberTagStyle('#00A8CC')}>01</Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: '1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: "#27496D",
          textAlign: 'center',
        }}
      >
        Listado de Usuarios
      </Typography>

      <Container sx={{ marginTop: "1rem", display: "flex", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ height: '25rem', width: "100%" }}>
          <DataGrid
            rows={users.filter((user) => user.alta_baja === 1)}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            getRowId={(row) => row.id_usuario}
            localeText={customLocaleText}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                sx: {
                  // backgroundColor: "#0C7B93",
                  color: "#ffffff",
                  border: "0.5rem solid #27496D",
                  // padding: "1rem 1.5rem",
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
            setEditedUserData={setEditedUserData}
          />

          {/* Modal de borrar */}
          <ModalBorrarUsuario
            open={isDeleteModalOpen}
            handleClose={() => setIsDeleteModalOpen(false)}
            handleSaveDelete={handleSaveDelete}
            selectUserDelete={selectUserDelete}
          />
        </div>
      </Container>
    </>
  );
}

export default UserTable;
