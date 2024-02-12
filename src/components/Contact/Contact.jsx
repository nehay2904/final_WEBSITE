import React,{useState, useEffect} from 'react'
import './Contact.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Contact = () => {

  
  const [user_name, setuser_name] = useState('')
  const [user_email, setuser_email] = useState("")
  const [comment, setcomment] = useState("")
  const [memberData, setmemberData] = useState([{
    user_name,
    user_email,
    comment
  }])

  const create_comment = (event) => {

    event.preventDefault()


    axios.post('https://eclectika2k24-server.onrender.com/comment_data', {  
        user_name,
        user_email,
        comment
    }).then((response) => {

      setmemberData([...memberData, {
        user_name,
        user_email,
        comment
      }])
      
    })
    setuser_email("")
    setuser_name("")
    setcomment("")
  
  }


  return (
    <div id='contact' className="Main_contact">
      <Fade bottom> <h3 className='footer_title'>Contact Us</h3></Fade>
      <div className='note'><p>Step into our fest of wonders! with 7 mega and 23 mini events across 3 days annual fest by sanskriti. Have questions? Reach out and let the magic unfold</p></div>
      <div className="forms">
        <input className='contact_input' type="text" placeholder='Name' value={user_name} onChange={(e) =>{
          setuser_name(e.target.value)
        }}/>
        <input className='contact_input' type="text" placeholder='Email' value={user_email} onChange={(e) =>{
          setuser_email(e.target.value)
        }}/>
        <input className='contact_input' type="text" placeholder='Write your thoughts' value={comment} onChange={(e) =>{
          setcomment(e.target.value)
        }}/>
        <button onClick={create_comment}>Submit</button>
      </div>
     
        <div className=" centeringmapvideo">
				<div className="containerforvideo">
					<iframe width="140px" height="140px" src="https://www.youtube.com/embed/oLviql5a63E"
						title="YouTube video player" frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen></iframe>
				</div>
			</div>
      <div className="footer_menu">

        <li><a href='#home'>HOME</a></li>
        <li> <a href="#about_section">ABOUT</a></li>
        <li> <a href="#events">EVENTS</a></li>
        <li> <a href="#sponsor">SPONSORS</a> </li>
        <li> <a href="#gallery">GALLERY</a> </li>
        <li><Link to='team'>TEAM</Link> </li>
        <li> <a href="#contact">CONTACT</a></li>
      </div>
      <div className='icons_container'>
        {/* <div className="footer_icons">
          <a href="https://www.instagram.com/eclectika_nitrr/?hl=en" target='_blank'><i className="social_icon fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/eclectika-nit-raipur/?originalSubdomain=in" target='_blank'><i className="social_icon fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/eclectika.nitrr/" target='_blank'><i className="social_icon fab fa-facebook"></i></a>
          <a href="https://twitter.com/eclectika_nitrr?lang=en" target='_blank'><i className="social_icon fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UCQ551qZJdqKoJkpBzUVtmTA" target='_blank'><i className="social_icon fab fa-youtube"></i></a>
        </div> */}


      </div>
      {/* <Fade  right><div className='c_doctor'><img src={doctor} width={140} height={140} srcset="" /></div></Fade>
      <Fade  right><div className='c_iron'><img src={iron} width={140} height={140} srcset="" /></div></Fade>
      <Fade  right><div className='c_thor'><img src={thor} width={140} height={140} srcset="" /></div></Fade>
      <Fade  right><div className='c_spider'><img src={spider} width={150} height={150} srcset="" /></div></Fade>
      <Fade  right><div className='c_captain'><img src={captain} width={140} height={140} srcset="" /></div></Fade>
      <Fade  right><div className='c_thanos'><img src={thanos} width={160} height={160} srcset="" /></div></Fade>  */}
        
      <h3 className='end_line'>@Copyrights <span>Eclectika 2023</span>. All rights reserved.</h3>
    </div>
  )
}

export default Contact