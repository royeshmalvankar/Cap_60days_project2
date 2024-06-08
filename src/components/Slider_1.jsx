import React,{useState} from 'react'

const Slider_1 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
const images = [
  {
    url: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0',
    
  },
  {
    url: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1a18d8deac-Vitamins.png?dim=256x0',
    
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/1e927857c26-Diabetes.png?dim=256x0",
    
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/e1c60c444bf-Fever.png?dim=256x0",
   
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0",

  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/71fb3c06e71-Thyroid.png?dim=256x0",
    
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/6b775dd8478-covid.png?dim=256x0",
   
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/bca113a1b80-Bone.png?dim=256x0",
   
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/520acd31898-heart.png?dim=256x0",

  },
  {
   url:'https://cms-contents.pharmeasy.in/homepage_top_categories_images/9696ef00b0a-lifestyle.png?dim=256x0',
  },
  {
    url:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=256x0"
  }
]

const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
        <div className="sec3" style={{display: "flex",justifyContent: "center",paddingBottom: "30px" }}>

        <button id="prev" onClick={prev} style={{height: "50px",textAlign: "center"}}  disabled={currentIndex === 0}><i className='bx bxs-left-arrow-circle bx-fade-left bx-md' ></i></button>

        <div id="carousel" style={{display:'flex', width:'90%', gap:'15px', justifyContent:'center'}}>
            {[currentIndex, (currentIndex + 1) % images.length, (currentIndex + 2) % images.length, (currentIndex + 3) % images.length, (currentIndex + 4) % images.length, (currentIndex + 5) % images.length ].map(index => (
    <div key={index} >
      <img src={images[index].url} alt={images[index].title}  style={{height:'190px' , width:'190px'}}/>
      <p>{images[index].title}</p>
    </div>
  ))}
</div>

<button id="next" onClick={next} style={{height: "50px",textAlign: "center"}}  disabled={currentIndex === images.length - 1}><i className='bx bxs-right-arrow-circle bx-fade-right bx-md' ></i></button>
</div>
    </div>
  )
}

export default Slider_1