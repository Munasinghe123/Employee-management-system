import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import '../Signup/Signup.css';


export default function Signup({ handleSignup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    async function UserSignup(event) {
        event.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/newUser', {
                name: username,
                age: age,
                email: email,
                password: password,
                gender: gender
            });
            console.log('Response status:', response.status);
            if (response.status === 200) {
                // Handle successful signup
                //toast.success("User created! Please log in.");
                console.log('User created successfully:', response.data);
            } else {
                // Handle error response
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Error creating user:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    }

    return (
        <div className='SignupMain'>
            <form className='SignupForm' onSubmit={UserSignup}>
                <h1 className='SignupH1'>Sign Up</h1>
                <input
                    className='SignupInput'
                    type='text'
                    required={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Name'
                />
                <br />
                <input
                    className='signupInput'
                    type='number'
                    required={true}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder='Age'
                />
                <br />
                <input
                    className='SignupInput'
                    type='email'
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <br />
                <input
                    className='SignupInput'
                    type='password'
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <br />
                <select
                    className='signupInput'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required={true}
                >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <br />
                <button className='LoginButton' type='submit'>Sign Up</button>
                <span>Already a user?</span><button className='LoginButton'onClick={() => navigate('/login')}>Log in</button>


            </form>
            
            {/* <span className='SignupLoginText'>Already have an account? <button className='SignupLoginButton' onClick={() => navigate('/login')}>Login</button></span> */}
        </div>
    );
}