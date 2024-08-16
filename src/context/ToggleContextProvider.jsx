import React, { useState } from 'react'
import ToggleContext from './Togglecontext'

export const ToggleContextProvider = ({ children }) => {

    const [isToggle, setIsToggle] = useState(false);

    return (
        <ToggleContext.Provider value={{ isToggle, setIsToggle }} >
            {children}
        </ToggleContext.Provider>
    )
}
