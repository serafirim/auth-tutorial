import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Login.css'

// #region -------------------------------[ Functions ]------------------------------------------------------------
// Function to handle login
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}
// #endregion ------------------------------------------------------------------------------------------------------

export default function Login({ setToken }) {
    // Create local state to capture the Username and Password. 
    const [ userName, setUserName ] = useState()
    const [ password, setPassword ] = useState()

    // Handle submit
    const handleSubmit = async e => {
        // Prevent default form submit
        e.preventDefault()

        // Get token from the loginUser()
        const token = await loginUser({
            userName,
            password
        })

        // Set the token
        setToken(token)
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log in</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

// Destructure props
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}