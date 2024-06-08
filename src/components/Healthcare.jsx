import { Link } from "react-router-dom"
import Slider_3 from "./Slider_3"
import "../App.css"
const Healthcare = () => {
    const products = [
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
            title:"Top Products",
            offer:"",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png",
            title:"Elderly Care",
            offer:"upto 45% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/34e0883c7dbb3342a5f332276abb9432.jpg",
            title:"Personal Care",
            offer:"upto 80% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png",
            title:"Healthcare Devices",
            offer:"upto 65% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7af974da68693a0996f5b1c3e8ceaeaf.png",
            title:"Health Food and Drinks",
            offer:"upto 57% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png",
            title:"Skin Care",
            offer:"upto 50% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0de65bec9fc2342b978b739fa78a6095.png",
            title:"Mother and Baby Care",
            offer:"upto 50% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png",
            title:"Accessories & Wearables",
            offer:"upto 35% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/2c67003d8d2f3d0b83c70ec3528b65cb.png",
            title:"Fitness Supplements",
            offer:"upto 80% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b61f2824dbaf306da550d80d94fbeaf4.png",
            title:"Ayurvedic Care",
            offer:"upto 70% off",

        },{
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af7a9b53ad1239659615c6895b0972d7.png",
            title:"Sexual Wellness",
            offer:"upto 53% off",

        },
        {
            img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png",
            title:"Diabetic Care",
            offer:"upto 65% off",

        },

    ]

    return (
       <>
       <div style={{textAlign: "start"}}>
            <Link to="/">Home</Link> <i class='bx bx-chevron-right'></i>Healthcare
        </div>
        <br />
        <br />
        <Slider_3 />
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px", padding:"10px"}}>
            {products.map((item, index) => {
                return (
                    <div key={index} className="healthcare">
                        <img style={{width:"100px", height:"100px"}} src={item.img} />
                        <h1 style={{padding:"10px 0px"}}>{item.title}</h1>
                        <p  style={{padding:"10px 0px"}}>{item.offer}</p>
                    </div>
                )
            })}

        </div>
       </>
    )
}

export default Healthcare