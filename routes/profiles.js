const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Create a profile
router.post('/', async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.status(201).json({ message: 'Profile created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create profile' });
  }
});

module.exports = router;
