import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState<any>(null);
  const [civicData, setCivicData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test both backend endpoints
    Promise.all([
      axios.get('http://localhost:3001/api/health'),
      axios.get('http://localhost:3001/api/test')
    ])
    .then(([healthResponse, testResponse]) => {
      setBackendData(healthResponse.data);
      setCivicData(testResponse.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Backend connection failed:', error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🗳️ Primary Citizen</h1>
        <p>Your Civic Engagement Platform</p>
        
        {loading ? (
          <p>Connecting to backend...</p>
        ) : (
          <div style={{ textAlign: 'left', maxWidth: '600px' }}>
            {backendData && (
              <div style={{ marginBottom: '20px', padding: '10px', background: '#282c34', border: '1px solid #61dafb' }}>
                <h3>✅ Backend Status</h3>
                <p>Message: {backendData.message}</p>
                <p>Connected at: {new Date(backendData.timestamp).toLocaleString()}</p>
              </div>
            )}
            
            {civicData && (
              <div style={{ padding: '10px', background: '#282c34', border: '1px solid #61dafb' }}>
                <h3>📍 Your Location</h3>
                <p>City: {civicData.data.city}</p>
                <p>State: {civicData.data.state}</p>
                <h4>Upcoming Elections:</h4>
                <ul>
                  {civicData.data.elections.map((election: string, index: number) => (
                    <li key={index}>{election}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;