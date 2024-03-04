import {createContext, useContext, useState} from 'react'

const context = createContext(null)

const modalContext = ({children}) => {
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