import React,{useState} from 'react'

const Slider_3 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
const images = [
  {
    url: 'https://cms-contents.pharmeasy.in/banner/79376760bc6-beauty.jpg?dim=700x0&dpr=1&q=100',
    
  },
  {
    url: 'https://cms-contents.pharmeasy.in/banner/5e9dc201ab9-DevicesClearanceStore.jpg',
    
  },
  {
    url:"https://cms-contents.pharmeasy.in/banner/ed87375d79f-DiabeticCare-min.png",
    
  },
  {
    url:"https://cms-contents.pharmeasy.in/banner/ceb1d207cd8-top-personal-care.jpg",
   
  },
  {
    url:"https://cms-contents.pharmeasy.in/banner/721b231d717-covid-19.jpg",

  },
  {
    url:"https://cms-contents.pharmeasy.in/banner/e63047cb479-Noworneverrevised.jpg",
    
  },
  {
    url:"https://cms-contents.pharmeasy.in/banner/793d0a0197f-safety.jpg",
   
  },
  {
    url:"https://cms-contents.pharmeasy.in/banner/39fd6db45db-celevida.jpg",
   
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
      <img src={images[index].url} alt={images[index].title}  style={{height:'190px' , width:'100%'}}/>
      <p>{images[index].title}</p>
    </div>
  ))}
</div>

<button id="next" onClick={next} style={{height: "50px",textAlign: "center"}}  disabled={currentIndex === images.length - 1}><i className='bx bxs-right-arrow-circle bx-fade-right bx-md' ></i></button>
</div>
    </div>
  )
}

export default Slider_3