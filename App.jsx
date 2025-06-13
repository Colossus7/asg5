import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ClubsList from './pages/clubList';
import ClubDetail from './pages/clubDetail';
import About from './pages/about';
import NotFound from './pages/notFound';
import Navbar from './components/navbar';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<ClubsList />} />
        <Route path="/clubs/:clubId" element={<ClubDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}