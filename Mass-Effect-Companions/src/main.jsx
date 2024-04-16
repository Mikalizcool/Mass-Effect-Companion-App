import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Logo from './Logo.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <App />
    <Footer />
  </React.StrictMode>,
)
