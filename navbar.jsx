import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Clubs', path: '/clubs' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        {navLinks.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:underline ${location.pathname === link.path ? 'font-bold' : ''}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}