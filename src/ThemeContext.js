import React, { useState, createContext, useContext } from 'react';

// Defining theme objects and their properties
export const themes = {
    light: {
        name: "Light",
        message: "Turn off the lights!",
        textColor: "#000000",
        backgroundColor: "#fff",
        btnbackground: "#ccc"
    },
    dark: {
        name: "Dark",
        message: "Turn on the neon!",
        textColor: "#ffffff",
        backgroundColor: "#000",
        btnbackground: "#222222"
    },
    cyberpunk: {
        name: "Cyberpunk",
        message: "Turn on the lights!",
        textColor: "#fe75fe",
        backgroundColor: "#120458",
        btnbackground: "#7a04eb"
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