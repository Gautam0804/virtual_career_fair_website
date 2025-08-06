import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechGenius',
    location: 'Remote',
    salary: '₹6 LPA - ₹10 LPA',
    type: 'Full Time',
    description: 'Frontend dev with React, Tailwind CSS, and Vite expertise.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeVerse',
    location: 'Bangalore',
    salary: '₹8 LPA - ₹14 LPA',
    type: 'Hybrid',
    description: 'Backend developer with Node.js, Express, and MongoDB.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'DesignHive',
    location: 'Delhi',
    salary: '₹5 LPA - ₹9 LPA',
    type: 'Remote',
    description: 'Creative designer with Figma, Adobe XD skills.',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'CloudSync',
    location: 'Pune',
    salary: '₹10 LPA - ₹16 LPA',
    type: 'Onsite',
    description: 'Experience with Docker, Kubernetes, and CI/CD tools.',
  },
  {
    id: 5,
    title: 'Mobile App Developer',
    company: 'Appify',
    location: 'Remote',
    salary: '₹7 LPA - ₹12 LPA',
    type: 'Remote',
    description: 'Flutter or React Native developer needed.',
  },
  {
    id: 6,
    title: 'Full Stack Developer',
    company: 'StackTech',
    location: 'Mumbai',
    salary: '₹9 LPA - ₹15 LPA',
    type: 'Hybrid',
    description: 'MERN stack full stack developer role.',
  },
  {
    id: 7,
    title: 'Data Scientist',
    company: 'DataWiz',
    location: 'Chennai',
    salary: '₹12 LPA - ₹20 LPA',
    type: 'Remote',
    description: 'Python, ML models, and data analysis required.',
  },
  {
    id: 8,
    title: 'QA Engineer',
    company: 'BugFree',
    location: 'Noida',
    salary: '₹5 LPA - ₹8 LPA',
    type: 'Onsite',
    description: 'Manual and automation testing experience.',
  },
  {
    id: 9,
    title: 'System Analyst',
    company: 'TechScope',
    location: 'Hyderabad',
    salary: '₹6 LPA - ₹9 LPA',
    type: 'Hybrid',
    description: 'Requirement gathering and analysis expert.',
  },
  {
    id: 10,
    title: 'Project Manager',
    company: 'SprintWorks',
    location: 'Gurgaon',
    salary: '₹14 LPA - ₹22 LPA',
    type: 'Onsite',
    description: 'Agile methodologies, team management required.',
  },
];

const JobListings = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const scroll = setInterval(() => {
      const container = document.getElementById('slider-track');
      if (container) {
        container.scrollLeft += 1; // Slide right to left effect
      }
    }, 50); // Adjust speed of the slide
    return () => clearInterval(scroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10">🔥 Hot Job Listings</h2>
      <div className="overflow-x-hidden">
        <motion.div
          id="slider-track"
          className="flex space-x-6 px-6 whitespace-nowrap"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 30, // Adjust the duration for speed
            ease: 'linear',
            repeat: Infinity, // Infinite loop
          }}
        >
          {jobData.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-sm">{job.company}</p>
              <p className="text-xs mt-1 text-gray-200">
                {job.location} • {job.type}
              </p>
              <p className="text-green-300 font-bold mt-4">{job.salary}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-3">{selectedJob.title}</h3>
            <p className="text-gray-700 mb-2">{selectedJob.company} • {selectedJob.location} • {selectedJob.type}</p>
            <p className="text-green-700 font-semibold mb-4">{selectedJob.salary}</p>
            <p className="mb-4">{selectedJob.description}</p>
            <div className="text-right">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobListings;
