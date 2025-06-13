import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { clubs } from '../data/clubs';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    setJoinedClubs(stored);
  }, []);

  const handleJoin = () => {
    if (!joinedClubs.includes(clubId)) {
      const updated = [...joinedClubs, clubId];
      localStorage.setItem('joinedClubs', JSON.stringify(updated));
      setJoinedClubs(updated);
    }
  };

  if (!club) return <div>Club not found.</div>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{club.name}</h2>
      <img src={club.image} alt={club.name} className="w-full max-w-xl mx-auto rounded shadow mb-4" />
      <p className="mb-4">{club.description}</p>

      <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
      <ul className="list-disc pl-6 mb-4">
        {club.events.map((event, index) => (
          <li key={index}>{event.name} – {event.date}</li>
        ))}
      </ul>

      {!joinedClubs.includes(clubId) ? (
        <button onClick={handleJoin} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Join Club
        </button>
      ) : (
        <p className="text-green-600 font-semibold">You have joined this club!</p>
      )}
    </div>
  );
}