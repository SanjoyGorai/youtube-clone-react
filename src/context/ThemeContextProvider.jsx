import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext.js'

const ThemeContextProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider