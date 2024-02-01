
import React, {useState,useEffect} from 'react'
import './Events.css'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import MultiActionAreaCard from '../../materialUI/CardComponent'

// import TeamData from "../../Data/Team"
import { EventHandler } from 'react'
import MiniEvents from '../../Data/Events'
import eventone from '../../Images/eventone.jpeg'
import eventwo from '../../Images/eventtwo.jpeg'
import eventhree from '../../Images/eventthree.jpeg'
import eventfour from '../../Images/eventfour.jpeg'
import eventfive from '../../Images/eventfive.jpeg'
import eventsix from '../../Images/eventsix.jpeg'
import eventseven from '../../Images/eventseven.jpeg'
import Mini_Event from '../../materialUI/Mini_event'


import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material';

const MainEvents = () => {

  const [event_desc, setevent_desc] = useState('')
  const [event_name, setevent_name] = useState('')
 
  const [eventData, seteventData] = useState([{
   
     event_name,
      event_desc
    
  }])

  const create_posts = (event) => {

    event.preventDefault()


    axios.post('https://eclectika2k24-server.onrender.com/events_data', {  
      event_name,
      event_desc
      
    }).then((reevente) => {

      seteventData([...eventData, {
        event_name,
        event_desc
    
      }])
    }
    )
  
  }

  useEffect(() => {
    axios.get('https://eclectika2k24-server.onrender.com/get_events').then((response) => {
      seteventData(response.data)
    })

  }, [3000])
  return (
    <div className='mainevents'>
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
      <div className="maintilecon">
        <Fade bottom><h1 style={{color:'black'}} className="eventtitle">OUR EVENTS </h1></Fade>
      </div>
      <div className="eventscon">
        <Fade bottom>   <h4 className='subtitleevents'>MEGA EVENTS</h4></Fade>
        <div className="eventimgs">

          <Fade bottom>
            <a href="https://www.instagram.com/p/CoMbrMeqjol/?hl=en" target='blank'><img className='mainimage' src={eventone} alt="" srcset="" /></a>
            <a href="https://www.instagram.com/p/CoJx01jvSoH/?hl=en" target='blank'><img className='mainimage' src={eventwo} alt="" srcset="" /></a>
          </Fade>
        </div>
        <div className="eventimgs">
          <Fade bottom>
          <a href="https://www.instagram.com/p/CoKUCziK-qj/?hl=en" target='blank'><img className='mainimage' src={eventfive} alt="" srcset="" /></a>
          <a href="https://www.instagram.com/p/CoJp82DKu5u/?hl=en" target='blank'><img className='mainimage' src={eventfour} alt="" srcset="" /></a>
          <a href="https://www.instagram.com/p/CoMP8wRqn5J/?hl=en" target='blank'> <img className='mainimage' src={eventhree} alt="" srcset="" /></a>
          </Fade>
        </div>
        <div className="eventimgs">
          <Fade bottom>
          <a href="https://www.instagram.com/p/CoH5IqGPkvO/?hl=en" target='blank'> <img className='mainimage' src={eventsix} alt="" srcset="" /></a>
          <a href="https://www.instagram.com/p/CoL1gZVPZWm/?hl=en" target='blank'><img className='mainimage' src={eventseven} alt="" srcset="" /></a>

          </Fade>
        </div>

      </div>

      <div className="eventscon">
        <Fade bottom>   <h4 className='subtitleevents'>Mini EVENTS</h4></Fade>
        <div className="mini_event_wrapper">
            {eventData.map((minievents,index) => (
               <Fade bottom><div className="team_col"><Mini_Event e_desc={minievents.event_name} desc={minievents.event_desc} /></div></Fade>
            ))}
        </div>
      </div>

    </div>
  )
}

export default MainEvents