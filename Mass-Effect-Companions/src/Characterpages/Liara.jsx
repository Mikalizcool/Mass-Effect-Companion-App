import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import liara from '../assets/liara.png'
function Liara () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Liara T'Soni</h1>
                    <p className={style.quote}>“That is why I find you so fascinating. You were marked by the beacon on Eden Prime; you were touched by working Prothean technology!”</p>
                    <p className={style.description}>Dr. Liara T'Soni is an asari researcher who has spent the past fifty years of her life studying Prothean technology and culture, specialising in the Prothean extinction. She was born on Thessia in 2077, making her "only" 106—barely an adult in asari terms. She already has a great deal of insight into the Protheans and is a highly trained user of biotics.</p>
                </div>
                <div className={style.containerright}>
                    <img src={liara}></img>
                </div>
            </div>
        </>
    )
}

export default Liara;