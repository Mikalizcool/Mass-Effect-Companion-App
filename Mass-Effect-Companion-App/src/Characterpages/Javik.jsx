import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import javik from '../assets/javik.jpg'
function Javik () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Javik</h1>
                    <p className={style.quote}>“War is our sculptor. And we are prisoners to its design.”</p>
                    <p className={style.description}>Javik is the only known survivor of the ancient Prothean race. After being preserved in stasis for over 50,000 years, he is revived and seeks to wreak vengeance on the Reapers for the demise of his people.</p>
                </div>
                <div className={style.containerright}>
                    <img src={javik}></img>
                </div>
            </div>
        </>
    )
}

export default Javik;