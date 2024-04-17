import React from 'react'
import massEffectLogo from './assets/Mass_Effect_logo.png'
import './Logo.css'
function Logo () {
    return (
        <div className="container">
            <img
            className="melogo"
            src = {massEffectLogo}
            alt = "Mass Effect Logo"
            />
            <h1 className="companion-app"> Companion App </h1>
        </div>
    )
}

export default Logo;