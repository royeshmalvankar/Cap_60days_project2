import { Box, HStack, VStack } from "@chakra-ui/react"

const Footer =()=>{
    return(
        <div>
            <HStack justifyContent="space-between" padding="20px" textAlign="center">
                <VStack marginBottom={"100px"}>
                    <Box>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Partner with PharmEasy</p>
                    <br />
                    <h3>Our Services</h3>
                    <p>Order Medicines</p>
                    <p>Healthcare Products</p>
                    <p>Lab Tests</p>
                    </Box>
                </VStack>
                <VStack>
                    <Box>
                    <h3>Featured Categories</h3>
                    <p>Top Products</p>
                    <p>Elderly Care</p>
                    <p>Personal Care</p>
                    <p>Healthcare Devices</p>
                    <p>Health Food and Drinks</p>
                    <p>Skin Care</p>
                    <p>Mother and Baby Care</p>
                    <p>Accessories & Wearables</p>
                    <p>Fitness Supplements</p>
                    <p>Ayurvedic Care</p>
                    <p>Sexual Wellness</p>
                    <p>Diabetic Care</p>
                    <p>Health Condition</p>
                    <p>Home Care</p>
                    </Box>
                </VStack>
                <VStack marginBottom={"100px"}>
                    <Box>
                    <h3>Need Help</h3>
                    <p>Browse All Medicines</p>
                    <p>Track Order</p>
                    <p>Shipping</p>
                    <p>Return & Cancellation</p>
                    <p>Payment</p>
                    <p>FAQ</p>
                    </Box>
                </VStack>
            </HStack>
        </div>
    )
}

export default Footer