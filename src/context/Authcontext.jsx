import { createContext, useState } from "react"

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

    const [userauth, setUserauth] = useState({
        email: "",
        password: ""
    })
    const [authdetails, setAuthdetails] = useState({isloggedIn: false, token: null})

    const login = (token) => {
        setAuthdetails({isloggedIn: true, token: token})
    }

    const logout = () => {
        setAuthdetails({isloggedIn: false, token: null})
    }

    return(
        <AuthContext.Provider value={{authdetails, login, logout, userauth, setUserauth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider