import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import React, {useState} from 'react'
import {FaBars, FaTimes}  from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false); 
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100)
        {
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll",changeColor);

    return (
        <div className="main">
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Adnan.</h1>
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>   
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : (<FaBars size={20} style={{color:"#fff"}} />)  }
                
            </div>
        </div>
        </div>

        
    )
}

export default Navbar
