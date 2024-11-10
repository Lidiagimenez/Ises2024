import * as React from "react"; 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Button, Container, Typography, Box } from "@mui/material";
=======
import { Button, Container } from "@mui/material";
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
import DeleteIcon from "@mui/icons-material/Delete";
import ModalEdicion from "../ModalEdicion/ModalEdicion";
import ModalBorrarUsuario from "../ModalBorrar/ModalBorrarUsuario";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
<<<<<<< HEAD
=======
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4

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
<<<<<<< HEAD
  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setSelectedUser({
      ...editedMateriaData,
      id_tipo_usuario: newValue,
    });
  };
<<<<<<< HEAD

  const handleRadioChange2 = (e) => {
    const newValue = e.target.value;
    setEditedUserData({
      ...editedUserData,
      id_estado_usuario: newValue,
    });
  };

=======


  const fetchUsers = async () => {
=======

>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
  const listado = async () => {
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
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
=======
    { field: "id_usuario", headerName: "ID", width: 80 },
    { field: "dni", headerName: "DNI", width: 80 },
    { field: "nombre", headerName: "Nombre", width: 80 },
    { field: "apellido", headerName: "Apellido", width: 80 },
    { field: "direccion", headerName: "Direccion", width: 80 },
    { field: "correo1", headerName: "Correo 1", width: 80 },
    { field: "telefono1", headerName: "Teléfono 1", width: 80 },
    { field: "fecha_nacimiento", headerName: "Fecha Nacimiento", width: 80 },
    {
      field: "id_tipo_usuario",
      headerName: "Tipo Usuario",
      width: 80,
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
      valueGetter: (params) => tipoUsuarioMap[params.row.id_tipo_usuario] || "",
    },
    {
      field: "id_estado_usuario",
      headerName: "Estado Usuario",
<<<<<<< HEAD
      width: 90,
      valueGetter: (params) => estadoUsuarioMap[params.row.id_estado_usuario] || "",
    },
    {
      field: "actions", 
      headerName: "Acciones", 
      width: 200, 
=======
      width: 70,
      valueGetter: (params) => estadoUsuarioMap[params.row.id_estado_usuario] || "",
    },
    {
<<<<<<< HEAD
      field: "actions",
      headerName: "Acciones",
      width: 150,
=======
      field: "actions", 
      headerName: "Acciones", 
      width: 150, 
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
      renderCell: (params) => (
        <div>
          <Button
            startIcon={<BorderColorOutlinedIcon />}
            variant="outlined"
            color="success"
            size="small"
<<<<<<< HEAD
            onClick={() => handleEdit(params.row)}
=======
<<<<<<< HEAD
            onClick={() => openEditModal(params.row)}
=======
            onClick={() => handleEdit(params.row)}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
          >
            {/* Editar */}
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            color="error"
            size="small"
<<<<<<< HEAD
            onClick={() => handleDelete(params.row)}
=======
<<<<<<< HEAD
            onClick={() => openDeleteModal(params.row)}
=======
            onClick={() => handleDelete(params.row)}
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
            style={{ marginLeft: 8 }}
          >
            {/* Borrar */}
          </Button>
        </div>
      ),
    },
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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

<<<<<<< HEAD
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


=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
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
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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
<<<<<<< HEAD

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

  
=======
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
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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
<<<<<<< HEAD
      <Typography
        variant="h5"
        sx={{
          marginTop: '3rem',
          fontSize: '2rem',
=======
<<<<<<< HEAD
      <Box sx={numberTagStyle('#00A8CC')}>01</Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: '1rem',
          fontSize: '1.5rem',
=======
      <Typography
        variant="h5"
        sx={{
          marginTop: '3rem',
          fontSize: '1.5rem', // Cambié el tamaño de fuente
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
          fontWeight: 'bold',
          color: "#27496D",
          textAlign: 'center',
        }}
      >
        Listado de Usuarios
      </Typography>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      <Container sx={{ marginTop: "1rem", display: "flex", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ height: '25rem', width: "100%" }}>
=======
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
      <Container sx={{ marginTop: "10px", 
        display: "flex", 
        justifyContent: "center",
        overflow: "hidden", 
<<<<<<< HEAD
       }}
        >
        <div style={{ height: '80rem', 
          width: "100%" }}>
=======
       }}>
        <div style={{ height: '50rem', // Cambié la altura de la grilla
          width: "100%" }}>
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
          <DataGrid
            rows={users.filter((user) => user.alta_baja === 1)}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            getRowId={(row) => row.id_usuario}
            localeText={customLocaleText}
<<<<<<< HEAD
=======
<<<<<<< HEAD
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                sx: {
                  // backgroundColor: "#0C7B93",
                  color: "#ffffff",
                  border: "0.5rem solid #27496D",
                  // padding: "1rem 1.5rem",
=======
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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
<<<<<<< HEAD
=======
>>>>>>> 259eab9d1fea4a4bab0be655adad0b4477e9488e
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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
<<<<<<< HEAD
            handleEditModalClose={handleEditModalClose}
            handleRadioChange={handleRadioChange}
            handleRadioChange2={handleRadioChange2}
=======
>>>>>>> d763d5a58ce843d7daf9aa04ceebdfba03de3af4
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
