import { useState } from 'react';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleResumeUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const fileType = uploadedFile.type;
      // Validate file type (PDF, DOC, DOCX)
      if (fileType === 'application/pdf' || fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(uploadedFile);
        setError('');
        setSuccess('');
      } else {
        setError('Invalid file type. Please upload a PDF, DOC, or DOCX file.');
      }
    }
  };

  const handleUploadClick = () => {
    if (!file) return;
    setLoading(true);
    setSuccess('');

    // Simulate file upload processing (for example, sending the file to a server)
    setTimeout(() => {
      setLoading(false);
      setSuccess(`Successfully uploaded: ${file.name}`);
    }, 2000); // Simulate upload time (2 seconds)
  };

  return (
    <section className="resume-uploader max-w-4xl mx-auto bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Upload Your Resume</h2>

      <div className="text-center mb-6">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeUpload}
          className="bg-white text-gray-700 p-2 rounded-lg mb-4 w-2/3"
        />
        {file && (
          <p className="text-green-500 font-medium">File selected: {file.name}</p>
        )}
        {error && <p className="text-red-500 font-medium">{error}</p>}
        {success && <p className="text-green-500 font-medium">{success}</p>}
      </div>

      <div className="text-center">
        <button
          onClick={handleUploadClick}
          className={`bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={loading || !file}
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </section>
  );
};

export default ResumeUploader;
