import './Homepage.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo'
import bg from '../assets/homepage.jpg'
import { UseBackgroundImage } from "../hooks/designhooks";
function Homepage () {
    
    UseBackgroundImage(bg);
    return (
        <>
            
            <Logo />
            <ul>
                <li>History of Mass Effect</li>
                <li><Link to="/companions">Companions</Link></li>
            </ul>
        </>
    )
}

export default Homepage;