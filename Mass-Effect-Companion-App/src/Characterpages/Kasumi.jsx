import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import kasumi from '../assets/kasumi.jpg'
function Kasumi () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}></h1>
                    <p className={style.quote}>“I'm the best thief in the business, not the most famous. Need to watch my step to keep it that way.”</p>
                    <p className={style.description}>Kasumi Goto is the galaxy's most enigmatic thief and has enemies everywhere, but only a few could put a name to her face. She is a master of stealth and infiltration.</p>
                </div>
                <div className={style.containerright}>
                    <img src={kasumi}></img>
                </div>
            </div>
        </>
    )
}

export default Kasumi;