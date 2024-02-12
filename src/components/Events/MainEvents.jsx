
import React, {useState,useEffect} from 'react'
import './Events.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import video from '../../Images/bg-video.mp4'
import { Button, Paper } from '@mui/material';
import main_events from '../../Data/Main_eve'
import MiniEvents from '../../Data/Events'
import Mini_Event from '../../materialUI/Mini_event';
const MainEvents = () => {


  return (
    <div className='mainevents'>
      <div className='fixed_video'>
        <video  src={video} className='video_bg' autoPlay loop ></video>
      </div>
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
      <div  className='events'>
        <div className="maintilecon">
          <Fade bottom><h1 className="eventtitle">OUR EVENTS </h1></Fade>  
        </div>
      
         <Fade bottom>   <h4 className='subtitleevents'>MEGA EVENTS</h4></Fade>
         <div className="eventscon">
               {main_events.map((event,index) =>(
                <div className="eventimgs"> 
                <Fade bottom>
                <div className='img_con'>
                  <img className='event_img' src={event.url} alt="" srcset="" />
                    <p style={{padding:5, fontSize:14, color:"whitesmoke"}}>{event.desc}</p>
                </div>
                </Fade>
                </div>
               ))}
      
        </div>
    
        <Fade bottom>   <h4 className='subtitleevents'>Mini EVENTS</h4></Fade>
        <div className="mini_event_wrapper">
            {MiniEvents.map((minievents,index) => (
               <Fade bottom><div className="event_col"><Mini_Event e_desc={minievents.e_desc} desc={minievents.desc} /></div></Fade>
            ))}
        </div>
      </div>



      </div>
  )
}

export default MainEvents