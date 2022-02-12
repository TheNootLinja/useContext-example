import React from 'react'
import styled from 'styled-components'
import useTheme, { themes } from "../ThemeContext"


const ThemeTitle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <StyledHeader color={theme.textColor}>{theme.name}</StyledHeader>
  )
}

export default ThemeTitle

const StyledHeader = styled.h1`
  color: ${(props) => props.color};
  margin: 0 auto 50px auto;
  width: fit-content;
`;