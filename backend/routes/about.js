const express = require('express');
const router = express.Router();

// GET /api/about - Returns information about the app
router.get('/', (req, res) => {
  res.json({
    appName: 'Primary Citizen',
    version: '1.0.0',
    description:
      'Primary citizen is a reference for constituents who want to know who all of their elected representatives are, what they do, when they are elected, and when they meet.',
    mission: 'We make civic participation easy for busy people.',
    features: [
      'Know who all of your representitives are from President to dog catcher.',
      'Know what they do and when they meet.',
      'Never miss a primary or general election.',
      'Get reminders before government meetings, primaries, and genderal elections.',
    ],
    contact: {
      email: 'chris@impatienthealth.com',
      github: 'https://github.com/bluetangclan/primary-citizen',
    },
    lastUpdated: new Date().toISOString(),
  });
});

module.exports = router;
