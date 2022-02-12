import React from 'react';
import styled from 'styled-components';

import useTheme, { themes } from "../ThemeContext"

const Button = () => {
  // Using out custom useTheme hook to bring in our theme state and 
  // setTheme function
  const { theme, setTheme } = useTheme();
  return (
      <StyledButton 
        // Passing theme.foreground as color prop to use in styles
        color={theme.textColor} 
        // Passing theme.background as background prop to use in styles
        background={theme.btnbackground}
        // checking what theme is equal to and then switch to other them
        // based on current value
        onClick={() => setTheme(theme === themes.light ? themes.dark : theme === themes.dark ? themes.cyberpunk : themes.light)}
        >
          {theme.message}
        </StyledButton>
  )
};

export default Button;

// Creating styled button element
const StyledButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 12px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  display: grid;
  justify-self: center;
  cursor: pointer;
  margin: auto;
  /* margin-top: 200px; */
`;

// const StyledDiv = styled.div`
//   width: 100%;
//   margin-top: 43vh;
// `;