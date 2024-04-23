import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UseBackgroundImage } from "../hooks/designhooks";
import history from '../assets/history.jpg'

import Navbar from '../components/Navbar'

import style from './History.module.css'
function History () {
    UseBackgroundImage(history);
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.containerb}>
                    <h1 className={style.year}>Synopsis</h1>
                        <p className={style.opening}>In the year 2148, explorers on Mars discovered the remains of an ancient spacefaring civilization. In the decades that followed, these mysterious artifacts revealed startling new technologies, enabling travel to the furthest stars. The basis for this incredible technology was a force that controlled the very fabric of space and time.
                            <br></br><br></br>They called it the greatest discovery in human history.
                            <br></br><br></br>The civilizations of the galaxy call it... MASS EFFECT.
                        </p>
                </div>
                <div className={style.containerb}>
                    
                </div>
            </div>
            <div className={style.container}>
                <div className={style.containerb}>
                    <h1 className={style.year}>2157 CE: The First Contact War</h1>
                        <p className={style.pcontainer}>
                            Humanity makes violent first contact with the turians after human explorers attempt to activate a dormant mass relay, violating galactic law. This sparks the First Contact War, known to turians as the Relay 314 Incident. The conflict culminates in the turian occupation of Shanxi, the first human world to fall to an alien race, but Admiral Kastanie Drescher's Second Fleet surprises the turians and retakes the planet. The Citadel Council intervenes, revealing the greater galactic community to humanity and brokering peace. Meanwhile, mercenary Jack Harper foils a plot to turn turians into an invincible army, leading him to found Cerberus and assume the identity of the Illusive Man.
                        </p>
                </div>
                <div className={style.containerb}>

                </div>
            </div>
            <div className={style.container}>
                <div className={style.containerb}>
                    <h1 className={style.year}>2183 CE: The Rise and Fall of Saren</h1>
                        <p className={style.pcontainer}>
                            In the year 2183 CE, a human soldier named Commander Shepard led an investigation into a rogue Spectre named Saren. Saren was collaborating with a race of sentient machines called the Geth and was attempting to bring back a race of ancient machines known as the Reapers, who periodically wipe out all advanced organic life in the galaxy. Shepard discovered Saren's plan and, with the help of a team, stopped him from unleashing the Reapers. This event revealed the looming threat of the Reapers to the galaxy, setting the stage for future conflicts.
                        </p>
                </div>
                <div className={style.containerb}>

                </div>
            </div>
            <div className={style.container}>
                <div className={style.containerb}>
                    <h1 className={style.year}>2185 CE: Suicide Mission</h1>
                        <p className={style.pcontainer}>
                            In the year 2185 CE, Commander Shepard is killed in an attack by a mysterious alien race known as the Collectors. However, Shepard is revived by the pro-human organization Cerberus and tasked with investigating the Collectors' motives. Shepard assembles a new team, including former squadmates and new allies, to stop the Collectors, who are revealed to be working for the Reapers. Along the way, Shepard must navigate complex moral decisions and build relationships with the team to ensure their loyalty. The game culminates in a suicide mission to the Collectors' base, where Shepard must make critical decisions that determine the fate of the mission and the team.
                        </p>
                </div>
                <div className={style.containerb}>

                </div>
            </div>
            <div className={style.container}>
                <div className={style.containerb}>
                    <h1 className={style.year}>2186 CE: Galaxy at War</h1>
                        <p className={style.pcontainer}>
                            In the year 2186 CE, the Reapers, ancient sentient machines, launch a full-scale invasion of the galaxy, devastating Earth and other inhabited planets. Commander Shepard, now a symbol of galactic resistance, gathers allies from across the galaxy to unite against the Reaper threat. Shepard's mission is to find a way to defeat the Reapers once and for all. As the war progresses, Shepard must make difficult choices that determine the fate of entire civilizations. The game culminates in a climactic battle for the fate of the galaxy, with multiple possible endings depending on Shepard's decisions throughout the game.
                        </p>
                </div>
                <div className={style.containerb}>
                    
                </div>
            </div>
        </>
    )
}
export default History;