import React from 'react';
import { Link } from 'react-router-dom';

import garrusProfile from '../assets/garrus-profile.jpg'
import wrexProfile from '../assets/wrex-profile.jpg'
import liaraProfile from '../assets/liara-profile.jpg'
import taliProfile from '../assets/tali-profile.jpg'
import jackProfile from '../assets/jack-profile.jpg'
import mirandaProfile from '../assets/miranda-profile.jpg'
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
                <div className={style.characterProfile}>
                <h2>Garrus Vakarian</h2>
                <Link to="Garrus">
                    <img
                    src = {garrusProfile}
                    alt = "Kaiden Alenko"
                    className = {style.characterImage}
                    />
                </Link>
                </div>
                <div className={style.characterProfile}>
                <h2>Urdnot Wrex</h2>
                <a href="https://mikalizcool.com" target="_blank">
                    <img
                    src = {wrexProfile}
                    alt = "Kaiden Alenko"
                    className = {style.characterImage}
                    />
                </a>
                </div>
            </div>

            <div className={style.container}>
            <div className={style.characterProfile}>
                <h2>Liara Tsoni</h2>
                <a href="https://mikalizcool.com" target="_blank">
                    <img
                    src = {liaraProfile}
                    alt = "Kaiden Alenko"
                    className = {style.characterImage}
                    />
                </a>
                </div>
                <div className={style.characterProfile}>
                <h2>Tali Zorah</h2>
                <a href="https://mikalizcool.com" target="_blank">
                    <img
                    src = {taliProfile}
                    alt = "Kaiden Alenko"
                    className = {style.characterImage}
                    />
                </a>
                </div>
            </div>

            <div className={style.container}>
            <div className={style.characterProfile}>
                <h2>Jack</h2>
                <a href="https://mikalizcool.com" target="_blank">
                    <img
                    src = {jackProfile}
                    alt = "Kaiden Alenko"
                    className = {style.characterImage}
                    />
                </a>
                </div>
                <div className={style.characterProfile}>
                <h2>Miranda</h2>
                <a href="https://mikalizcool.com" target="_blank">
                    <img
                    src = {mirandaProfile}
                    alt = "Kaiden Alenko"
                    className = {style.characterImage}
                    />
                </a>
                </div>
            </div>
        </>
    )
}

export default Characters;