import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade'
const About = () => {
  return (
    <div style={{display:'flex'}}>
      <div id='about_section' className='about'>
        <Fade bottom >
          <h1 className="about_title">
            About us
          </h1>
        </Fade>
        <Fade bottom>
          <p className="about_content">
            Eclectika, the cultural festival of NIT Raipur is widely renowned as the largest fest in central India. With a participation roster exceeding over a hundred colleges across the academic demographic of India. Eclectika is a glorious rendition of the ideals of innovation, conception and determination to achieve heights of success, and is a phenomenal platform to nurture and inspire talent, while uniting a wide and diverse pool of participation under a single banner. The Eclectika 2019 is poised to exceed all expectations in keeping with its strong heritage and excelling in it's core strength as a platform to drive talent and excellence. We look forward to having an enriching experience with all the participants. And yes, we promise the elegance, euphoria and entertainment !!
          </p>
        </Fade>

      </div>
     
    </div>
  )
}

export default About