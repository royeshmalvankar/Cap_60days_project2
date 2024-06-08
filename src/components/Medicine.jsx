import { Container, Flex, VStack, Spacer, Select } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Medicine = () => {

    return (
        <>
        <div style={{textAlign: "start"}}>
            <Link to="/">Home</Link> <i class='bx bx-chevron-right'></i> Order Medicines Online
        </div>
        <br />
        <br />
        <h1 style={{textAlign: "start", fontSize: "30px",marginLeft: "35px"}}>Order Medicines Online</h1>
        <Container maxW="10xl" >
            <Flex gap="20px">
            <Container border={"1px"} borderColor="none" padding={"10px"} borderRadius={"10px"} backgroundColor={"#10847E"} h={"170px"}>
                <Flex gap="20px" margin={"10px"}>
                    <p><i class='bx bxs-offer'></i>Flat 15% Off</p>
                    <p><i class='bx bx-check-shield' ></i>1 Lakh+ Products</p>
                    <p><i class='bx bx-sync' ></i>Easy Returns</p>
                </Flex>
                <h1 style={{textAlign: "start",fontSize: "20px",marginLeft: "10px"}}>Search for Medicines / Healthcare Products</h1>
                <Flex margin={"10px"} >
                <Select width={"190px"} backgroundColor={"white"}>
                    <option>Select Pincode</option>
                    <option>400001</option>
                    <option>400002</option>
                    <option>400003</option>
                </Select>
                <input style={{width: "400px"}} type="text" placeholder=" Search for Medicines / Healthcare Products" />
                </Flex>
            </Container>
            <Container >
                <VStack>
                <Container border={"1px"} borderColor="black" padding={"10px"} borderRadius={"10px"}>
                <h1><i class='bx bxs-food-menu' ></i>Order Via Prescription</h1>
                </Container>
                <Spacer/>
                <Container  border={"1px"} borderColor="black" padding={"10px"} borderRadius={"10px"}>
                <h1><i class='bx bx-notification-off'></i>Dont have a Prescription?</h1>
                </Container>
                </VStack>

            </Container>
            </Flex>
        </Container>
        </>
    )
}

export default Medicine