import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-bold mb-4">404 – Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline">Go back home</Link>
    </div>
  );
}