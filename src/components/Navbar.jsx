import { Box, Container,Divider,Stack,Select,Button,Flex,Spacer } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {Link as ChakraLink} from "@chakra-ui/react"
import { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
import "../App.css"


const Navbar = () => {
    const {authdetails: {isloggedIn},logout, userauth} = useContext(AuthContext)
    return (
        <>
        <Container maxW="container" marginBottom="20px" >
            <Stack direction='column' spacing={7} >
                <Flex>
                        <Box  >
                            <Stack direction='row' spacing={7} >
                            <ChakraLink as={ReactRouterLink} to={"/"}> <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0" height="20px" width="170px" alt="" /></ChakraLink>
                                <Divider orientation='vertical' color="black" variant="solid" height="50px" border="1px" />
                                <Box spacing={7}>
                                    <h1><span className="mingcute--lightning-fill"></span>Express Delivery to</h1>
                                    <Select marginTop="5px" variant='unstyled'>
                                        <option>400001 Mumbai</option>
                                    </Select>
                                </Box>
                            </Stack>
                        </Box>
                    
                    <Spacer/>
                    <Box spacing={7}>
                    <Button onClick={() => window.open('https://pey.onelink.me/3krD/2bwqxjrj', '_blank')} alignContent={"flex-end"}><span><i className='bx bx-mobile-alt'></i></span>Download App</Button>
                       {isloggedIn ? <Button onClick={logout} alignContent={"flex-end"} variant="ghost">Hello!<i>{userauth.email}</i>&nbsp;&nbsp;<span><i className='bx bx-log-out'></i></span> Logout</Button> : <ChakraLink as={ReactRouterLink} to={"/Login"}><Button  alignContent={"flex-end"} variant="ghost"><span><i className='bx bx-user'></i></span>  Hello,Login</Button></ChakraLink>}
                        <Button onClick={() => window.open('https://pharmeasy.in/offers?src=header', '_blank')} alignContent={"flex-end"} variant="ghost"><span><i className='bx bxs-offer'></i></span> OFFER</Button>
                        <Button onClick={() => window.open('https://pharmeasy.in/cart', '_blank')} alignContent={"flex-end"} variant="ghost"><span><i className='bx bx-cart'></i></span>Cart</Button>
                    </Box>
                </Flex>
                
            </Stack>
        </Container>
        <Divider orientation='horizontal' color="grey" variant="solid" border="1px" width="200%" marginLeft="-400px" />
        <Stack direction='column' spacing={7} >
            <Flex justify="space-between"  marginTop="10px" gap="20px">
                    <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Medicine"}>Medicines</ChakraLink>
                    <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Healthcare"}>Healthcare</ChakraLink>
                    <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Labtest"}>Labtest</ChakraLink>
                    {/* <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Healthblog"}>Healthblog</ChakraLink> */}
                    {/* <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Plus"}>Plus</ChakraLink> */}
                    <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Offer"}>Offer</ChakraLink>
                    <ChakraLink className='link' style={{textDecoration: "none",}} as={ReactRouterLink} to={"/Valuestore"}>Valuestore</ChakraLink>
            </Flex>
        </Stack>
        <Divider orientation='horizontal' color="grey" variant="solid" border="1px" width="200%" marginLeft="-400px" />
        </>
    )
}

export default Navbar