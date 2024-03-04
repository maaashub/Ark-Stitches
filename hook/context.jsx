"use client"

import {createContext, useContext, useState} from 'react'

const context = createContext(null)

export const ModalContext = ({children}) => {
    const [modal, setModal] = useState(false)

  return (
    <context.Provider value={{modal, setModal}}>
        {children}
    </context.Provider>
  )
}

export const useModal = () => {
    return useContext(context);
  };