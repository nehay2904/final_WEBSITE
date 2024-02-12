import { useState } from "react";
import "./styles.css";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import TiltCard from './tilt';
import TeamData from '../Data/Team'
import { Fade } from "react-reveal";
export default function Apps() {
  const [exit, setExist] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);

  return (
    <div
      className={`app ${exit && "slideOutDown"}`}
      onAnimationEnd={() => {
        setDisplayNone(true);
      }}
      style={{
        display: displayNone ? "none" : "block"
      }}
    >
      <Card />
     
    </div>
  );
}

function Card() {
  return (
    
     <div className="con">
   
 
     {TeamData.map((member, index) =>(
       
           <TiltCard style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transformStyle: " preserve-3d",
            transform: "translateZ(10px)",
            padding: 20,
            
          }}>
           <div
          className="content"
          
        >
         <div className="member_img"><img src={member.img} alt="" srcset="" /></div>
         <h5 style={{marginBottom:7}}>{member.name}</h5>
         <span style={{fontSize:14}}>{member.domain}</span>
         <p style={{fontSize:14}}>{member.branch}</p>
         <div className="member_img"><button>Contact us</button></div>
        </div> 
        </TiltCard>
       
     ))}
  
     </div>
     
  );
}
