import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Logo from '../assets/Mass_Effect_logo.png'

import symbol from '../assets/menu_FILL0_wght400_GRAD0_opsz24.svg'

import { navbarAppear } from '../hooks/designhooks'

import style from './Navbar.module.css'

import Smalllogo from "./Smalllogo"
import Nav from "./Nav"
function Navbar () {
    return (
        <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-10xl m-0 flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
            <Smalllogo />
            <Nav />
        </header>
    )
}
export default Navbar;