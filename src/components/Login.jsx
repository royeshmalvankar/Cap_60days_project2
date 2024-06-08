import { Button, Container, Input } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const {login, authdetails: {isloggedIn},userauth, setUserauth} = useContext(AuthContext)
    const navigate = useNavigate()
    const Getlogin = async() => {
        try {
            const resp = await axios.post("https://reqres.in/api/login", {
                email: userauth.email,
                password: userauth.password
            })
            login(resp.data.token);
            
        } catch (error) {
            console.log(error);
        }
        
    }
    if(isloggedIn)
        {
            navigate("/")
        }

    return (
        <>
        <Container maxW="10xl" >
            <h1>Login</h1>
            <Input placeholder='Enter Email' value={userauth.email}  onChange={(e)=>{setUserauth({...userauth, email: e.target.value})}}/>
            <Input placeholder='Enter Password' value={userauth.password} onChange={(e)=>{setUserauth({...userauth, password: e.target.value})}}/>
            <Button onClick={Getlogin}>Login</Button>
        </Container>
        </>
    )
}

export default Login