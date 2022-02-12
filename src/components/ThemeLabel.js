import React from 'react';
import styled from 'styled-components';

import useTheme, { themes } from '../ThemeContext';

const ThemeLabel = () => {
  // Getting the theme state from out custom useTheme hook
  const { theme } = useTheme();
  return (
  <StyledPara color={theme.textColor}>
    {/* Setting the text dynamically based on which theme is applied */}
    The theme is currently the <StyledSpan>{theme.name}</StyledSpan> theme!
  </StyledPara>
  );
};

export default ThemeLabel;

// Creating a styled p element
const StyledPara = styled.p`
    color: ${(props) => props.color};
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    width: fit-content;
    margin: 30px auto 0 auto;
`;

const StyledSpan = styled.span`
    color: orange;
    font-size: 20px;
`;