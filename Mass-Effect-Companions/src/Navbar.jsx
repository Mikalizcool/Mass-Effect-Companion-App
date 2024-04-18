import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './Navbar.module.css'
function Navbar () {
    return (
        <div className={style.container}>
            <ul>
                <li>Home</li>
                <li>History</li>
                <li>Characters</li>
            </ul>
        </div>
    )
}
export default Navbar;