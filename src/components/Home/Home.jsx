import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { motion } from 'framer-motion'

import Try from './date'
import Main_navbar from '../Navbar/Main_navbar'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import X from '@mui/icons-material/X'
import { Link } from 'react-router-dom'
import Exp from '../Exp'
import video from '../../Images/bg-video.mp4'
import FacebookIcon from '@mui/icons-material/Facebook'
const Home = () => {

  return (
    <>
     
      <div className='layout'>
      <div className='fixed_video'>
        <video  src={video} className='video_bg' autoPlay loop ></video>
      </div>
      <div style={{position:"absolute", top:"0%", right: 0}}><Navbar  /></div>
      
        <div className="bg">
          
      
        <div style={{position:"absolute", top:"0%", left:0}}><Main_navbar  /></div>
       
        <h3 className='title'><Exp /></h3>
      <motion.div initial={{border:"0px solid white"}} animate={{border:"2px solid white"}} transition={{ delay:2}} className="titlecon">
          
          <motion.h3 initial={{opacity:0, y:120, scale:2.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1, delay:0.3}} className='Home_title'>E</motion.h3>
          <motion.h3 initial={{opacity:0, y:-100, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1 , delay:0.1}} className='Home_title'>C</motion.h3>
          <motion.h3 initial={{opacity:0, y:-80, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1, delay:0.1}} className='Home_title'>L</motion.h3>
          <motion.h3 initial={{opacity:0, y:-60, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1}} className='Home_title'>E</motion.h3>
          <motion.h3 initial={{opacity:0, y:60, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1}} className='Home_title'>C</motion.h3>
          <motion.h3 initial={{opacity:0, y:80, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1 , delay:0.1}} className='Home_title'>T</motion.h3>
          <motion.h3 initial={{opacity:0, y:100, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1, delay:0.1}} className='Home_title'>I</motion.h3>
          <motion.h3 initial={{opacity:0, y:120, scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1, delay:0.3}} className='Home_title'>K</motion.h3>
          <motion.h3 initial={{opacity:0, y:140, color:'bisque', scale:0.1}} animate={{opacity:1, y:0, scale:1}} transition={{duration:1, delay:0.4}} className='Home_title'>A</motion.h3>
        
       </motion.div>
       <div className="tryn" >
       <Try />
       </div>
       {/* <video src={video} className='vid' autoPlay loop></video> */}
       <motion.div initial={{height:"0%"}} animate={{height:"30%"}} transition={{duration:1, delay:0.3}} className="icons" >
       <Link to="https://www.linkedin.com/company/eclectika-nitrr/"><LinkedInIcon  sx={{ fontSize: 40,marginBottom:1}}/></Link>
       <Link to="https://www.instagram.com/eclectika_nitrr/"><InstagramIcon sx={{ fontSize: 40,marginBottom:1}}/></Link>
       <Link to="https://x.com/eclectika_nitrr?s=20"><X sx={{ fontSize: 40,marginBottom:1}}/></Link>
       <Link to="https://www.facebook.com/eclectika.nitrr"><FacebookIcon sx={{ fontSize: 40,marginBottom:1}}/></Link>
       </motion.div>
    
       
        </div>
          </div>
      

    </>
  )
}

export default Home