import React from 'react';
import { Link } from 'react-router-dom';

import garrusProfile from '../assets/garrus-profile.jpg'
import wrexProfile from '../assets/wrex-profile.jpg'
import liaraProfile from '../assets/liara-profile.jpg'
import taliProfile from '../assets/tali-profile.jpg'
import jackProfile from '../assets/jack-profile.jpg'
import mirandaProfile from '../assets/miranda-profile.jpg'
import ashleyProfile from '../assets/ashley-profile.jpg'
import kaidenProfile from '../assets/kaiden-profile.jpg'
import kasumiProfile from '../assets/kasumi-profile.jpg'
import gruntProfile from '../assets/grunt-profile.jpg'
import thaneProfile from '../assets/thane-profile.jpg'
import legionProfile from '../assets/legion-profile.jpg'
import zaeedProfile from '../assets/zaeed-profile.jpg'
import samaraProfile from '../assets/samara-profile.jpg'
import mordinProfile from '../assets/mordin-profile.jpg'
import javikProfile from '../assets/javik-profile.jpg'
import jamesProfile from '../assets/james-profile.jpg'
import ediProfile from '../assets/edi-profile.jpg'
import ariaProfile from '../assets/aria-profile.jpg'
import nyreenProfile from '../assets/nyreen-profile.jpg'

import { UseBackgroundImage } from '../hooks/designhooks';
import companions from '../assets/companions.jpg'
import style from './Characters.module.css'
import Navbar from '../components/Navbar'
function Characters () {
    UseBackgroundImage();
    return (
        <>
            <Navbar />
            <p className={style.intro}>Throughout the Milky Way Galaxy, we encounter several companions...</p>
            <div className={style.container}>
                <div className={style.gameContainer}>
                    <p className={style.gameText}>Mass Effect 1</p>
                </div>
                <div className={style.characterContainer}>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Garrus Vakarian</h2>
                            <Link to="/garrus">
                                <img
                                src = {garrusProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Urdnot Wrex</h2>
                            <Link to="/wrex">
                                <img
                                src = {wrexProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Liara Tsoni</h2>
                            <Link to="/liara">
                                <img
                                src = {liaraProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Tali Zorah</h2>
                            <Link to="/tali">
                                <img
                                src = {taliProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Ashley Williams</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {ashleyProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Kaiden Alenko</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {kaidenProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.gameContainer}>
                    <p className={style.gameText}>Mass Effect 2</p>
                </div>
                <div className={style.characterContainer}>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Kasumi Goto</h2>
                            <Link to="Garrus">
                                <img
                                src = {kasumiProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Grunt</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {gruntProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Thane Krios</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {thaneProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Jack</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {jackProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Miranda Lawson</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {mirandaProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Legion</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {legionProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Zaeed Massani</h2>
                            <Link to="Garrus">
                                <img
                                src = {zaeedProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Samara</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {samaraProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Mordin Solus</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {mordinProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.gameContainer}>
                    <p className={style.gameText}>Mass Effect 3</p>
                </div>
                <div className={style.characterContainer}>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Javik</h2>
                            <Link to="Garrus">
                                <img
                                src = {javikProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </Link>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>James Vega</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {jamesProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>EDI</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {ediProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={style.characterRow}>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Aria T'Loak</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {ariaProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                        <div className={style.characterProfile}>
                            <h2 className={style.name}>Nyreen Kandros</h2>
                            <a href="https://mikalizcool.com" target="_blank">
                                <img
                                src = {nyreenProfile}
                                alt = "Kaiden Alenko"
                                className = {style.characterImage}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Characters;