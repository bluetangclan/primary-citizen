const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
const aboutRoutes = require('./routes/about');

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    message: 'Primary Citizen API is running!',
    port: PORT,
    timestamp: new Date().toISOString(),
    status: 'healthy',
  });
});

// Routes
app.use('/api/about', aboutRoutes);

// Basic health check (root endpoint)
app.get('/', (req, res) => {
  res.json({ message: 'Primary Citizen Backend API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Civic Data Endpoint
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Test endpoint working!',
    timestamp: new Date().toISOString(),
    sampleData: {
      governingBodies: ['City Council', 'School Board', 'County Commission'],
      upcomingElections: ['November 2024 General Election'],
      testFeatures: [
        'Database connectivity',
        'CRUD operations',
        'Data validation',
      ],
    },
  });
});
