import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
    const { user } = useContext(AuthContext);
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/srilanka?unitGroup=us&include=current&key=L8FKXW6ZWXLACCJWXB3FXG6CN&contentType=json');
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="home-container">
            <header>
                <h1>Welcome to Fashion Recommender</h1>
                <p className="user-welcome">Welcome, {user.email}!</p>
            </header>
            <section className="content-section">
                <div className="weather-section">
                    <h2>Today's Weather</h2>
                    <button onClick={fetchWeatherData}>Fetch Weather Data</button>
                    {weatherData && (
                        <div>
                            <p>Temperature: {weatherData.currentConditions.temp} °F</p>
                            <p>Conditions: {weatherData.currentConditions.conditions}</p>
                            <p>Feels like: {weatherData.currentConditions.feelslike} °F</p>
                            <p>Wind Speed: {weatherData.currentConditions.windspeed} mph</p>
                        </div>
                    )}
                </div>
                <div className="project-description">
                    <h2>About Our Fashion Recommender</h2>
                    <p>
                        Our fashion recommender is a cutting-edge platform designed to help you discover your unique style
                        and stay trendy regardless of the weather or occasion. Whether you're looking for casual outfits
                        for a sunny day or elegant evening wear, our recommender has you covered.
                    </p>
                    <p>
                        Simply provide us with some basic details such as your gender, age, and preferences, and we'll
                        generate personalized fashion recommendations tailored just for you.
                    </p>
                    <p>
                        Get started today and elevate your fashion game to the next level!
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;