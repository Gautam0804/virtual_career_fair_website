// src/components/ResumeBuilder.jsx
import { motion } from 'framer-motion';
import { FaPencilAlt, FaRegFileAlt, FaMagic, FaCloudDownloadAlt } from 'react-icons/fa';

const ResumeBuilder = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✨ Build Your Perfect Resume
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl mb-12 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Use our smart tools & templates to craft a job-winning resume in minutes!
        </motion.p>

        <motion.div
          className="flex justify-center gap-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          {/* Create From Scratch - External Link */}
          <div className="bg-white/90 backdrop-blur-sm text-black p-8 rounded-3xl shadow-2xl w-80 hover:scale-105 transform transition duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-white opacity-20 z-0"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-5 text-yellow-600">
                <FaPencilAlt />
              </div>
              <h3 className="text-xl font-bold mb-3">Create From Scratch</h3>
              <p className="text-gray-700 mb-6">
                Start fresh and build a standout resume step by step with our guided builder.
              </p>
              <a
                href="https://www.canva.com/resumes/" // You can change this to any external resume builder
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-white py-2.5 px-6 rounded-full font-medium shadow-md hover:scale-110 transform transition"
              >
                Start Now <FaRegFileAlt className="inline ml-2" />
              </a>
            </div>
          </div>

          {/* Use Templates - External Link */}
          <div className="bg-white/90 backdrop-blur-sm text-black p-8 rounded-3xl shadow-2xl w-80 hover:scale-105 transform transition duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-white opacity-20 z-0"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-5 text-orange-600">
                <FaRegFileAlt />
              </div>
              <h3 className="text-xl font-bold mb-3">Use Templates</h3>
              <p className="text-gray-700 mb-6">
                Choose from professionally designed templates to get started quickly.
              </p>
              <a
                href="https://www.resumegenius.com/resume-templates" // Change this to your preferred template site
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white py-2.5 px-6 rounded-full font-medium shadow-md hover:scale-110 transform transition"
              >
                Browse Templates <FaMagic className="inline ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Optional Feature Highlights (same as before) */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <div className="bg-white/20 p-6 rounded-xl backdrop-blur-lg">
            <h4 className="text-xl font-bold mb-2 flex items-center">
              <FaMagic className="mr-2" /> AI Suggestions
            </h4>
            <p className="text-white/90">
              Get real-time AI tips to improve grammar, formatting, and impact.
            </p>
          </div>
          <div className="bg-white/20 p-6 rounded-xl backdrop-blur-lg">
            <h4 className="text-xl font-bold mb-2 flex items-center">
              <FaCloudDownloadAlt className="mr-2" /> Download in PDF
            </h4>
            <p className="text-white/90">
              Easily download your resume in high-quality PDF format for instant sharing.
            </p>
          </div>
          <div className="bg-white/20 p-6 rounded-xl backdrop-blur-lg">
            <h4 className="text-xl font-bold mb-2 flex items-center">
              <FaPencilAlt className="mr-2" /> Auto Formatting
            </h4>
            <p className="text-white/90">
              Let the tool handle spacing, font, and structure while you focus on content.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
