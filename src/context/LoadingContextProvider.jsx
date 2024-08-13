
import React, { useState } from 'react'
import LoadingContext from './LoadingContext'

export const LoadingContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
