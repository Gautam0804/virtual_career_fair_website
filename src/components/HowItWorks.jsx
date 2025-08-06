import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPen,
  FaRegHandshake,
  FaVideo,
  FaBell,
  FaClipboardCheck,
  FaCrown,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaPen size={30} />,
    title: 'Create Your Profile',
    description: 'Sign up, fill in your details, and showcase your skills & experience.',
    color: 'from-indigo-500 to-purple-600',
    details: 'Aap apni details fill karke apna profile banayein aur apne skills aur experience ko showcase karein.',
    feature: 'Yahaan apne resume ko upload karke aapke skills ko recruiters ke saamne laa sakte hain.',
    extraFeature: 'Aap apne portfolio links bhi add kar sakte hain, jisse recruiters ko aapka kaam dekhne mein madad milegi.',
    link: '/create-profile',
  },
  {
    icon: <FaRegHandshake size={30} />,
    title: 'Interact with Recruiters',
    description: 'Connect via video calls, live chat, or attend job-related webinars.',
    color: 'from-pink-500 to-red-500',
    details: 'Video call ya live chat ke zariye recruiters se interact karein ya job-related webinars mein shaamil ho.',
    feature: 'Aap recruiters ke saath live chat karke apne doubts clear kar sakte hain aur unse direct feedback paa sakte hain.',
    extraFeature: 'Aap directly recruiters ke saath video calls schedule kar sakte hain aur apne skills aur experience ko directly showcase kar sakte hain.',
    link: '/recruiter-chat',
  },
  {
    icon: <FaVideo size={30} />,
    title: 'Apply for Jobs',
    description: 'Apply to jobs with one-click application and get instant notifications.',
    color: 'from-green-400 to-emerald-600',
    details: 'Ek click mein jobs ke liye apply karein aur instantly notifications paayein.',
    feature: 'Aap apne job applications ka status track kar sakte hain aur agar koi job match karti hai toh instant notification milega.',
    extraFeature: 'Jab bhi koi nayi job post hoti hai, aapko instant notifications milte hain taaki aap turant apply kar sakein.',
    link: '/job-listings',
  },
  {
    icon: <FaBell size={30} />,
    title: 'Job Alerts & Notifications',
    description: 'Get instant notifications when a matching job is posted.',
    color: 'from-teal-400 to-green-600',
    details: 'Aapko har job jo aapke profile se match karti hai, uska instant notification milta hai.',
    feature: 'Job seekers ko instant job alerts milte hain jab koi matching job post hoti hai.',
    extraFeature: 'Is feature se aap kabhi bhi job post miss nahi karenge, aur aap turant apply kar sakte hain.',
    link: '/job-alerts',
  },
  {
    icon: <FaClipboardCheck size={30} />,
    title: 'Skill Assessment & Badging',
    description: 'Take skill assessments and earn badges to boost your profile.',
    color: 'from-yellow-400 to-orange-500',
    details: 'Skill assessments complete karke aap badges earn kar sakte hain jo aapki profile ko shine karega.',
    feature: 'Ye feature aapko apne skills ko proof dene ka mauka deta hai, jisse recruiters ko aapke skills par bharosa hoga.',
    extraFeature: 'Aapko badges milenge jo aapke expertise ko highlight karenge, aur aapko jobs ke liye preference milegi.',
    link: '/skill-assessments',
  },
  {
    icon: <FaCrown size={30} />,
    title: 'Premium Subscription',
    description: 'Unlock exclusive features with our affordable premium plans.',
    color: 'from-rose-500 to-pink-600',
    details: 'Premium plan activate karke aapko kuch exclusive features milenge jaise instant job match, recruiter priority visibility aur aur bhi kaafi kuch.',
    feature: 'Aap premium plan ke through apne chances badha sakte hain top companies ke saamne aane ka.',
    extraFeature: 'Subscription lene ke baad aapko priority support aur instant application review milega.',
    link: '/subscription',
  },
];

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const openModal = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStep(null);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${step.color} text-white p-6 rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            onClick={() => openModal(step)}
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p>{step.description}</p>
            <a href={step.link} className="text-indigo-200 hover:underline mt-4 inline-block">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedStep && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-xl text-black">
            <h3 className="text-2xl font-semibold mb-4">{selectedStep.title}</h3>
            <p className="mb-4">{selectedStep.details}</p>
            <p className="font-semibold text-lg mb-4">{selectedStep.feature}</p>
            <p className="font-semibold text-lg mb-4">{selectedStep.extraFeature}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={selectedStep.link}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-center"
              >
                Go to {selectedStep.title}
              </a>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
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

export default HowItWorks;
