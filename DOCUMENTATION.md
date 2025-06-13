Pages & Features
1. 🔖 Home Page (/)
Welcome message and call-to-action to browse clubs. 

📷 Screenshot: Home Page (you should add this manually)
✨ Description
Displays an engaging welcome message.
Includes a large hero image.
A “Browse Clubs” button links to /clubs.
💻 Code Snippet:
<h1 className="text-4xl font-bold mb-4">Welcome to Campus Club Finder</h1>
<p className="mb-6">Find and join student clubs at your university!</p>
<img src="/images/hero.jpg" alt="Campus life" className="mx-auto w-full max-w-lg rounded shadow-lg mb-6" />
<Link to="/clubs" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">Browse Clubs</Link>

2. 📚 Clubs List Page (/clubs)
Browse all 5 clubs with sorting and layout options. 

📷 Screenshot: Clubs List - Grid View
📷 Screenshot: Clubs List - List View
✨ Description
Shows all clubs as cards with:
Image
Name
Short description
“View Details” link
Sorting Options :
Sort by name A-Z or Z-A
View Toggle :
Switch between Grid and List views
Responsive layout adjusts based on screen size
🧠 Implementation Notes
Used useState to manage sort order and view mode.
Dynamic rendering of cards using conditional Tailwind classes.

<div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}`}>

3. 👤 Club Detail Page (/clubs/:clubId)
Show full club info and allow users to join. 

📷 Screenshot: Club Detail - Not Joined
📷 Screenshot: Club Detail - Joined
✨ Description
Displays:
Club name
Large image
Full description
Upcoming events
Join Club Button :
Shown only if the user hasn’t joined yet.
Adds club ID to localStorage.
After joining:
Confirmation message shown.
Button disabled or hidden.
🧠 Implementation Notes
Uses useParams() to get club ID from URL.
Loads club data from data/clubs.js.
Uses localStorage to persist joined status.

const handleJoin = () => {
  const stored = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
  const updated = [...stored, club.id];
  localStorage.setItem('joinedClubs', JSON.stringify(updated));
  setJoinedClubs(updated);
};

4. ℹ️ About Page (/about)
Explains what the app does and which technologies were used. 

📷 Screenshot: About Page
✨ Description
Explains the purpose of the app.
Lists the technologies used:
Vite
React
React Router v7+
Tailwind CSS

5. ❌ 404 Not Found Page (*)
Friendly error page when navigating to unknown routes. 

📷 Screenshot: 404 Page
✨ Description
Displays a friendly message.
Includes a link back to the homepage.

💾 LocalStorage Usage
Users can "join" a club. The app stores the club IDs in localStorage.

✅ Key Feature
Persists across page reloads.
No backend required.
🧠 Code Highlights
// Load joined clubs
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('joinedClubs')) || [];
  setJoinedClubs(stored);
}, []);

// Save joined club
const handleJoin = () => {
  const updated = [...joinedClubs, club.id];
  localStorage.setItem('joinedClubs', JSON.stringify(updated));
  setJoinedClubs(updated);
};

🧩 Components
1. 🧭 Navbar
Always visible; shows navigation links. 

📷 Screenshot: Navbar with active link
✨ Description
Links: Home | Clubs | About
Active link highlighted using useLocation().

<Link
  to={link.path}
  className={`hover:underline ${location.pathname === link.path ? 'font-bold underline' : ''}`}
>
  {link.name}
</Link>

"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.2"
},
"devDependencies": {
  "@tailwindcss/vite": "^4.1.10",
  "tailwindcss": "^3.4.1",
  "@vitejs/plugin-react": "^4.4.1",
  "vite": "^6.3.5"
}
