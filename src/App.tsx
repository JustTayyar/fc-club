import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home.tsx';
import TeamPage from './pages/TeamPage.tsx';
import MatchesPage from './pages/MatchesPage.tsx';
import NewsPage from './pages/NewsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import TicketsPage from './pages/TicketsPage.tsx';
import HistoryPage from './pages/HistoryPage.tsx';
import FanShopPage from './pages/FanShopPage.tsx';
import MediaPage from './pages/MediaPage.tsx';
import AcademyPage from './pages/AcademyPage.tsx';
import SponsorshipPage from './pages/SponsorshipPage.tsx';
import StadiumTourPage from './pages/StadiumTourPage.tsx';
import MembershipPage from './pages/MembershipPage.tsx';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Stadium Background for Football Identity */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1920')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Background Effect removed to prevent lag and 'NASA' look */}

      {/* Background Glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/fanshop" element={<FanShopPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
            <Route path="/stadium-tour" element={<StadiumTourPage />} />
            <Route path="/membership" element={<MembershipPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
