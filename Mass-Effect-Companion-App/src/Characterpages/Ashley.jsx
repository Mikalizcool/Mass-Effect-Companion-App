import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import ashley from '../assets/ashley.jpg'
function Ashley () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Ashley Williams</h1>
                    <p className={style.quote}>“Why is it that whenever someone says 'with all due respect' they really mean 'kiss my ass'”</p>
                    <p className={style.description}>Ashley Madeline Williams is a human soldier who served in the Systems Alliance as a Gunnery Chief in the 2nd Frontier Division on Eden Prime, and was later assigned to Commander Shepard's squad after the geth attack on Eden Prime.</p>
                </div>
                <div className={style.containerright}>
                    <img src={ashley}></img>
                </div>
            </div>
        </>
    )
}

export default Ashley;