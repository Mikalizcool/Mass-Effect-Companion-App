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
        <div className={style.container}>
            
            <Logo />
                <h1 className="text-xl font-bold text-red-500">Hi!</h1>
                <ul className={style.ulcontainer}>
                    <li><Link to="history">History of Mass Effect</Link></li>
                    <li><Link to="companions">Companions</Link></li>
                </ul>
        </div>
    )
}

export default Homepage;