import React from 'react';
import styled from 'styled-components';
import useTheme, { themes } from "../ThemeContext"

const Container = ({children}) => {
  const { theme, setTheme } = useTheme();
  return (
    <StyledDiv bgColor={theme.backgroundColor}>
        {children}
    </StyledDiv>
  )
}

export default Container

const StyledDiv = styled.div`
    background: ${(props) => props.bgColor};
    height: 100vh;
    width: 100vw;
    padding-top: 42vh;
    box-sizing: border-box;
`;