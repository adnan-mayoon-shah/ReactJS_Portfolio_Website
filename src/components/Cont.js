import './Cont.css';
import img7 from '../images/img7.jpg'
import React from 'react'

const Cont = () => {
    return (
        <div>
            <div className="cont">
                <img className="image"src={img7} alt="img7" />
            </div>

            <div className="heading">
                <h1>Contact</h1>
                <p>Let's Connect!</p>
            </div>
        </div>
    )
}

export default Cont
