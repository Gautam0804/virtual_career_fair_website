import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaMagic, FaUpload, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const UpgradeYourResumeFullBody = () => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setFeedback('');
      setDownloadReady(false);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleUpgrade = () => {
    if (!file) {
      alert('Please upload a resume first.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Simulate AI suggestion output
      setFeedback('✅ Your resume has a great structure.\n✅ Try adding quantified achievements.\n✅ Tailor it to each job.\n✅ Add more action verbs.');
      setLoading(false);
      setDownloadReady(true);
    }, 2000); // Simulate delay
  };

  const handleDownload = () => {
    const blob = new Blob([feedback || 'This is your upgraded resume feedback.'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume-feedback.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 text-white flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl font-semibold mb-6 text-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Upgrade Your Resume
        </motion.h2>

        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Enhance your resume with professional tips, AI-based suggestions, and instant improvements. Let us help you get noticed!
        </motion.p>

        {/* Upload Section */}
        <motion.div
          className="bg-white text-blue-600 p-8 rounded-xl shadow-lg max-w-md mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <label className="block mb-4 font-semibold">Upload your resume (PDF only):</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mb-4 border-2 border-blue-300 rounded-lg py-2 px-4 w-full text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {file && (
            <p className="text-sm text-green-600 mb-2">
              <FaCheckCircle className="inline mr-1" />
              {file.name} uploaded successfully.
            </p>
          )}

          <motion.button
            className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-md transform hover:scale-110 transition duration-200 ease-in-out mt-4 w-full"
            onClick={handleUpgrade}
            disabled={loading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" /> Analyzing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Upgrade Now <FaMagic className="inline ml-2" />
              </div>
            )}
          </motion.button>
        </motion.div>

        {/* Feedback Section */}
        {feedback && (
          <div className="bg-white text-blue-700 p-6 rounded-lg shadow-md max-w-md mx-auto whitespace-pre-line mt-4">
            <h3 className="text-xl font-semibold mb-2">AI Feedback:</h3>
            <p>{feedback}</p>
          </div>
        )}

        {/* Download Button */}
        {downloadReady && (
          <motion.button
            onClick={handleDownload}
            className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-200 w-full"
          >
            Download Feedback <FaFileDownload className="inline ml-2" />
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default UpgradeYourResumeFullBody;
