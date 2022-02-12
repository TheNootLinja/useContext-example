import React from 'react'
import styled from 'styled-components'
import useTheme, { themes } from "../ThemeContext"

const ThemePicker = () => {
  const { theme, setTheme } = useTheme();
  return (
    <StyledDiv color={theme.textColor}>
        <label htmlFor="themes">Choose a theme:</label>
        <StyledSelect onChange={(e) => {
          const themeChoice = e.target.value.toLowerCase();
          setTheme(themes[themeChoice]);
          }
        } name="themes" id="themes" value={theme.name}>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
            <option value="Cyberpunk">Cyberpunk</option>
        </StyledSelect>
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

const StyledSelect = styled.select`
    font-size: 16px
`;