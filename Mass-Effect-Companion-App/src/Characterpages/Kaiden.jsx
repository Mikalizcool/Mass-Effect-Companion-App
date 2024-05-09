import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import kaiden from '../assets/kaiden.jpg'
function Kaiden () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Kaiden Alenko</h1>
                    <p className={style.quote}>“We finally get out here, and the final frontier was already settled. And the residents don't even seem impressed by the view. Or the dangers.”</p>
                    <p className={style.description}>Kaidan Alenko is a human Sentinel and a Systems Alliance Marine. While serving aboard the SSV Normandy, he is a Staff Lieutenant and head of the ship's Marine detail. He's also an initial member of Commander Shepard's squad. Kaidan is a biotic wired with the controversial L2 implants, which are known to cause severe neurological damage to the user. However, he is fortunate enough to only suffer from occasional severe migraines.</p>
                </div>
                <div className={style.containerright}>
                    <img src={kaiden}></img>
                </div>
            </div>
        </>
    )
}

export default Kaiden;