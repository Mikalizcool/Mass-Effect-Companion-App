import React from 'react'
import massEffectLogo from '../assets/Mass_Effect_logo.png'
import style from './Logo.module.css'
function Logo () {
    return (
        <div className={style.container}>
            <img
            className={style.logo}
            src = {massEffectLogo}
            alt = "Mass Effect Logo"
            />
            <h1 className={style.companionapp}> Companion App </h1>
        </div>
    )
}

export default Logo;