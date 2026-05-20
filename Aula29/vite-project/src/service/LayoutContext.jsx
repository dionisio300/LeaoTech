import React from 'react'
import { createContext, useState } from "react";

export const LayoutContext = createContext()

const LayoutProvider = ({children}) => {

    let [mostrarHeader, setMostrarHeader] = useState(true)

  return (
    <LayoutContext.Provider
    value={{
        mostrarHeader,
        setMostrarHeader
    }}
    >
        {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider