//axios es una librería para hacer peticiones HTTP
import axios from "axios";

//creamos una instancia de axios
const instance = axios.create({
  baseURL:"https://ises2024back.onrender.com", // Accede a la URL del backend desde la variable de entorno,
  withCredentials: true,
});
//exportamos la instancia de axios para que pueda ser utilizada en otros archivos
export default instance;