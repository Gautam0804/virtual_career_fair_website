import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileUpload, FaMagic, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const UpgradeResume = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [downloadReady, setDownloadReady] = useState(false);

  // Handle file upload
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && (uploadedFile.type === 'application/pdf' || uploadedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(uploadedFile);
      setFeedback('');
      setDownloadReady(false);
    } else {
      alert('Please upload a valid PDF or DOCX file.');
    }
  };

  // Simulate resume analysis
  const handleAnalyze = () => {
    if (!file) {
      alert('Please upload a resume first.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Simulated AI feedback
      setFeedback('✅ Your resume has a great structure!\n✅ Consider adding more quantified achievements.\n✅ Tailor your resume for specific job roles.\n✅ Add action verbs to highlight your accomplishments.');
      setLoading(false);
      setDownloadReady(true);
    }, 2000); // Simulate delay
  };

  // Download feedback as a text file
  const handleDownload = () => {
    const blob = new Blob([feedback || 'This is your resume feedback.'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume-feedback.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0e7490] to-[#06b6d4] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ✨ Supercharge Your Resume with AI
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl mb-12 text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Upload your resume and let our AI tool instantly suggest improvements, scan for missing skills, and optimize formatting.
        </motion.p>

        <motion.div
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 max-w-xl mx-auto shadow-2xl hover:shadow-cyan-400/40 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white/20 p-5 rounded-full text-cyan-300 text-4xl drop-shadow animate-pulse">
              <FaMagic />
            </div>
            <h3 className="text-2xl font-bold">Get Instant Resume Feedback</h3>
            <p className="text-white/70 text-sm">
              Let our smart algorithm give your resume the boost it needs — tailored, targeted, and recruiter-approved.
            </p>

            {/* Upload Box */}
            <label className="cursor-pointer mt-6 w-full border-2 border-dashed border-white/30 hover:border-cyan-300 rounded-xl p-6 transition-all duration-300 bg-white/5 hover:bg-white/10">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center justify-center gap-2 text-white/80">
                <FaFileUpload className="text-3xl" />
                <span className="text-sm font-medium">Click to upload your resume (PDF, DOCX)</span>
              </div>
            </label>

            {/* Analyze Now Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white mt-6 py-3 px-8 rounded-full font-semibold shadow-lg transition duration-300"
              onClick={handleAnalyze}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <FaSpinner className="animate-spin mr-2" /> Analyzing...
                </div>
              ) : (
                'Analyze Now'
              )}
            </motion.button>

            {/* Feedback Section */}
            {feedback && (
              <div className="bg-white text-blue-700 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 whitespace-pre-line">
                <h3 className="text-xl font-semibold mb-2">AI Feedback:</h3>
                <p>{feedback}</p>
              </div>
            )}

            {/* Download Feedback */}
            {downloadReady && (
              <motion.button
                onClick={handleDownload}
                className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-200"
              >
                Download Feedback <FaFileDownload className="inline ml-2" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Background Bokeh Glow Circles */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-32 -right-28 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0"></div>
    </section>
  );
};

export default UpgradeResume;
