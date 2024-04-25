import './Homepage.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo'
import bg from '../assets/homepage.jpg'
import { UseBackgroundImage } from "../hooks/designhooks";
import style from './Homepage.module.css'
function Homepage () {
    
    UseBackgroundImage(bg);
    return (
        <>
            
            <Logo />
                <ul className={style.ulcontainer}>
                    <li><Link to="history">History of Mass Effect</Link></li>
                    <li><Link to="companions">Companions</Link></li>
                </ul>
        </>
    )
}

export default Homepage;