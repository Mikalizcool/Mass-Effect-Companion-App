import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './Navbar.module.css'
function Navbar () {
    return (
        <>
            <ul className={style.ulcontainer}>
                <li className={style.lidesign}>Home</li>
                <li className={style.lidesign}>History</li>
                <li className={style.lidesign}>Characters</li>
            </ul>
        </>
    )
}
export default Navbar;