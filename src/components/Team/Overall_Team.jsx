import React from 'react'
import './Team.css'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material';
import Apps from '../../card/Apps';
import video from '../../Images/bg-video.mp4'
const Overall_Team = () => {
  return (
    <div className='overall_team'>
       <div className='fixed_video'>
        <video  src={video} className='video_bg' autoPlay loop ></video>
      </div>
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
      <Fade bottom><h1 className="team_title">OUR TEAM</h1></Fade>
      <Apps />
    </div>
  )
}

export default Overall_Team