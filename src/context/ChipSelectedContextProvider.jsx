import React, { useState } from 'react'
import ChipSelectedContext from '../context/ChipSelectedContext'

export const ChipSelectedContextProvider = ({ children }) => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <ChipSelectedContext.Provider value={{ isSelected, setIsSelected }}>
            {children}
        </ChipSelectedContext.Provider>
    )
}
