
import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    async function UserLogin(event) {
        event.preventDefault();
        try {
            await login({ email, password });
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    }

    return (
        <div className='LoginMain'>
            <h1 className='LoginH1'>Login</h1>
            <form className='LoginForm' onSubmit={UserLogin}>
                <input
                    className='loginInput'
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    required={true}
                    value={email}
                    placeholder="Email"
                />
                <input
                    className='loginInput'
                    type='password'
                    required={true}
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='LoginButton' type='submit'>Submit</button>
            </form>
            {error && <p className='error'>{error}</p>}
            <span className='LoginSignupText'>Not a user? <button className='LoginSignupButton' onClick={() => navigate('/signup')}>Sign up</button></span>
        </div>
    );
}
