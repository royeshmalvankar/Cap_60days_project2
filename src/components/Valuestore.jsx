import { Container, Select, SimpleGrid } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

const Valuestore = () => {

    const [data, setData] = useState([])

    const [filter, setFilter] = useState("")

    useEffect(() => {
        getValue()
    }, [filter])

    const getValue = async() => {
        console.log(filter);
        let param = {
            category:`category/${filter}`,
        }
        let resp= await axios.get("https://fakestoreapi.com/products",{params:param})
        setData(resp.data)
        console.log(resp);
    }

    const Showdata = (item) => {
        return (
            <div style={{padding:"10px",border:"1px solid black",textAlign:"center"}}>
                <img style={{width:"200px",height:"200px",margin:"auto"}} src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>Price:${item.price}</p>
                {/* <p>{item.description}</p> */}
            </div>
                           

        )
    }


    return (
        <>
        {/* <Container maxW="10xl" padding={"10px"} margin={"auto"}>
        <Select width={"200px"} backgroundColor={"white"} _placeholder={{color:"gray",fontSize:"15px"} } value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="">Select Categories</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option> 
        </Select>
        </Container> */}
        <br />
            <Container maxW="10xl" padding={"10px"}>
                <SimpleGrid columns={3} spacing={10}>
                {data.map((item)=>{
                    return(
                        <Showdata {...item} key={item.id}/>
                    )
                })}
                 </SimpleGrid>
            </Container>
            </>
    )
}

export default Valuestore