import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Logo from '../assets/Mass_Effect_logo.png'

import symbol from '../assets/menu_FILL0_wght400_GRAD0_opsz24.svg'

import { navbarAppear } from '../hooks/designhooks'

import style from './Navbar.module.css'
function Navbar () {
    return (
        <>
            <ul className={style.navbar}>
                <li className={style.navbarleft}><Link to="/"><img className={style.logo} src={Logo}></img></Link></li>
                <div className={style.navbarright}>
                    <li className={style.symbol}><button type="button" onClick={navbarAppear()}><img src={symbol}></img></button></li>
                    <li className={style.navelements}><Link to="/">Home</Link></li>
                    <li className={style.navelements}><Link to="/history">History</Link></li>
                    <li className={style.navelements}><Link to="/companions">Companions</Link></li>
                </div>
            </ul>
        </>
    )
}
export default Navbar;