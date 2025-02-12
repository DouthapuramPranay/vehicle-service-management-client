import React, { useState } from 'react';
import './styles.css';
import Footer from './Footer';

const services = [
  {
    image: 'https://www.shutterstock.com/image-vector/oil-change-icon-logo-vector-260nw-1568039914.jpg',
    title: 'Oil Change',
    description: 'Regular oil changes to keep your vehicle running smoothly.',
  },
  {
    image: 'https://img.freepik.com/premium-vector/people-set-profession-technician_344186-732.jpg',
    title: 'Tire Rotation',
    description: 'Regular tire rotation to ensure even tread wear and extend tire life.',
  },
  {
    image: 'https://img.freepik.com/free-vector/auto-mechanicconcept-illustration_114360-16748.jpg',
    title: 'Vehicle Inspection',
    description: 'Comprehensive vehicle inspections to identify potential issues before they become major problems.',
  },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="navbar">
          <div className="logo-container">
            <img 
              src="data:image/png;base64,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" 
              alt="Logo" 
              className="header-logo" 
            />
          </div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#login">Login</a>
            <a href="#register">Register</a>
          </nav>
        </div>
        
        <div className="header-content">
          <h1 className="title">Vehicle Service Management</h1>
          <h2 className="subtitle">Expert Care for Your Vehicle!</h2>
          {/* Tagline removed as requested */}
        </div>
        <div className="header-image">
          <img 
            src="https://img.freepik.com/free-vector/dad-son-fixing-car-together-white-background_1308-78114.jpg"alt="Vehicle Service" 
          />
        </div>
        <div className="explore-container">
          <button onClick={() => scrollToSection('services')} className="explore-button">
            Explore Services
          </button>
        </div>
      </header>

      <section id="services" className="services">
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <img src={service.image} className="service-image" alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="service-form" className="service-form">
        <h2>Schedule a Service</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /> 

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="service-type">Service Type:</label>
          <select id="service-type" name="service-type">
            <option value="oil-change">Oil Change</option>
            <option value="tire-rotation">Tire Rotation</option>
            <option value="vehicle-inspection">Vehicle Inspection</option>
          </select>

          <button type="submit">Schedule</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default App;
