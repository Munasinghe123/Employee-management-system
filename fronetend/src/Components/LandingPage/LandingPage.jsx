import React from "react";
import "./LandingPage.css"; // Import the CSS file
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Employee Management System</h1>
          <p className="hero-subtitle">
            Streamline your employee management with ease and efficiency.
          </p>
          <Link to='/login'>
            <button className="cta-button">Get Started</button>
          </Link>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>📊 Employee Management</h3>
            <p>Easily manage employee records, roles, and performance tracking.</p>
          </div>
          <div className="feature-card">
            <h3>⏳ Attendance & Payroll</h3>
            <p>Automate attendance tracking and salary calculations effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure & Reliable</h3>
            <p>Our system ensures top-notch security and data privacy.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p>Have questions? Contact us today.</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default LandingPage;
