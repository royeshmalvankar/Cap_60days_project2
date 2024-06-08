import { Route, Routes } from "react-router-dom"
import { Container } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Medicine from "../components/Medicine"
import Labtest from "../components/Labtest"
import Valuestore from "../components/Valuestore"
import Healthcare from "../components/Healthcare"
import Plus from "../components/Plus"
import Offer from "../components/Offer"
import Healthblog from "../components/Healthblog"
import Footer from "../components/Footer"
import Login from "../components/Login"
import PrivateRoute from "../privateroute/Privateroute"

const AllRoute = () => {

    return (
        <Container maxW="10xl" >
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Medicine" element={<PrivateRoute><Medicine/></PrivateRoute>}/>
                    <Route path="/Labtest" element={<PrivateRoute><Labtest/></PrivateRoute>}/>
                    <Route path="/Valuestore" element={<PrivateRoute><Valuestore/></PrivateRoute>}/>
                    <Route path="/Healthcare" element={<PrivateRoute><Healthcare/></PrivateRoute>}/>
                    <Route path="/Plus" element={<PrivateRoute><Plus/></PrivateRoute>}/>
                    <Route path="/Offer" element={<PrivateRoute><Offer/></PrivateRoute>}/>
                    <Route path="/Healthblog" element={<PrivateRoute><Healthblog/></PrivateRoute>}/>
                    <Route path="/Login" element={<Login/>}/>
                </Routes>
            </div>
            <Footer/>
        </Container>
    )
}

export default AllRoute