import React from 'react'
import styled from 'styled-components'
import useTheme, { themes } from "../ThemeContext"

const ThemePicker = () => {
  const { theme, setTheme } = useTheme();
  return (
    <StyledDiv color={theme.textColor}>
        <label for="dog-names">Choose a dog name:</label>
        <select name="dog-names" id="dog-names">
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="Cyberpunk">Cyberpunk</option>
        </select>
    </StyledDiv>
  )
}

export default ThemePicker

const StyledDiv = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto;
    margin-bottom: 30px;
    color: ${(props) => props.color}
`;