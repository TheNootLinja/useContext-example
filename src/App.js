import './App.css';
import useTheme, { themes } from "./ThemeContext"
import styled from 'styled-components';
import { ThemeProvider } from "./ThemeContext";
import Button from "./components/Button.js"
import ThemeLabel from './components/ThemeLabel';


function App() {
  const { theme } = useTheme();
  console.log(theme.backgroundColor)
  return (
    <ThemeProvider>
      <StyledDiv color={theme.backgroundColor} className="App">
        <Button></Button>
        <ThemeLabel></ThemeLabel>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;

const StyledDiv = styled.div`
  background: ${(props) => props.color}
  height: 100vh;
`;