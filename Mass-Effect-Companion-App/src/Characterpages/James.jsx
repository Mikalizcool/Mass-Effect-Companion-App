import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import james from '../assets/james.jpg'
function James () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>James Vega</h1>
                    <p className={style.quote}>“Adrenaline's better than oxygen any day.”</p>
                    <p className={style.description}>Lieutenant James Vega is a human Systems Alliance Marine and a member of Commander Shepard's squad in 2186. While Vega is an experienced soldier, he is unfamiliar with the seedy underbelly and political workings of the galaxy.</p>
                </div>
                <div className={style.containerright}>
                    <img src={james}></img>
                </div>
            </div>
        </>
    )
}

export default James;