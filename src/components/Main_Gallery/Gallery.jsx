
import React, { forwardRef } from 'react'
import './Main_Gallery.css'
import one from '../../Images/galleryone.jpg'
import three from '../../Images/gallerythree.jpg'
import five from '../../Images/galleryfive.jpg'
import six from '../../Images/gallerysix.jpg'
import Yohani from '../../Images/yuhani.jpg'
import darshan from '../../Images/darshan.jpg'
import { Fade } from 'react-reveal'

const Ecectika_Gallery = () => {
    return (
        <div id='gallery' className="Overall_Gallery">
            <div className="containerg">
            <div className="cardg">
                    <img src={Yohani} />
                    <div className='image_text'>
                    <h6 className='image_text' >Yohani</h6>
                     <p className='image_date' >2023</p>
                    </div>
                </div>
                <div className="alt_cardg  cardg">
                    <img src={darshan} />
                    <div className='image_text'>
                    <h6 className='image_text' >Darshan Raval</h6>
                     <p className='image_date' >2020</p>
                    </div>
                </div>
               
              
                <div className="cardg">
                    <img src={one} />
                    <div className='image_text'>
                    <h6 className='image_text' >SALIM SULAIMAN</h6>
                     <p className='image_date' >2018</p>
                    </div>
                </div>
                <div className="alt_cardg cardg">
                    <img src={five} />
                    <div className='image_text'>
                    <h6 className='image_text' >Sachin jigar</h6>
                     <p className='image_date' >2017</p>
                    </div>
                </div>
                <div className=" cardg"> 
                    <img src={six} />
                    <div className='image_text'>
                    <h6 className='image_text' >Mohit chauhan</h6>
                     <p className='image_date' >2016</p>
                    </div>
                </div>
                <div className="alt_cardg  cardg">
                    <img src={three} />
                    <div className='image_text'>
                    <h6 className='image_text' >Lagori</h6>
                     <p className='image_date' >2015</p>
                    </div>
                </div>
             
               
              
              
               
              
            </div>
            <div className="title_gallery">

                <Fade bottom>
                    <h1 className="gallery_title">PAST EVENTS</h1>
                </Fade>
            </div>
        </div>
    )
}

export default forwardRef(Ecectika_Gallery)