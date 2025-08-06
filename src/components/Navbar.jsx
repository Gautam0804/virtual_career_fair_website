// Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { BriefcaseIcon, LogInIcon, UserPlusIcon } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `flex items-center gap-1 px-3 py-1 rounded-lg transition duration-300 ${
      location.pathname === path
        ? 'bg-white text-indigo-600 font-semibold shadow'
        : 'text-white hover:bg-white/20'
    }`;

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-4 shadow-lg sticky top-0 z-50 rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link
          to="/"
          className="text-white text-3xl font-black tracking-wider hover:scale-110 transform transition duration-300"
        >
          Virtual Career Fair
        </Link>

        <div className="flex items-center gap-4 mt-3 sm:mt-0">
          <Link to="/" className={navLinkClass('/')}>
            <BriefcaseIcon size={18} />
            Home
          </Link>
          <Link to="/login" className={navLinkClass('/login')}>
            <LogInIcon size={18} />
            Login
          </Link>
          <Link to="/signup" className={navLinkClass('/signup')}>
            <UserPlusIcon size={18} />
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
