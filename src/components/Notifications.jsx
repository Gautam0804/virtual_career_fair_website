import { BellIcon } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    'You have a new applicant for the Software Engineer position',
    'Your job posting has received 5 new applications',
    'Candidate Gautam Yadav has updated their resume',
    'A recruiter viewed your profile',
  ];

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <div className="flex items-center gap-2 mb-4">
        <BellIcon className="text-blue-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
      </div>
      <ul className="space-y-3">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="bg-blue-50 hover:bg-blue-100 text-gray-700 px-4 py-3 rounded-lg transition duration-300 border border-blue-100 shadow-sm"
          >
            {notification}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
