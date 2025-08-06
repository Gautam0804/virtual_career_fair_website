// ViewProfiles.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profiles")
      .then(res => setProfiles(res.data))
      .catch(err => console.error('Error fetching profiles', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">All User Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profiles.map(profile => (
          <div key={profile._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Experience:</strong> {profile.experience}</p>
            <p><strong>Skills:</strong> {profile.skills}</p>
            <p><strong>Education:</strong> {profile.education}</p>
            <a href={profile.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Resume</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProfiles;
