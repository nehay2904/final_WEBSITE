import React from 'react'
import './Events.css'
import eventone from '../../Images/eventone.jpeg'
import eventwo from '../../Images/eventtwo.jpeg'
import eventhree from '../../Images/eventthree.jpeg'
import eventfour from '../../Images/eventfour.jpeg'
import eventfive from '../../Images/eventfive.jpeg'
import eventsix from '../../Images/eventsix.jpeg'
import eventseven from '../../Images/eventseven.jpeg'


import { Fade } from 'react-reveal'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <div id='events' className='events'>
        <div className="maintilecon">
          <Fade bottom><h1 className="eventtitle">OUR EVENTS </h1></Fade>  
        </div>
        <div className="eventscon">
         <Fade bottom>   <h4 className='subtitleevents'>MEGA EVENTS</h4></Fade>
            <div className="eventimgs">
              
                <Fade bottom>
                <img className='imge' src={eventone} alt="" srcset="" />
                <img className='imge' src={eventwo} alt="" srcset="" />
                </Fade>
            </div>
            <div className="eventimgs">
                <Fade bottom>
                <img className='imge' src={eventfive} alt="" srcset="" />
                <img className='imge' src={eventfour} alt="" srcset="" />
                <img className='imge' src={eventhree} alt="" srcset="" />
                </Fade>
            </div>
            <div className="eventimgs">
               <Fade bottom>
               <img className='imge' src={eventsix} alt="" srcset="" />
               <img className='imge' src={eventseven} alt="" srcset="" />
                
               </Fade>
            </div>
           
        </div>
        <div className="events-footer">
          <h4 className='events-footer-line'>This year Eclectika brings you 7 Mega events and 35 mini events</h4>
          <Link to={'events'}><Button style={{backgroundColor:'rgb(112, 79, 1)'}} variant="contained" >Tap here to explore</Button></Link>
        </div>
    </div>
  )
}

export default Events