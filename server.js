const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobs');
const profileRoutes = require('./routes/profiles'); // ✅ Yahi pe ek baar import karo

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/profiles', profileRoutes); // ✅ Bas yaha use karo

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Job Platform API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
