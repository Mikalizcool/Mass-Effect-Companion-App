import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import CharacterPage from './pages/Characters'
import Footer from './Footer'
import Logo from './Logo'
import HomePage from './pages/Homepage'



function App() {
  const [count, setCount] = useState(0)
  
  

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="companions" element={<CharacterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
