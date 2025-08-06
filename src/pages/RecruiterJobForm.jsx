import React, { useState } from 'react';
import axios from 'axios';

const RecruiterJobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    salary: '',
    location: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send job details to the backend
    axios.post('http://localhost:5000/api/jobs/create', jobDetails)
      .then(response => {
        console.log('Job posted:', response.data);
      })
      .catch(error => {
        console.error('There was an error posting the job!', error);
      });
  };

  return (
    <div className="container mx-auto mt-10 p-5 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold mb-5">Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobDetails.title}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Job Description</label>
          <textarea
            name="description"
            value={jobDetails.description}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Salary</label>
          <input
            type="text"
            name="salary"
            value={jobDetails.salary}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Location</label>
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleInputChange}
            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Post Job</button>
      </form>
    </div>
  );
};

export default RecruiterJobForm;
