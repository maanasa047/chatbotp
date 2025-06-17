// File: frontend/src/pages/Chat.js
//import './styles/Chat.css'
// File: frontend/src/pages/Chat.js

import React, { useEffect, useState } from 'react';
import './Chat.css';
import services from '../data/services.js'; // or './data/services.js' depending on your folder

 // The parsed data from your .md file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setMessages([
      { role: 'bot', content: '👋 Welcome! Ask me about any government service like Aadhaar, PAN, Passport, etc. or type "list of services".' }
    ]);
  }, []);

 const getServiceInfo = (query) => {
  query = query.toLowerCase();
  return services.find(service =>
    query.includes(service.name.toLowerCase()) ||
    query.includes(`what is ${service.name.toLowerCase()}`) ||
    query.includes(`tell me about ${service.name.toLowerCase()}`) ||
    query.includes(`information about ${service.name.toLowerCase()}`)
  );
};

const handleUserMessage = (e) => {
  e.preventDefault();
  if (!input.trim()) return;

  const userMessage = input.trim();
  const lowerMsg = userMessage.toLowerCase();
  let botResponse = '';

  // Greetings
  if (['hi', 'hello', 'hey'].includes(lowerMsg)) {
    botResponse = '👋 Hello! How can I assist you with government services today?';
  }
  // List of services
  else if (
    lowerMsg.includes('list of services') ||
    lowerMsg.includes('available services') ||
    lowerMsg.includes('services')
  ) {
    const serviceNames = services.map(s => `- ${s.name}`).join('\n');
    botResponse = `📋 Here are the available services:\n${serviceNames}\n\nAsk me about any of these!`;
  }
  // Match specific service
  else {
    const service = getServiceInfo(lowerMsg);
    if (service) {
      botResponse = `🔹 **${service.name}**\n📄 Description: ${service.description}\n✅ Eligibility: ${service.eligibility}\n🔗 Link: ${service.link}\n📝 Required Documents:\n- ${service.documents.join('\n- ')}`;
    } else {
      botResponse = "❓ Sorry, I couldn't understand that. Try asking something like *What is Aadhaar?*, *Tell me about PAN*, or type *list of services*.";
    }
  }

  setMessages(prev => [
    ...prev,
    { role: 'user', content: userMessage },
    { role: 'bot', content: botResponse }
  ]);
  setInput('');
};

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.role === 'user' ? 'user' : 'bot'}`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserMessage} className="chat-input-form">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-send">Send</button>
      </form>
    </div>
  );
};

export default Chat;
