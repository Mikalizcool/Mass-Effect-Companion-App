import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import jack from '../assets/jack.jpg'
function Jack () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Jack</h1>
                    <p className={style.quote}>“Turns out, mess with someone's head enough and you can turn a scared kid into an all-powerful bitch.”</p>
                    <p className={style.description}>Jack, also known as Subject Zero, is a notorious criminal whose crimes include piracy, kidnapping, vandalism and murder. She is also a biotic, possibly one of the most powerful human biotics alive, and is considered so dangerous that she was kept in cryogenic stasis after she was caught.</p>
                </div>
                <div className={style.containerright}>
                    <img src={jack}></img>
                </div>
            </div>
        </>
    )
}

export default Jack;