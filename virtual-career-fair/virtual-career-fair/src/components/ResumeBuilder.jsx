import { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function ResumeBuilder() {
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [file, setFile] = useState(null);

  const handleSave = async () => {
    // Save resume details in Firestore
    await addDoc(collection(db, "resumes"), {
      name,
      skills,
      timestamp: new Date()
    });
    alert("Resume Saved!");

    // Save resume file to Firebase Storage
    if (file) {
      const fileRef = ref(storage, `resumes/${file.name + uuidv4()}`);
      await uploadBytes(fileRef, file);
      alert("File uploaded successfully!");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Build Your Resume</h2>
      <input className="border p-2 mb-3 w-full" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
      <textarea className="border p-2 mb-3 w-full" placeholder="Your Skills" onChange={(e) => setSkills(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-2 mb-3 w-full" />
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">Save Resume</button>
    </div>
  );
}
