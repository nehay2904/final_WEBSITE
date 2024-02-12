import React from 'react'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Ecectika_Gallery from './components/Main_Gallery/Gallery'
import Sponsor from './components/Sponsors/Sponsor'

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