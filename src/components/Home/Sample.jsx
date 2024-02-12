import React from 'react';
import Slider from 'infinite-react-carousel';
import Carousel_data from '../homes/Data'
const SimpleSlider = () => (


  <div>
   <div className='lg-screen'>
        
  <Slider autoplay={true} arrows={false} autoplaySpeed={2000} slidesToShow={4} duration={2000} >
    {Carousel_data.map((data, index) => (
      <div className="slide">
        <div className="slider">
          <div className="box">
            <img src={data.img} className='box_in' alt="" srcset="" />
           <div style={{position:"absolute", bottom:10, left:60,display:"flex", flexDirection:"column"}}>
           <h5 style={{ color:"whitesmoke"}}> {data.name}</h5>
            <h5 style={{ color:"whitesmoke"}}> {data.position}</h5>
           </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
   </div>
   <div className='sm-screen'>
        
        <Slider autoplay={true} arrows={false} autoplaySpeed={3000} slidesToShow={1.5} duration={3000} >
          {Carousel_data.map((data, index) => (
            <div className="slide">
              <div className="slider">
                <div className="box">
                  <img src={data.img} className='box_in' alt="" srcset="" />
                 <div style={{position:"absolute", bottom:10, left:60,display:"flex", flexDirection:"column"}}>
                 <h5 style={{ color:"whitesmoke"}}> {data.name}</h5>
                  <h5 style={{ color:"whitesmoke"}}> {data.position}</h5>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
         </div>

  </div>


);


export default SimpleSlider;