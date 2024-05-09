import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import miranda from '../assets/miranda.jpg'
function Miranda () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Miranda Lawson</h1>
                    <p className={style.quote}>“My reflexes, my strength, even my looks -- they’re all designed to give me an edge. No point in hiding from it.”</p>
                    <p className={style.description}>Miranda Lawson is a human Cerberus Officer. Miranda is very well traveled and has many contacts, extending from Citadel space and the Terminus Systems, to as far as the hostile Nemean Abyss. Her vast network of contacts may be explained by the fact Miranda is a known Cerberus operative, one who still has friends — or at least friends of friends — in the Alliance military. She has served at various times as a contact for Jacob Taylor and a member of Commander Shepard's crew.</p>
                </div>
                <div className={style.containerright}>
                    <img src={miranda}></img>
                </div>
            </div>
        </>
    )
}

export default Miranda;