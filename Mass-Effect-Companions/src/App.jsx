import { useState } from 'react'
import garrusProfile from './assets/garrus-profile.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Throughout the Milky Way and Andromeda Galaxies, we encounter several companions.</p>
      <div className="container">
        <div className="characterProfile">
          <h2>Garrus Vakarian</h2>
          <a href="https://mikalizcool.com" target="_blank">
            <img
              src = {garrusProfile}
              alt = "Kaiden Alenko"
              className = "characterImage"
            />
          </a>
        </div>
        <div className="characterProfile">
          <h2>Garrus Vakarian</h2>
          <a href="https://mikalizcool.com" target="_blank">
            <img
              src = {garrusProfile}
              alt = "Kaiden Alenko"
              className = "characterImage"
            />
          </a>
        </div>
      </div>
      <div className="container">
      <div className="characterProfile">
          <h2>Garrus Vakarian</h2>
          <a href="https://mikalizcool.com" target="_blank">
            <img
              src = {garrusProfile}
              alt = "Kaiden Alenko"
              className = "characterImage"
            />
          </a>
        </div>
        <div className="characterProfile">
          <h2>Garrus Vakarian</h2>
          <a href="https://mikalizcool.com" target="_blank">
            <img
              src = {garrusProfile}
              alt = "Kaiden Alenko"
              className = "characterImage"
            />
          </a>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
