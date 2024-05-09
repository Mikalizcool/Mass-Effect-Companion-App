import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import grunt from '../assets/grunt.png'
function Grunt () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Urdnot Grunt</h1>
                    <p className={style.quote}>“I am pure krogan; you should be in awe.”</p>
                    <p className={style.description}>Grunt is a genetically engineered krogan super soldier. Bred and educated in a tank, he was intended to exemplify the best traits of the krogan, and help reinvigorate his species. In the meantime, he fights alongside Commander Shepard to satisfy his natural desire for violence.</p>
                </div>
                <div className={style.containerright}>
                    <img src={grunt}></img>
                </div>
            </div>
        </>
    )
}

export default Grunt;