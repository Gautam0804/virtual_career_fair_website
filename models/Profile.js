const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  experience: String,
  skills: String,
  education: String,
  resumeLink: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
