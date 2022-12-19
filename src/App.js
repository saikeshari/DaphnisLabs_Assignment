import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Homepage from './Homepage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#750B0B'
    },
    secondary: {
      main: '#00A69C'
    },
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
        <Homepage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
