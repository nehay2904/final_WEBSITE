import React, {useState,useEffect} from 'react'
import './Merchandise.css'

import axios from 'axios'



import { Link } from 'react-router-dom';

import { Button, Paper } from '@mui/material'; 
import merch from '../../Images/merch.jpg'

const Merchandise = () => {

  
  const [merch_name, setmerch_name] = useState('')
  const [merch_email, setmerch_email] = useState('')
  const [mobile_no, setmobile_no] = useState('')
  const [merch_type, setmerch_type] = useState('')
 
  const [memberData, setmemberData] = useState([{
     merch_email,
     merch_name,
     merch_type,
     mobile_no
  }])

  const create_merch = (event) => {

    event.preventDefault()


    axios.post('https://eclectika2k24-server.onrender.com/merchendise_data', {  
      merch_email,
      merch_name,
      merch_type,
      mobile_no
    }).then((response) => {

      setmemberData([...memberData, {
        merch_email,
        merch_name,
        merch_type,
        mobile_no
      }])
    }
  
    )
    setmerch_email("")
    setmerch_name("")
    setmerch_type("")
    setmobile_no("")
  }

  
  return (
    <div className="main_merchan">
      <div className='close_icon_team'>
        <Link to={'/'}><Button color='error' variant="contained">Back to home</Button></Link>
      </div>
        {/* {memberData.map((url, index) =>(
          <div className='left_class'>
        <img className='merchanImg' src={url.merch_url} alt="" srcset="" /> 
          </div>
        ))}  */}
        <img src={merch} width={300} height={300} alt="" srcset="" />
        <div className="register_class">
          <h4 className='merchantext'>Register here & grab the merchandise and be the part of the annual fest by sanskriti </h4>
          <div className="forms">
        <input className='contact_input' type="text" placeholder='Name' value={merch_name} onChange={(e) =>{
          setmerch_name(e.target.value)
        }}/>
        <input className='contact_input' type="text" placeholder='Email' value={merch_email} onChange={(e) =>{
          setmerch_email(e.target.value)
        }}/>
        <input className='contact_input' type="number" placeholder='mobile number (Whatsapp)' value={mobile_no} onChange={(e) =>{
          setmobile_no(e.target.value)
        }}/>
        <input className='contact_input' type="text" placeholder='Size (XS, S, M ,L , XL)' value={merch_type} onChange={(e) =>{
          setmerch_type(e.target.value)
        }}/>
        <button onClick={create_merch}>Submit</button>
      </div>
        </div>
    </div>
  )
}

export default Merchandise