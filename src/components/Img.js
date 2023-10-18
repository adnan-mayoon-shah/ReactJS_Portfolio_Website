import React from 'react'
import './Img.css';
import img from '../images/img.jpg';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Img = () => {

  

  return (
    <div className='img'>

      <div className="mask">
        <img className='main-img' src={img} alt="img" />
      </div>

      <div className="content">
        <h1 className='h1' >Hi, I'M ADNAN.</h1>
        <h1 className='h2'>REACT</h1>
        <h1 className='h3'><span >
          <Typewriter
            words={['DEVELOPER']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
      </div>

      <div className='btn'><Link to="/contact" className="c-link">CONTACT</Link>
      </div>


    </div>
  )
}

export default Img
