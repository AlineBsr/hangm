import React, {createContext, useState} from "react";

const AppContext = createContext()

const AppProvider = (props) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider}