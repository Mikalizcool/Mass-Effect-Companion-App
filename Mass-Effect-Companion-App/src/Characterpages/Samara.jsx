import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import samara from '../assets/samara.jpg'
function Samara () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Samara</h1>
                    <p className={style.quote}>“By the Code, I will serve you, Shepard. Your choices are my choices. Your morals are my morals. Your wishes are my code.”</p>
                    <p className={style.description}>Samara is a nearly thousand-year-old asari justicar, a member of an ancient monastic order following a strict honor code. Though she is skilled with weapons, Samara usually relies on her powerful biotic abilities. Justicars rarely leave asari space, but Samara's pursuit of justice has brought her to Illium.</p>
                </div>
                <div className={style.containerright}>
                    <img src={samara}></img>
                </div>
            </div>
        </>
    )
}

export default Samara;