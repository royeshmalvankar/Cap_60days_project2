import React,{useState} from 'react'

const Slider_2 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
const images = [
  {
    url: 'https://cdn01.pharmeasy.in/dam/banner/banner/08db22b7936-MEDPE27.jpg',
    
  },
  {
    url: 'https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg',
    
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/480aa5499c8-flashhp.jpg",
    
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/08db22b7936-MEDPE27.jpg",
   
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg",

  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/08db22b7936-MEDPE27.jpg",
    
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg",
   
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/08db22b7936-MEDPE27.jpg",
   
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg",

  },
  {
   url:'https://cdn01.pharmeasy.in/dam/banner/banner/08db22b7936-MEDPE27.jpg',
  },
  {
    url:"https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg"
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
            {[currentIndex, (currentIndex + 1) % images.length, (currentIndex + 2) % images.length ].map(index => (
    <div key={index} >
      <img src={images[index].url} alt={images[index].title}  style={{height:'190px' , width:'400px'}}/>
      <p>{images[index].title}</p>
    </div>
  ))}
</div>

<button id="next" onClick={next} style={{height: "50px",textAlign: "center"}}  disabled={currentIndex === images.length - 1}><i className='bx bxs-right-arrow-circle bx-fade-right bx-md' ></i></button>
</div>
    </div>
  )
}

export default Slider_2