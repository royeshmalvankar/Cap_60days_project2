import Slider_4 from "./Slider_4"
import { Link } from "react-router-dom"

const Labtest = () => {

    return (
        <>
         <div style={{textAlign: "start"}}>
            <Link to="/">Home</Link> <i class='bx bx-chevron-right'></i>Labtest
        </div>
        <br />
        <br />
        <Slider_4/>
        </>
    )
}

export default Labtest