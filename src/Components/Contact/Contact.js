import React from 'react';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { SiGmail } from 'react-icons/si';
import { MdLocalPostOffice } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact"> 
    <div className='container'>
    <div className="container mb-5 mt-6 d-flex justify-content-center this " >
    <div className="row">
      <div className="col">
      <div className='contactContainer m-1'><h1  className='text-primary'>Contact us!</h1></div>
      <div className='contactParagraphContainer'> If you have any question or want to get a qoute, feel free to contact us.
        We are always happy to hear from you!</div>
        <div className='iconsContainer d-flex flex-column '>
      <div className='iconContainer'>
        <GoLocation className='icons'/>
        <span>Head Office: Mombasa, Miritini.</span>
      </div>
      <div className='iconContainer'>
        <BsTelephoneInboundFill className='icons'/>
        <span>+254 722 299 286</span>
      </div>
      <div className='iconContainer'>
        <SiGmail className='icons'/>
        <span>Barakamultiservicesltd@gmail.com</span>
      </div>
      <div className='iconContainer'>
        <MdLocalPostOffice className='icons'/>
        <span>P.O. BOX 97500-80112 MSA</span>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  
        
      
    
    

    
    
    
    
  )
}

export default Contact;