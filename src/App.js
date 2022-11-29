import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './Components/Header/Header';
import Main from './Components/Body/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
   // Couleurs du thème
   const theme = createTheme({
      palette: {
         primary: {
            main: '#c4e538',
         },
         secondary: {
            main: '#ff7c22',
         },
         tertiary: {
            main: '#4e5166',
         },
         white: {
            main: '#ffffff',
         },
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Header />
            <Main />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
