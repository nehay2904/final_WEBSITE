import React,{useEffect,useState} from 'react'
import './Sponsor.css'
import Fade from 'react-reveal/Fade'
import SponsCard from '../../materialUI/Spons.card'
import SponsData from '../../Data/Spons'
import iron from '../../Images/thor.png'
const Sponsor = () => {
  return (
    <div id='sponsor' className='container_spons'>
              {/* <Fade  right><div className='thor'><img src={iron} width={250} height={250} srcset="" /></div></Fade> */}
        <Fade bottom><h1 className="spons_title">Our Sponsors</h1></Fade>
        <div className='Team'>
        <div className="team_wrapper">
            {SponsData.map((spons,index) => (
               <Fade bottom><div className="spons_col"> <SponsCard img={spons.url} /></div></Fade>
            ))}
        </div>
    </div>
   
    
</div>
  )
}

export default Sponsor