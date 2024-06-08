import React from 'react'
import '../slider_4.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { ButtonGroup, Button } from '@chakra-ui/react';

const Slider_4 = () => {
    const images = [
        "https://cms-contents.pharmeasy.in/banner/1f63bbb62e0-114.jpg",
        "https://cms-contents.pharmeasy.in/banner/7afb19f355e-8def.jpg",
        "https://cms-contents.pharmeasy.in/banner/98d73c5985b-13.jpg",
        "https://cms-contents.pharmeasy.in/banner/8f383b7718e-ffhgffg.jpg",
        "https://cms-contents.pharmeasy.in/banner/3ac903c6640-48.jpg"
    ];

    return (
    <>
        <Slide>
            {images.map((each, index) => (
                <div className="each-slide-effect" key={index}>
                    <div style={{display: "flex",justifyContent: "center",paddingBottom: "30px",paddingTop: "30px",gap: "10px"}}>
                        <img src={each} />
                    </div>
                </div>
            ))}
        </Slide>
        <br />
        <br />
        <ButtonGroup size="lg"  variant="outline" spacing={10} gap={100}  >
            <Button  borderRadius={"25px"} onClick={() => {}}><i class='bx bxs-flask' ></i>All test</Button>
            <Button  borderRadius={"25px"} onClick={() => {}}><i class='bx bx-heart' ></i>Health Package</Button>
            <Button  borderRadius={"25px"} onClick={() => {}}><i class='bx bxs-file-blank' ></i>Upload Prescription</Button>
            <Button  borderRadius={"25px"} onClick={() => {}}><i class='bx bx-phone-call' ></i>Book On Call</Button>
        </ButtonGroup>
    </>

    )
}

export default Slider_4