import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      const querySnapshot = await getDocs(collection(db, "resumes"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setResumes(data);
    };
    fetchResumes();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Resumes</h2>
      {resumes.map((res, idx) => (
        <div key={idx} className="border p-3 mb-2">
          <p><strong>Name:</strong> {res.name}</p>
          <p><strong>Skills:</strong> {res.skills}</p>
        </div>
      ))}
    </div>
  );
}
