import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Logo from '../assets/Mass_Effect_logo.png'

import style from './Navbar.module.css'
function Navbar () {
    return (
        <>
            <ul className={style.navbar}>
                <li className={style.navbarleft}><Link to="/"><img className={style.logo} src={Logo}></img></Link></li>
                <div className={style.navbarright}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/companions">Companions</Link></li>
                </div>
            </ul>
        </>
    )
}
export default Navbar;