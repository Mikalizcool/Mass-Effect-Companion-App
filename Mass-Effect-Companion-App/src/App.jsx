import { useState, useEffect } from "react";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Characterpage from './pages/Characters'
import Historypage from './pages/History'
import Garruspage from './Characterpages/Garrus'
import Wrexpage from './Characterpages/Wrex'
import Liarapage from './Characterpages/Liara'
import Talipage from './Characterpages/Tali'
import Ashleypage from './Characterpages/Ashley'
import Kaidenpage from './Characterpages/Kaiden'
import Kasumipage from './Characterpages/Kasumi'
import Gruntpage from './Characterpages/Grunt'
import Thanepage from './Characterpages/Thane'
import Jackpage from './Characterpages/Jack'
import Mirandapage from './Characterpages/Miranda'
import Legionpage from './Characterpages/Legion'
import Zaeedpage from './Characterpages/Zaeed'
import Samarapage from './Characterpages/Samara'
import Mordinpage from './Characterpages/Mordin'

import Footer from './components/Footer'
import Logo from './components/Logo'
import HomePage from './pages/Homepage'



function App() {
  const [count, setCount] = useState(0)
  
  

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="history" element={<Historypage />} />
          <Route path="companions" element={<Characterpage />} />
          <Route path="garrus" element={<Garruspage />} />
          <Route path="wrex" element={<Wrexpage />} />
          <Route path="liara" element={<Liarapage />} />
          <Route path="tali" element={<Talipage />} />
          <Route path="ashley" element={<Ashleypage />} />
          <Route path="kaiden" element={<Kaidenpage />} />
          <Route path="kasumi" element={<Kasumipage />} />
          <Route path="grunt" element={<Gruntpage />} />
          <Route path="thane" element={<Thanepage />} />
          <Route path="jack" element={<Jackpage />} />
          <Route path="miranda" element={<Mirandapage />} />
          <Route path="legion" element={<Legionpage />} />
          <Route path="zaeed" element={<Zaeedpage />} />
          <Route path="samara" element={<Samarapage />} />
          <Route path="mordin" element={<Mordinpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
