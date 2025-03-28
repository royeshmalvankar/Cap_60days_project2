import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"
import { Navigate } from "react-router-dom"
const PrivateRoute = ({children}) => {

    const {authdetails: {isloggedIn}} = useContext(AuthContext)

    if(!isloggedIn){
        return <Navigate to="/Login" />
            }
    return children;
}

export default PrivateRoute