import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaIdCard,
  FaPassport,
  FaCar,
  FaBaby,
  FaVoteYea,
  FaShoppingBag,
  FaRing,
  FaSkullCrossbones,
  FaMoneyCheckAlt,
  FaBuilding,
  FaHospitalAlt,
  FaAsterisk,
} from 'react-icons/fa';

const serviceIcons = {
  Aadhaar: <FaAsterisk size={40} color="#2c3e50" />,
  PAN: <FaIdCard size={40} color="#2c3e50" />,
  Passport: <FaPassport size={40} color="#2c3e50" />,
  'Driving Licence': <FaCar size={40} color="#2c3e50" />,
  'Birth Certificate': <FaBaby size={40} color="#2c3e50" />,
  VoterID: <FaVoteYea size={40} color="#2c3e50" />,
  'Ration Card': <FaShoppingBag size={40} color="#2c3e50" />,
  'Marriage Certificate': <FaRing size={40} color="#2c3e50" />,
  'Death Certificate': <FaSkullCrossbones size={40} color="#2c3e50" />,
  'Income Certificate': <FaMoneyCheckAlt size={40} color="#2c3e50" />,
  EPFO: <FaBuilding size={40} color="#2c3e50" />,
  ESIC: <FaHospitalAlt size={40} color="#2c3e50" />,
};

const services = [
  {
    id: 1,
    name: 'Aadhaar',
    documents: ['Proof of Identity', 'Proof of Address', 'Birth Certificate'],
    eligibility: 'Resident of India with valid proof',
    link: 'https://uidai.gov.in',
  },
  {
    id: 2,
    name: 'PAN',
    documents: ['Proof of Identity', 'Date of Birth proof', 'Photograph'],
    eligibility: 'Any Indian citizen or taxpayer',
    link: 'https://www.incometax.gov.in/iec/foportal',
  },
  {
    id: 3,
    name: 'Passport',
    documents: ['Proof of Address', 'Proof of Date of Birth', 'Photo ID', 'Photograph'],
    eligibility: 'Indian citizens with valid documents',
    link: 'https://www.passportindia.gov.in/',
  },
  {
    id: 4,
    name: 'Driving Licence',
    documents: ['Passport size photo', 'Address proof ', 'Age-Proof'],
    eligibility: 'Indian Citizen equal or above 18',
    link: 'https://parivahan.gov.in/parivahan/',
  },
  {
    id: 5,
    name: 'Birth Certificate',
    documents: ['Proof of Birth from Hospital', 'Parents ID Proofs', 'Marriage Certificate'],
    eligibility: 'Births must be registered within 21 days',
    link: 'https://www.ghmc.gov.in/Birth.aspx',
  },
  {
    id: 6,
    name: 'VoterID',
    documents: ['Passport Photo', 'Address Proof', 'Age Proof', 'Identity Proof'],
    eligibility: 'Indian citizen 18 years or older on qualifying date',
    link: 'https://voters.eci.gov.in/',
  },
  {
    id: 7,
    name: 'Ration Card',
    documents: ['Application Form', 'Address Proof', 'Identity Proof', 'Photo'],
    eligibility: 'Annual Income less than 3 Lakhs',
    link: 'https://epds.telangana.gov.in/FoodSecurityAct/',
  },
  {
    id: 8,
    name: 'Marriage Certificate',
    documents: ['Age Proof', 'Address Proof', 'Wedding Invitation if any'],
    eligibility: 'Groom ≥ 21 years, Bride ≥ 18 years, mutual consent',
    link: 'https://registration.telangana.gov.in/marriageRegistration.htm',
  },
  {
    id: 9,
    name: 'Death Certificate',
    documents: ['Application Form', 'Proof of Birth', 'Ration Card Copy', 'Medical Certificate'],
    eligibility: 'Death must be reported within 21 days',
    link: 'https://ts.meeseva.telangana.gov.in/meeseva/',
  },
  {
    id: 10,
    name: 'Income Certificate',
    documents: ['ID Proof', 'Address Proof', 'Proof of Income', 'Photograph', 'Affidavit'],
    eligibility: 'Resident of area with income proof',
    link: 'https://ts.meeseva.telangana.gov.in/meeseva/home.htm',
  },
  {
    id: 11,
    name: 'EPFO',
    documents: ['Aadhaar', 'GST Certificate', 'Lease Agreement', 'License Proof'],
    eligibility: 'Employee in company with 20+ staff, salary ≤ ₹15,000',
    link: 'https://www.epfindia.gov.in/site_en/index.php',
  },
  {
    id: 12,
    name: 'ESIC',
    documents: ['GST Certificate', 'Lease Agreement', 'License Proof', 'Employee Details'],
    eligibility: 'Wages ≤ ₹21,000 in ESI-covered organization',
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
    <div style={styles.page}>
      <div style={styles.sidebar}>
        <div style={styles.profileBox}>
          <img src="https://via.placeholder.com/80" alt="Profile" style={styles.avatar} />
          <h3 style={styles.username}>{username}</h3>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        <button onClick={() => window.open('/chat', '_blank')} style={styles.chatButton}>
          Open Chat
        </button>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>Welcome to Government Services Chatbot</h1>
        <p style={styles.description}>Explore 12+ Services with official links and documentation info</p>

        <div style={styles.cardGrid}>
          {services.map((service) => (
            <div key={service.id} style={styles.card} onClick={() => toggleDetails(service)}>
              <div style={styles.cardIcon}>
                {serviceIcons[service.name] || <FaAsterisk size={40} />}
              </div>
              <h3 style={styles.cardTitle}>{service.name}</h3>
              {selectedService?.id === service.id && (
                <div style={styles.details}>
                  <strong>Documents:</strong>
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

const styles = {
  page: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
  },
  profileBox: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  username: {
    fontSize: '1rem',
  },
  logoutButton: {
    marginTop: 'auto',
    marginBottom: '10px',
    padding: '8px 16px',
    backgroundColor: '#e74c3c',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  },
  chatButton: {
    padding: '8px 16px',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    marginBottom: '30px',
  },
  mainContent: {
    flexGrow: 1,
    padding: '40px',
    background: '#f4f6f8',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '8px',
  },
  description: {
    marginBottom: '24px',
    fontSize: '1rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '14px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    textAlign: 'center',
    transition: '0.3s',
  },
  cardIcon: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1rem',
    margin: '4px 0',
  },
  details: {
    marginTop: '8px',
    textAlign: 'left',
    fontSize: '0.85rem',
  },
};

export default Home; 