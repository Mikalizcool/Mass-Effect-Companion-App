import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import wrex from '../assets/wrex.jpg'
function Wrex () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Urdnot Wrex</h1>
                    <p className={style.quote}>“Anyone who fights us is either stupid or on Saren's payroll. Killing the latter is business. Killing the former is a favor to the universe.”</p>
                    <p className={style.description}>A famed krogan mercenary and bounty hunter, Urdnot Wrex is also one of the last Krogan Battlemasters: rare individuals who combine powerful biotic abilities with the devastating firepower of advanced weaponry. A long-lived krogan who has had many adventures, Wrex has heard of Commander Shepard during his travels, and respects the Commander as a fellow warrior.
                    Despite his chosen path of violence and killing for credits, Wrex is deeply concerned with the fate of his people after the genophage, and is one of the few planning for a new krogan future.</p>
                </div>
                <div className={style.containerright}>
                    <img src={wrex}></img>
                </div>
            </div>
        </>
    )
}

export default Wrex;