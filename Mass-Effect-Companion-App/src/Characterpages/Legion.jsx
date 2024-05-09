import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import legion from '../assets/legion.jpg'
function Legion () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Legion</h1>
                    <p className={style.quote}>“Organics fear us. We wish to understand, not incite.”</p>
                    <p className={style.description}>Legion is the name taken by the gestalt consciousness formed by 1,183 geth programs inhabiting a unique geth "mobile platform".</p>
                </div>
                <div className={style.containerright}>
                    <img src={legion}></img>
                </div>
            </div>
        </>
    )
}

export default Legion;