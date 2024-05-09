import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import edi from '../assets/edi.jpg'
function Edi () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Edi</h1>
                    <p className={style.quote}>“I always work at optimal capacity.”</p>
                    <p className={style.description}>The Enhanced Defense Intelligence is an AI created by Cerberus and installed aboard the Normandy SR-2. She is represented visually by a holographic blue sphere and aurally with a feminine voice at various terminals throughout the ship where she can provide basic information about the Normandy and Cerberus.</p>
                </div>
                <div className={style.containerright}>
                    <img src={edi}></img>
                </div>
            </div>
        </>
    )
}

export default Edi;