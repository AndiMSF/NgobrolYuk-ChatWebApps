import React, { useState } from 'react'
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const auth = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: auth})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError('Wrong, Username or Password!')
        }
    }

  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Login To Start Chatting</h1>
            <div className="title">
                <form onSubmit={handleSubmit}>
                    <input type="text" password={password} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Lets Start!</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm