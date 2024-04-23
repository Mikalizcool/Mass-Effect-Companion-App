import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import style from './Navbar.module.css'
function Navbar () {
    return (
        <>
            <ul className={style.ulcontainer}>
                <li className={style.lidesign}><Link to="/">Home</Link></li>
                <li className={style.lidesign}><Link to="/history">History</Link></li>
                <li className={style.lidesign}><Link to="/companions">Companions</Link></li>
            </ul>
        </>
    )
}
export default Navbar;