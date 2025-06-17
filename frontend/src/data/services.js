const services = [
  {
    name: 'Aadhaar Card',
    description: 'Unique biometric identity number for Indian residents',
    eligibility: 'Resident of India with valid proof',
    link: 'https://uidai.gov.in/',
    documents: [
      'Proof of Identity (e.g., Passport, Voter ID, PAN)',
      'Proof of Address (e.g., Electricity Bill, Rent Agreement)',
      'Birth Certificate'
    ]
  },
  {
    name: 'PAN Card',
    description: 'Permanent Account Number used for tax and identity purposes',
    eligibility: 'Any Indian citizen or taxpayer',
    link: 'https://incometaxindia.gov.in/',
    documents: [
      'Proof of Identity (Passport, Voter ID, Aadhaar)',
      'Date of Birth Proof (e.g., Birth Certificate, SSLC)',
      'Recent passport-size photo'
    ]
  },
  {
    name: 'Passport',
    description: 'Official document for international travel',
    eligibility: 'Citizen of India',
    link: 'https://passportindia.gov.in/',
    documents: [
      'Aadhaar Card',
      'Utility Bill (Electricity, Water, Gas)',
      'Birth Certificate'
    ]
  },
  {
    name: 'Driving Licence',
    description: 'Official permit to drive vehicles',
    eligibility: 'Indian Citizen aged 18 or above',
    link: 'https://parivahan.gov.in/',
    documents: [
      'Passport size photo',
      'Address proof',
      'Age-Proof (e.g., birth certificate)'
    ]
  },
  {
    name: 'VoterID',
    description: 'Identity card for eligible voters',
    eligibility: 'Indian citizen who is 18 years or older',
    link: 'https://voterportal.eci.gov.in/',
    documents: [
      'Passport Photo',
      'Address Proof',
      'Age Proof',
      'Identity Proof'
    ]
  },
  {
    name: 'Ration Card',
    description: 'Document for subsidized food from the public distribution system',
    eligibility: 'Annual income less than ₹3 Lakhs',
    link: 'https://epds.telangana.gov.in/',
    documents: [
      'Application Form',
      'Address Proof',
      'Identity Proof',
      'Passport Photo'
    ]
  },
  {
    name: 'Marriage Certificate',
    description: 'Legal proof of marriage',
    eligibility: 'Bride 18+, Groom 21+, mutual consent required',
    link: 'https://registration.telangana.gov.in/',
    documents: [
      'Age Proof',
      'Address Proof',
      'Wedding Invitation (if available)'
    ]
  },
  {
    name: 'Birth Certificate',
    description: 'Official record of a person’s birth',
    eligibility: 'Births must be registered within 21 days',
    link: 'https://www.ghmc.gov.in/',
    documents: [
      'Proof of Birth from Hospital',
      'Parents ID Proofs',
      'Parents Marriage Certificate'
    ]
  },
  {
    name: 'Death Certificate',
    description: 'Official certificate of a person’s death',
    eligibility: 'Death must be reported within 21 days',
    link: 'https://ts.meeseva.telangana.gov.in/',
    documents: [
      'Application Form',
      'Proof of Birth',
      'Ration Card Copy',
      'Medical Certificate'
    ]
  },
  {
    name: 'Income Certificate',
    description: 'Proof of income used for availing schemes',
    eligibility: 'Resident of area and income proof',
    link: 'https://ts.meeseva.telangana.gov.in/',
    documents: [
      'ID Proof',
      'Address Proof',
      'Proof of Income',
      'Passport Photo',
      'Affidavit'
    ]
  },
  {
    name: 'EPFO',
    description: 'Provident fund scheme for salaried employees',
    eligibility: 'Employee in org with 20+ staff, salary ≤ ₹15,000',
    link: 'https://www.epfindia.gov.in/',
    documents: [
      'Aadhaar Card',
      'GST Certificate',
      'Leased Agreement',
      'License Proof'
    ]
  },
  {
    name: 'ESIC',
    description: 'Health insurance for employees',
    eligibility: 'Employee earning up to ₹21,000/month under ESI Act',
    link: 'https://www.esic.gov.in/',
    documents: [
      'GST Certificate',
      'Leased Agreement',
      'License Proof',
      'Employee Details'
    ]
  }
];

export default services;
