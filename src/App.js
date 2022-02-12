import './App.css';
import { ThemeProvider } from "./ThemeContext";
import ThemeTitle from './components/ThemeTitle';
import Button from "./components/Button.js"
import ThemeLabel from './components/ThemeLabel';
import Container from './components/Container'
import ThemePicker from './components/ThemePicker';


function App() {
  return (
    <ThemeProvider>
      <Container>
        <ThemeTitle></ThemeTitle>
        <ThemePicker/>
        <Button></Button>
        <ThemeLabel></ThemeLabel>
      </Container>
    </ThemeProvider>
  );
}

export default App;