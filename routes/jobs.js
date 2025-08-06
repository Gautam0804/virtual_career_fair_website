const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// GET all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// Seed route (for testing/demo)
router.post('/seed', async (req, res) => {
  try {
    const sampleJobs = [
      {
        title: 'Frontend Developer',
        description: 'Build beautiful UIs with React.',
        salary: '$4000/month',
        location: 'Remote',
      },
      {
        title: 'Backend Developer',
        description: 'Develop REST APIs using Node.js.',
        salary: '$5000/month',
        location: 'Bangalore, India',
      },
    ];
    await Job.insertMany(sampleJobs);
    res.status(200).json({ message: 'Sample jobs inserted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert jobs' });
  }
});

module.exports = router;
