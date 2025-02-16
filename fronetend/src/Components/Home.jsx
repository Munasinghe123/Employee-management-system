import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import './Home.css'; 

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Employee Management System</h1>
                    <p className="user-welcome">Welcome, {user?.userName}!</p>
                    
                </div>
            </section>
        </div>
    );
}

export default Home;
