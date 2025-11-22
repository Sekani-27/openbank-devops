import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiStatus, setApiStatus] = useState('Checking...');

  useEffect(() => {
    // Test backend connection
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => setApiStatus(data.message))
      .catch(() => setApiStatus('Backend not connected'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>OpenBank Cloud Simulation</h1>
        <p className="subtitle">IBM DevOps & Software Engineering Edition</p>
        
        <div className="status-card">
          <h3>System Status</h3>
          <p>Backend API: <span className="status">{apiStatus}</span></p>
          <p>Week: <strong>1 - Initial Setup</strong></p>
        </div>

        <div className="features">
          <h3>Coming Soon:</h3>
          <ul>
            <li>User Authentication</li>
            <li>Account Management</li>
            <li>Deposits & Withdrawals</li>
            <li>Transaction History</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
