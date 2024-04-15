import { createContext,useContext,useState } from "react";

const DarkModeContext = createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)


    }

    return (
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

const useDarkMode = () => {
    const coxtext = useContext(DarkModeContext)
    if(!coxtext) {
        throw new Error('useDarkmode deve estar dentro DarkModeProvider')
    }

    return coxtext
}

export {DarkModeProvider,useDarkMode}