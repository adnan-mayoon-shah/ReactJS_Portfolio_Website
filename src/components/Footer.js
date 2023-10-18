import './Footer.css';

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="para"><h2>Have a Question?</h2>
                        <div className="location">
                            <FaHome size={20} style={{ color: '#fff', marginRight: "2rem" }} />
                            <div className='add'>
                                <p className='new'>Karimabad Colony F.B Area,</p>
                                <p className='new'>Karachi.</p>
                            </div>
                        </div>

                        <div className="phone">
                            <FaPhone size={20} style={{ color: '#fff', marginRight: "2rem" }} />0313-*******
                        </div>

                        <div className="email">
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: "2rem" }} />adnan02shah@gmail.com
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h2>Adnan.</h2>
                    <div className="word">
                        <p>I'm a Passionate Web Developer</p>
                        <p>With Expertise In Front-end Development.</p>

                    </div>
                    <div className="media">
                        <Link to='https://www.facebook.com/profile.php?id=100028372867166' target='_blank'><FaFacebook size={25} style={{ color: "#ffffff", marginRight: "2rem" }} /></Link>

                        <FaTwitter size={25} style={{ color: '#ffffff', marginRight: "2rem" }} />
                        <Link to='https://www.linkedin.com/in/adnan-mayoon-shah' target='_blank'><FaLinkedin size={25} style={{ color: '#ffffff', marginRight: "2rem" }} /></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
