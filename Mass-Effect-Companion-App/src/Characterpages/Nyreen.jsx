import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import nyreen from '../assets/nyreen.jpg'
function Nyreen () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Nyreen Kandros</h1>
                    <p className={style.quote}>“You'll find me very willing to liberate this station.”</p>
                    <p className={style.description}>Nyreen Kandros is the leader of the Talons mercenary organization on Omega in 2186. Unlike the group's previous leader, Nyreen has a strong moral compass and extensive military experience, traits which gave her the skills necessary to convert the Talons from a lawless gang to a highly disciplined operation devoted to aiding and protecting Omega's civilians.</p>
                </div>
                <div className={style.containerright}>
                    <img src={nyreen}></img>
                </div>
            </div>
        </>
    )
}

export default Nyreen;