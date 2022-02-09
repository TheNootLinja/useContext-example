import React, { useState, createContext, useContext } from 'react';

// Defining out light and dark themes
export const themes = {
    light: {
        textColor: "#000000",
        backgroundColor: "#fff",
        btnbackground: "#b4d455"
    },
    dark: {
        textColor: "#ffffff",
        backgroundColor: "#000",
        btnbackground: "#222222"
    }
};

// Creating an initial state object
const initialState = {
    theme: themes.dark,
    setTheme: () => {}
};

// Creating the context and giving it the initialState object
const ThemeContext = createContext(initialState);

// Setting up the provider that we will wrap components in to give
// them access to the context we created.
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Setting up our custom useTheme hook
const useTheme = () => {
    // Setting our context variable
    const context = useContext(ThemeContext);
    // Setting up error handling if useTheme is being used outside provider
    if(context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    // Returning our context variable
    return context;
};

// Exporting our custom useTheme hook so it can be imported elsewhere
export default useTheme;