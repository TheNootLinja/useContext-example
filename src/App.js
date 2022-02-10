import './App.css';
import useTheme, { themes } from "./ThemeContext"
import { ThemeProvider } from "./ThemeContext";
import Button from "./components/Button.js"
import ThemeLabel from './components/ThemeLabel';
import Container from './components/Container'
import ThemePicker from './components/ThemePicker';


function App() {
  const { theme } = useTheme();
  console.log(theme.backgroundColor)
  return (
    <ThemeProvider>
      <Container>
        <ThemePicker/>
        <Button></Button>
        <ThemeLabel></ThemeLabel>
      </Container>
    </ThemeProvider>
  );
}

export default App;