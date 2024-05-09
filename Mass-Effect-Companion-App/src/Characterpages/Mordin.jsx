import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '../components/Navbar'

import style from './characterpages.module.css'

import mordin from '../assets/mordin.jpg'
function Mordin () {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerleft}>
                    <h1 className={style.name}>Mordin Solus</h1>
                    <p className={style.quote}>“Lots of ways to help people. Sometimes heal patients; sometimes execute dangerous people. Either way helps.”</p>
                    <p className={style.description}>Mordin Solus is a salarian geneticist, professor, and a former operative of the Special Tasks Group, where he performed reconnaissance and participated in the modification of the genophage. In 2185, he is recruited by Commander Shepard to assist in a high-risk mission against the Collectors. Mordin has a moral character best described as consequentialist, believing the ends justify the means, though he dislikes taking life without good cause. His actions are often guided by an impersonal logic, refusing to let his conscience, personal, and emotional connections cloud his judgment of what he believes is truly best in the big picture. Though he is affable, quick-talking and friendly, Mordin bears physical scars of his time in the STG and is still handling the consequences of his past.</p>
                </div>
                <div className={style.containerright}>
                    <img src={mordin}></img>
                </div>
            </div>
        </>
    )
}

export default Mordin;