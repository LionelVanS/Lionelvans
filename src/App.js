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
            main: '#56c8ea',
            // contrastText: '#ffffff',
         },
         secondary: {
            main: '#c4e538',
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
