const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/health', (req, res) => {
  res.json({
    message: 'Primary Citizen API is running!',
    timestamp: new Date().toISOString(),
  });
});

// Test route for civic data
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Test endpoint working',
    data: {
      city: 'Annandale',
      state: 'Virginia',
      elections: ['2024 Presidential', '2025 Local'],
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
