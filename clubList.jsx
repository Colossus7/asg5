import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clubs } from '../data/clubs';

export default function ClubsList() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState('grid');

  // Sort clubs based on selected order
  const sortedClubs = [...clubs].sort((a, b) => {
    if (sortOrder === 'asc') return a.name.localeCompare(b.name);
    else return b.name.localeCompare(a.name);
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center">All Clubs</h2>

      {/* Sorting & View Toggle */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        <div>
          <label htmlFor="sort" className="mr-2 font-medium">Sort by Name:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded p-1"
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => setViewMode('grid')}
            className={`mx-1 border border-gray-400 px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`mx-1 border border-gray-400 px-3 py-1 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
          >
            List
          </button>
        </div>
      </div>

      {/* Club Cards */}
      <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}`}>
        {sortedClubs.map(club => (
          <div key={club.id} className="bg-white border rounded shadow p-4 hover:shadow-lg transition-shadow">
            <img src={club.image} alt={club.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{club.name}</h3>
            <p className="mb-2">{club.shortDescription}</p>
            <Link to={`/clubs/${club.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}