import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    
    h1: {
      fontFamily: 'Orelega One',
      fontSize: '5rem', // Tamaño de fuente 
    },
    h2: {
      fontFamily: 'Orelega One',
      fontSize: '1.75rem', 
    },
    h4: {
      fontFamily: 'Orelega One',
      fontSize: '1.5rem', 
    },
    h5: {
      fontFamily: 'Orelega One',
      fontSize: '1.5rem', 
    },
    h6: {
      fontFamily: 'Orelega One',
      fontSize: '1.5rem', 
    },

    body1: {
      fontFamily: 'Orelega One',
      fontSize: '1rem', 
    },
      // Agrega un estilo específico para el texto de la navegación
      navText: {
        
        fontSize: '3.5rem', // Ajusta según tu preferencia
        fontFamily: 'Orelega One',

      },
  },
});

//   typography: {
//     h6: {
//       margin:"20px",
//       // fontSize:"10px",
//       '&:hover': {
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Agrega una sombra suave al hacer hover
//         transition: 'font-size 0.5s', // Agrega una transición suave de 0.3 segundos
//         fontSize:"27px",
//       },
//     },
//   },
// });

export default theme;