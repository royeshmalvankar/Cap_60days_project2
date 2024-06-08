import { Button, Container, Flex } from "@chakra-ui/react"
import '../Farma.css'
import Slider_1 from "./Slider_1"
import Slider_2 from "./Slider_2"

const Home = () => {

    return (
        <Container  maxW="container" marginBottom="20px">
        <br />
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <h2 className='h12'>What are you looking for?</h2>
        <h2 className="h13">Order with prescription.<span><Button variant="ghost">Upload Now <i className='bx bx-chevron-right'></i></Button></span></h2>
        </div>
        <br />
        <input type="text" className="searchbox " id=""  placeholder='Search products'/><span><button className='button2'>Search</button></span>
        <br />
        <br />
        <br />

        <div className='data1'>
            <a href="https://pharmeasy.in/online-medicine-order?src=homecard">
           <div  className="info">
                <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" alt="" />
                <hr className='hr2' />
                <h4 >Medicine</h4>
                <h5>UPTO 27% OFF</h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/diagnostics?src=homecard">
           <div className="info">
                <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="" />
                <hr className='hr2' />
                <h4>Lat Tests</h4>
                <h5>UPTO 70% OFF</h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/health-care?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Healthcare</h4>
                <h5>UPTO 60% OFF</h5>
           </div>
           </a>
            <a href="https://pharmeasy.in/blog/">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Health Blogs</h4>
                <h5></h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/plus?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>PLUS</h4>
                <h5>SAVE 5% EXTRA</h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/offers?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Offers</h4>
                <h5></h5>
           </div>
           </a>
           <a href="https://pharmeasy.in/health-care/9066?src=homecard">
           <div className="info">
           <img src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0" alt="" />
           <hr className='hr2' />
                <h4>Value Store</h4>
                <h5>UPTO 50% OFF</h5>
           </div>
           </a>
        </div>

        
        <br />
        <br />
        <Slider_2/>

        <br />
        <br />
        <div className="orderbox">
            <div className="orderDiv1">
                <div className='orderinfo'>
                    <img src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0" alt="" />
                    <h4>Order with Prescription</h4>
                </div>
                <p>Upload prescription and we will deliver your medicines</p>
                <button>Upload</button>
              
            </div>
           
            <div className="orderDiv2">
                <p>How does this work?</p>
                <div className='orderDivbuttons1'>
                    <div className='boxes'>1 </div>
                    <p className='Para'>Upload a photo of your prescription</p>
                </div>
                <div className='orderDivbuttons1'>
                    <div className='boxes'>2 </div>
                    <p className='Para'>Add delivery address and place the order</p>
                </div>
            </div>

            <div className="orderDiv3">
                <div className='orderDivbuttons1'>
                    <div className='boxes'>3</div>
                    <p className='Para'>We will call you to confirm the medicines</p>
                </div>
                <div className='orderDivbuttons1'>
                    <div className='boxes'>4 </div>
                    <p className='Para'>Now, sit back! your medicines will get delivered at your doorstep</p>
                </div>
            </div>
            
        </div>
        <br />
        <Slider_1/>
        </Container>
    )
}

export default Home