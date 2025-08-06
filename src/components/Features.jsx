import { useState } from 'react';
import { FaSearch, FaVideo, FaComments, FaFileAlt, FaMagic, FaTachometerAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch size={28} />,
    title: 'Smart Job Matching',
    description: 'Automatically match candidates with relevant roles based on skills.',
    color: 'from-indigo-500 to-purple-600',
    link: '/job-matching',
    details: 'Aapke skills aur experience ke adhar par job automatically match ho jayengi. Is feature se aapko har ek role ke liye instant suggestions milenge.',
  },
  {
    icon: <FaVideo size={28} />,
    title: 'Live Video Chat',
    description: 'Connect with recruiters in real-time through built-in video calling.',
    color: 'from-pink-500 to-red-500',
    link: '/video-chat',
    details: 'Recruiters ke saath video call karke apni skills aur qualifications directly showcase karein.',
  },
  {
    icon: <FaComments size={28} />,
    title: 'Instant Messaging',
    description: 'Live chat with recruiters and HR for instant queries.',
    color: 'from-green-400 to-emerald-600',
    link: '/instant-chat',
    details: 'HR ya recruiters ke saath instant messaging karne ke liye live chat ka use karein.',
  },
  {
    icon: <FaFileAlt size={28} />,
    title: 'Resume Screening',
    description: 'Get instant feedback and auto rejection on incomplete resumes.',
    color: 'from-yellow-400 to-orange-500',
    link: '/resume-screening',
    details: 'Resume ko upload karke instant feedback lein. Agar aapka resume incomplete hoga toh automatically reject ho jayega.',
  },
  {
    icon: <FaMagic size={28} />,
    title: 'AI Resume Builder',
    description: 'Build or fix your resume instantly using AI suggestions.',
    color: 'from-blue-400 to-cyan-500',
    link: '/ai-resume-builder',
    details: 'AI ka use karke apna resume instantly banayein ya existing resume ko improve karein.',
  },
  {
    icon: <FaTachometerAlt size={28} />,
    title: 'Candidate Dashboard',
    description: 'Track profile strength, job applications, and resume status in one place.',
    color: 'from-teal-500 to-green-600',
    link: '/dashboard',
    details: 'Is dashboard me aap apna profile completeness, job applications ka status, resume approval/rejection sab kuch track kar sakte hain.',
  },
];

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const openModal = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-white drop-shadow-lg">
        🚀 Platform Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${feature.color} text-white p-6 rounded-2xl shadow-xl transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
            onClick={() => openModal(feature)}
          >
            <div className="absolute -top-5 -left-5 bg-white bg-opacity-10 rounded-full p-3 backdrop-blur-md shadow-md">
              {feature.icon}
            </div>
            <div className="pl-10 pt-4">
              <h3 className="text-2xl font-bold mb-2 tracking-wide">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
              <a
                href={feature.link}
                className="text-indigo-200 hover:underline mt-4 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">{selectedFeature.title}</h3>
            <p className="mb-4">{selectedFeature.details}</p>
            <div className="flex justify-end">
              <button
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                onClick={closeModal}
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

export default Features;
