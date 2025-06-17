import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: 'Aadhaar Card',
    image: 'https://cdn-icons-png.flaticon.com/512/6001/6001811.png',
    documents: ['Proof of Identity', 'Proof of Address', 'Birth Certificate'],
    eligibility: 'Resident of India with valid proof',
    link: 'https://uidai.gov.in',
  },
  {
    id: 2,
    name: 'PAN Card',
    image: 'https://cdn-icons-png.flaticon.com/512/9437/9437097.png',
    documents: ['Proof of Identity', 'Date of Birth proof', 'Photograph'],
    eligibility: 'Any Indian citizen or taxpayer',
    link: 'https://www.incometax.gov.in/iec/foportal',
  },
  {
    id: 3,
    name: 'Passport',
    image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
    documents: ['Birth Certificate', 'Address Proof', 'Photo ID'],
    eligibility: 'Indian Citizen with all necessary ID proof',
    link: 'https://www.passportindia.gov.in/',
  },
  {
    id: 4,
    name: 'Driving Licence',
    image: 'https://cdn-icons-png.flaticon.com/512/1016/1016617.png',
    documents: ['Passport size photo', 'Address proof', 'Age-Proof'],
    eligibility: 'Indian Citizen equal or above 18',
    link: 'https://parivahan.gov.in/parivahan/',
  },
  {
    id: 5,
    name: 'Birth Certificate',
    image: 'https://cdn-icons-png.flaticon.com/512/10564/10564244.png',
    documents: ['Proof of Birth from Hospital', 'Parents ID Proofs', 'Parents Marriage Certificate'],
    eligibility: 'Birth must be registered within 21 days',
    link: 'https://www.ghmc.gov.in/Birth.aspx',
  },
  {
    id: 6,
    name: 'VoterID',
    image: 'https://cdn-icons-png.flaticon.com/512/4107/4107886.png',
    documents: ['Passport Photo', 'Address Proof', 'Age Proof', 'Identity Proof'],
    eligibility: 'Citizen aged 18+ on Jan 1, Apr 1, or Jul 1',
    link: 'https://voters.eci.gov.in/',
  },
  {
    id: 7,
    name: 'Ration Card',
    image: 'https://cdn-icons-png.flaticon.com/512/10564/10564249.png',
    documents: ['Application Form', 'Utility Bills', 'Identity Proof', 'Passport Photo'],
    eligibility: 'Annual Income less than 3 Lakhs',
    link: 'https://epds.telangana.gov.in/FoodSecurityAct/',
  },
  {
    id: 8,
    name: 'Marriage Certificate',
    image: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    documents: ['Age Proof', 'Address Proof', 'Wedding Invitation'],
    eligibility: 'Groom 21+, Bride 18+, mutual consent',
    link: 'https://registration.telangana.gov.in/marriageRegistration.htm',
  },
  {
    id: 9,
    name: 'Death Certificate',
    image: 'https://cdn-icons-png.flaticon.com/512/10564/10564248.png',
    documents: ['Application Form', 'Proof of Birth', 'Ration Card Copy', 'Medical Certificate'],
    eligibility: 'Must be reported within 21 days',
    link: 'https://ts.meeseva.telangana.gov.in/meeseva/',
  },
  {
    id: 10,
    name: 'Income Certificate',
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991134.png',
    documents: ['ID Proof', 'Address Proof', 'Income Proof', 'Photo', 'Affidavit'],
    eligibility: 'Resident of Area with valid income proof',
    link: 'https://ts.meeseva.telangana.gov.in/meeseva/home.htm',
  },
  {
    id: 11,
    name: 'EPFO',
    image: 'https://cdn-icons-png.flaticon.com/512/681/681392.png',
    documents: ['Aadhaar', 'GST Cert.', 'Lease Agreement', 'License Proof'],
    eligibility: 'Salaried employee in company with 20+ staff',
    link: 'https://www.epfindia.gov.in/site_en/index.php',
  },
  {
    id: 12,
    name: 'ESIC',
    image: 'https://cdn-icons-png.flaticon.com/512/10450/10450950.png',
    documents: ['GST Cert.', 'Lease Agreement', 'License Proof', 'Employee Details'],
    eligibility: 'Wages up to ₹21,000 in ESI covered companies',
    link: 'https://esicstaging.esic.in/ESICInsurance1/ESICInsurancePortal/Signup.aspx',
  },
];

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');

    if (!isLoggedIn || !storedUsername) {
      navigate('/login');
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
  };

  const toggleDetails = (service) => {
    setSelectedService((prev) => (prev?.id === service.id ? null : service));
  };

  return (
    <div className="page">
      <div className="sidebar">
        <div className="profileBox">
          <img src="https://via.placeholder.com/80" alt="Profile" className="avatar" />
          <h3 className="username">{username}</h3>
        </div>
        <button onClick={handleLogout} className="logoutButton">Logout</button>
        <button onClick={() => window.open('/chat', '_blank')} className="chatButton">
          Open Chat
        </button>
      </div>

      <div className="mainContent">
        <h1 className="title">Welcome to Government Services Chatbot</h1>
        <p className="description">Easily access documents, eligibility, and links for 10+ Government Services.</p>

        <div className="cardGrid">
          {services.map((service) => (
            <div key={service.id} className="card" onClick={() => toggleDetails(service)}>
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              {selectedService?.id === service.id && (
                <div className="details">
                  <strong>Documents Required:</strong>
                  <ul>
                    {service.documents.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                  <p><strong>Eligibility:</strong> {service.eligibility}</p>
                  <p>
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      Visit Official Site
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
