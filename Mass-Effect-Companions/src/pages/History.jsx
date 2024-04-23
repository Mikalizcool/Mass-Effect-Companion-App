import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UseBackgroundImage } from "../hooks/designhooks";
import history from '../assets/history.jpg'

import Navbar from '../components/Navbar'

import style from './History.module.css'
function History () {
    UseBackgroundImage(history);
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <h1>History of Mass Effect</h1>
                    <p className={style.pcontainer}>In the year 2148, explorers on Mars discovered the remains of an ancient spacefaring civilization. In the decades that followed, these mysterious artifacts revealed startling new technologies, enabling travel to the furthest stars. The basis for this incredible technology was a force that controlled the very fabric of space and time.
                        <br></br><br></br>They called it the greatest discovery in human history.
                        <br></br><br></br>The civilizations of the galaxy call it... MASS EFFECT.
                    </p>
            </div>
        </>
    )
}
export default History;