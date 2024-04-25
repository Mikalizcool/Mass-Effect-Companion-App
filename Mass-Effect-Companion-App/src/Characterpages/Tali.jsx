import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import tali from '../assets/tali.jpg'
function Tali () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Tali'Zorah nar Rayya</h1>
                    <p className={style.quote}>“The Pilgrimage proves we are willing to give of ourselves for the greater good. What does it say about me if I turn my back on this?”</p>
                    <p className={style.description}>Tali'Zorah nar Rayya is a quarian and a member of Commander Shepard's squad. She is the daughter of Rael'Zorah, a member of the Admiralty Board. Though young, Tali is a mechanical genius.
                    In 2183, she is on her Pilgrimage, the rite of passage to prove her worth and bring something of value back to her people aboard the Migrant Fleet. In 2185, having completed her Pilgrimage, Tali has been entrusted with leading an important research mission for the Admiralty Board.</p>
                </div>
                <div className={style.containerright}>
                    <img src={tali}></img>
                </div>
            </div>
        </>
    )
}

export default Tali;