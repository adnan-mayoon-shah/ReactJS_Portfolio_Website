import './Image.css';

import img2 from '../images/img2.jpg';
import React from 'react'

const Image = () => {
  return (
    <div>
      <img className='img2' src={img2} alt="img2" />
      <div className="heading2">About</div>
      <div className="para1">I'm a Front-End Developer</div>
    </div>
  )
}

export default Image
