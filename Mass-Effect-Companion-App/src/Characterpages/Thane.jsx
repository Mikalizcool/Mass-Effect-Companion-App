import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import thane from '../assets/thane.jpg'
function Thane () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Thane Krios</h1>
                    <p className={style.quote}>“The measure of an individual can be difficult to discern by actions alone.”</p>
                    <p className={style.description}>Thane Krios is a drell assassin, rumored to be the most skilled in the galaxy. Unlike most assassins, who prefer to snipe their targets from a distance, Thane prefers to get up close and kill his target personally, utilizing a mixture of stealth, firearms, hand-to-hand combat and biotic abilities.</p>
                </div>
                <div className={style.containerright}>
                    <img src={thane}></img>
                </div>
            </div>
        </>
    )
}

export default Thane;