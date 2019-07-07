import React from 'react'
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide"


const CarouselUI =({children}) => <div className='carousel' style={{
    position:'relative',
    maxWidth: '860px',
    height: '270px',
    margin: '150px auto',
    overflow: 'hidden'


}}>{children}</div>

const Slider = makeCarousel(CarouselUI);
const ItemList = ["parkety", "vinyl", "prkna", "koberce", "plovouci poldahy" ]

const Carousel = ()=>(


<Slider defaultWait={5000}>
  {
      ItemList.map((item,id)=>{
          return(
              <Slide right key={id}>
                  <div  className={`slide ${item}`}>
                     <h3>{item}</h3>
                  </div>
              </Slide>
          )
      })
  }
</Slider>
)

export default Carousel
