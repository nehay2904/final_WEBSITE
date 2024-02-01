import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link                                    
  } from 'react-router-dom';

function Link_two() {
  return (
    <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
      <Link style={{marginTop:7}} to='team'>TEAM</Link> 
      <Link style={{marginTop:7}}  to='merchandise'>MERCHANDISE</Link>
    </div>
  )
}

export default Link_two