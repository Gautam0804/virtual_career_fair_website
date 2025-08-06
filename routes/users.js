const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Mock users (for simplicity, replace with database later)
const users = [];

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
