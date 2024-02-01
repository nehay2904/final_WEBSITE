import React from 'react'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Ecectika_Gallery from './components/Main_Gallery/Gallery'
import Sponsor from './components/Sponsors/Sponsor'
import Overall_Team from './components/Team/Overall_Team'
import Navbar from './components/Navbar/Navbar'
import { Flip } from 'react-reveal/Flip'

import { Fade } from 'react-reveal/Fade'
import { motion } from 'framer-motion'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import About from './components/About/About'
import Events from './components/Events/Events'
import Theme from './components/Theme/Theme'

const OverAll_Design = () => {
  return (
    <>
     <Home />
     <About />
     <Theme />
     <Events />
     <Ecectika_Gallery />
     <Sponsor />
     <Contact />
     {/* <Sponsor /> */}
    </>

  )
}

export default OverAll_Design