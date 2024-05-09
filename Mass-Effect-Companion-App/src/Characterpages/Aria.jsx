import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import aria from '../assets/aria.jpg'
function Aria () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Aria T'Loak</h1>
                    <p className={style.quote}>“I am Omega.”</p>
                    <p className={style.description}>Aria T'Loak is the de facto ruler of Omega, the nominal capital of the Terminus Systems. Also known as the "Pirate Queen" of Omega, Aria is fiercely possessive of the space station and will do anything to protect it and maintain her dominance.</p>
                </div>
                <div className={style.containerright}>
                    <img src={aria}></img>
                </div>
            </div>
        </>
    )
}

export default Aria;