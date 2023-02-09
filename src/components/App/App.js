import React/*, { useState }*/ from 'react'
import './App.css'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import Login from '../Login/Login'
import useToken from './useToken'

// #region ------------------------[ Setters and Getters ]------------------------------------
//function setToken(userToken) {
//  sessionStorage.setItem('token', JSON.stringify(userToken))
//}

//function getToken() {
//  const tokenString = sessionStorage.getItem('token')
//  const userToken = JSON.parse(tokenString)
//  return userToken?.token // ? is required to avoid generating an error as the sessionStorage.getItem('token') will be undefined when accessing for the first time
//}
// #endregion --------------------------------------------------------------------------------

function App() {
  const { token, setToken } = useToken() // this replaces the setToken()
  //const token = getToken() // Replaced: "const [ token, setToken ] = useState()"

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="wrapper">
        <h1>Applications</h1>
        <Router>
          <nav>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/preferences">Preferences</Link></li>              
            </ul>
          </nav>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
