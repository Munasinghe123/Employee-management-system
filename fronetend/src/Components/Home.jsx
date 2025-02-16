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
                <h1>Welcome to Employee Management System</h1>
                <p className="user-welcome">Welcome, {user.userName}!</p>
            </header>
            <section className="content-section">
               
                <div className="project-description">
                    <h2>Insert tittle</h2>
                    <p>
                        Maybe Add a Description or something here?
                    </p>
                    <p>
                       Maybe Navigation Components here in order to navigate to ur part and other peoples parts??
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;