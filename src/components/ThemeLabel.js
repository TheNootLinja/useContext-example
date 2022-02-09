import React from 'react';
import styled from 'styled-components';

import useTheme, { themes } from '../ThemeContext';

const ThemeLabel = () => {
  // Getting the theme state from out custom useTheme hook
  const { theme } = useTheme();
  return (
  <StyledPara color={theme.textColor}>
    {/* Setting the text dynamically based on which theme is applied */}
    The theme is currently the {theme === themes.light ? "light" : theme === themes.dark ? "dark" : ''} theme!
  </StyledPara>
  );
};

export default ThemeLabel;

// Creating a styled p element
const StyledPara = styled.p`
    color: ${(props) => props.color};
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`