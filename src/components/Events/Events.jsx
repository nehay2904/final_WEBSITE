import React from 'react'
import './Events.css'
import main_events from '../../Data/Main_eve'

import { Fade } from 'react-reveal'
import { Button, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import MultiActionAreaCard from '../../materialUI/CardComponent'


const Events = () => {
  return (
    <div id='events' className='events'>
        <div className="maintilecon">
          <Fade bottom><h1 className="eventtitle">OUR EVENTS </h1></Fade>  
        </div>
      
         <Fade bottom>   <h4 className='subtitleevents'>MEGA EVENTS</h4></Fade>
         {/* <img src={image1} className='image1' alt="" srcset="" /> */}
         <div className="eventscon">
               {main_events.map((event,index) =>(
                <div className="eventimgs"> 
                <Fade bottom>
                <div className='img_con'>
                  <img className='event_img' src={event.url} alt="" srcset="" />
                  {/* <h4 style={{paddingTop:5, fontSize:16}}>{event.name}</h4> */}
                    <p className='event_desc' >{event.desc}</p>
                </div>
                </Fade>
                </div>
               ))}
      
        </div>
        <div className="events-footer">
          <h4 className='events-footer-line'>This year Eclectika brings you 7 Mega events and 23 mini events</h4>
          <Link to={'events'}><Button  style={{backgroundColor:"orange"}}  variant="contained" >Tap here to explore</Button></Link>
        </div>
     
    </div>
  )
}

export default Events