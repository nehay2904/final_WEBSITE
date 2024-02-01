import React from 'react'
import Team from './Team'
import './Team.css'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material';
const Overall_Team = () => {
  return (
    <div className='overall_team'>
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
      <Fade bottom><h1 className="team_title">OUR TEAM</h1></Fade>
      <Team />
    </div>
  )
}

export default Overall_Team