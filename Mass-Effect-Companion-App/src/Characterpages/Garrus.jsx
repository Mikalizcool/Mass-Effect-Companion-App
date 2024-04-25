import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import garrus from '../assets/garrus.png'
function Garrus () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Garrus Vakarian</h1>
                    <p className={style.quote}>“Fighting a rogue Spectre with countless lives at stake and no regulations to get in the way? I'd say that beats C-Sec.”</p>
                    <p className={style.description}>Garrus Vakarian is a turian, formerly part of C-Sec's Investigation Division. Like most turians, Garrus had his military training at fifteen, but later followed in his father's footsteps to become a C-Sec officer. He was responsible for the investigation of Saren Arterius, the Council's top Spectre, after the Alliance claimed Saren had gone rogue. Although Garrus was told that the investigation was over, he decided to defy the Executor's order and pursue another lead on his own. Eventually, Garrus attempts to join Commander Shepard's team to help defeat Saren and the geth.</p>
                </div>
                <div className={style.containerright}>
                    <img src={garrus}></img>
                </div>
            </div>
        </>
    )
}

export default Garrus;