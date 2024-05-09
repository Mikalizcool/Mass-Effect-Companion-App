import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import zaeed from '../assets/zaeed.jpg'
function Zaeed () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Zaeed Massani</h1>
                    <p className={style.quote}>“Rage is a hell of an anesthetic.”</p>
                    <p className={style.description}>Zaeed Massani is a feared, respected bounty hunter and mercenary soldier. Cerberus has contracted Zaeed to assist Commander Shepard in the mission to save mankind. In exchange, Zaeed requires help to complete another mission he had accepted beforehand, which is to liberate an Eldfell-Ashland Energy refinery from Blue Suns control.</p>
                </div>
                <div className={style.containerright}>
                    <img src={zaeed}></img>
                </div>
            </div>
        </>
    )
}

export default Zaeed;