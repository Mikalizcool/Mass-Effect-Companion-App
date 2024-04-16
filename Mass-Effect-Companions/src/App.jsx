import { useState } from 'react'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import CharacterPage from './pages/Characters.jsx'
import Footer from './Footer'
import Logo from './Logo'
import homePage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Logo />
      <Routes>
          <Route index element={<homePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
