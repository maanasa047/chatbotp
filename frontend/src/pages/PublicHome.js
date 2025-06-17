import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './publicHome.css'; // Make sure this file exists

const services = [
  {
    name: 'Document Assistance',
    isIntro: true,
    description:
      'Welcome to the Government Document Assistance Portal. Here you can get guidance on applying for important Indian documents like PAN Card, Passport, Driving License, Voter ID, and more. Select a document from the sidebar to learn more.',
  },
  {
    name: 'PAN Card',
    description:
      'A PAN card is a unique 10-digit alphanumeric identifier issued by the Income Tax Department.',
    eligibility: 'Indian citizen with income.',
    documents: ['Proof of identity', 'Proof of address', 'Proof of date of birth'],
    link: 'https://www.incometax.gov.in/iec/foportal',
  },
  {
    name: 'Passport',
    description:
      'A passport is an official document issued by the Indian government for international travel.',
    eligibility: 'Indian citizen with valid ID proof.',
    documents: ['Proof of address', 'Proof of identity', 'Photographs'],
    link: 'https://www.passportindia.gov.in/',
  },
  {
    name: 'Voter ID',
    description:
      'Identity document issued by the Election Commission for voting.',
    eligibility: 'Indian citizen aged 18 or above.',
    documents: ['Age proof', 'Address proof', 'Passport photo'],
    link: 'https://voters.eci.gov.in/',
  },
];

const PublicHome = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <div className="public-home-container">
      {/* Header */}
      <div className="header">
        <div className="title">Document Guidance Portal</div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Main body (Sidebar + Content) */}
      <div className="main-body">
        {/* Sidebar */}
        <div className="sidebar">
          <h2 className="sidebar-title">Document Assistance</h2>
          <ul className="service-list">
            {services.map((service, index) => (
              <li
                key={index}
                className={selectedService.name === service.name ? 'active' : ''}
                onClick={() => setSelectedService(service)}
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="content">
          {selectedService.isIntro ? (
            <div className="intro-box">
              <h2>{selectedService.name}</h2>
              <p>{selectedService.description}</p>
              <p>Please select a document from the left to view detailed assistance.</p>
            </div>
          ) : (
            <>
              <h2>{selectedService.name} Assistance</h2>
              <p className="desc">{selectedService.description}</p>
              <div className="info-box">
                <h4>Eligibility</h4>
                <p>{selectedService.eligibility}</p>

                <h4>Required Documents</h4>
                <ul>
                  {selectedService.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>

                <a
                  href={selectedService.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  Visit Official Site
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicHome;
