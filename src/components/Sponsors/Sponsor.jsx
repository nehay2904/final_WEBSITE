import React,{useEffect,useState} from 'react'
import './Sponsor.css'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import SponsCard from '../../materialUI/Spons.card'

const Sponsor = () => {
  
  const [spons_url, setspons_url] = useState('')

  const [sponsData, setsponsData] = useState([{
        spons_url
  }])

  const create_posts = (event) => {

    event.preventDefault()


    axios.post('https://eclectika2k24-server.onrender.com/spons_data', {  
    
       spons_url
    }).then((response) => {

      setsponsData([...sponsData, {
        
        spons_url
      }])
    }
    )
  
  }

  useEffect(() => {
    axios.get('https://eclectika2k24-server.onrender.com/get_spons').then((response) => {
      setsponsData(response.data)
    })

  }, [3000])
  return (
    <div id='sponsor' className='container_spons'>
        <Fade bottom><h1 className="spons_title">Our Sponsors</h1></Fade>
        <div className='Team'>
        <div className="spons_wrapper">
            {sponsData.map((spons,index) => (
               <Fade bottom><div className="spons_col"> <SponsCard img={spons.spons_url} /></div></Fade>
            ))}
        </div>
    </div>
   
    
</div>
  )
}

export default Sponsor