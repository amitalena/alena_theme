import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/Theme';
import { MainRouter } from './routes/MainRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;