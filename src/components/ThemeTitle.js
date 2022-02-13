import React from 'react'
import styled from 'styled-components'
import useTheme from "../ThemeContext"


const ThemeTitle = () => {
  const { theme } = useTheme();
  return (
    <StyledHeader color={theme.textColor}>{theme.name}</StyledHeader>
  )
}

export default ThemeTitle

// Defining a styled h1 component
const StyledHeader = styled.h1`
  color: ${(props) => props.color};
  margin: 0 auto 50px auto;
  width: fit-content;
`;