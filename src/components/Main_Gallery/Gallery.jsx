
import React, { forwardRef } from 'react'
import './Main_Gallery.css'
import one from '../../Images/galleryone.jpg'
import two from '../../Images/gallerytwo.jpg'
import three from '../../Images/gallerythree.jpg'
import four from '../../Images/galleryfour.jpg'
import five from '../../Images/galleryfive.jpg'
import six from '../../Images/gallerysix.jpg'
import seven from '../../Images/galleryeight.png'

import { Fade } from 'react-reveal'

const Ecectika_Gallery = () => {
    return (
        <div id='gallery' className="Overall_Gallery">

            <div className="container">

                <div className="card">
                    <img src={one} />
                    <div className='image_text'>
                    <h6 className='image_text' >SALIM SULAIMAN</h6>
                     <p className='image_date' >2018</p>
                    </div>
                </div>
                <div className="alt_card card">
                    <img src={two} />
                    <div className='image_text'>
                    <h6 className='image_text' >D J Kunal</h6>
                     <p className='image_date' >2018</p>
                    </div>
                </div>
                <div className=" card"> 
                    <img src={four} />
                    <div className='image_text'>
                    <h6 className='image_text' >CLUB BANDITZ</h6>
                     <p className='image_date' >2018</p>
                    </div>
                </div>
                <div className="alt_card  card">
                    <img src={seven} />
                    <div className='image_text'>
                    <h6 className='image_text' >DJ SHILPI SHARMA</h6>
                     <p className='image_date' >2017</p>
                    </div>
                </div>
                <div className="card">
                    <img src={five} />
                    <div className='image_text'>
                    <h6 className='image_text' >SACHIN JIGAR</h6>
                     <p className='image_date' >2017</p>
                    </div>
                </div>
                <div className="alt_card  card">
                    <img src={six} />
                    <div className='image_text'>
                    <h6 className='image_text' >MOHIT CHOUHAN</h6>
                     <p className='image_date' >2016</p>
                    </div>
                </div>
               
                <div className="  card">
                    <img src={three}/>
                    <div className='image_text'>
                    <h6 className='image_text' >LAGORI</h6>
                     <p className='image_date' >2015</p>
                    </div>
                </div>
               
              
              
               
              
            </div>
            <div className="title_gallery">

                <Fade bottom>
                    <h1 className="gallery_title">GALLERY</h1>
                </Fade>
            </div>
        </div>
    )
}

export default forwardRef(Ecectika_Gallery)