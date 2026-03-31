import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Sectors from './pages/Sectors';
import About from './pages/About';
import Deployments from './pages/Deployments';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Solutions
import PControl from './pages/solutions/PControl';
import HControl from './pages/solutions/HControl';
import MControl from './pages/solutions/MControl';
import GControl from './pages/solutions/GControl';
import WControl from './pages/solutions/WControl';
import Lynx from './pages/solutions/Lynx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper flex-col" style={{ minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/deployments" element={<Deployments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/solutions/pcontrol" element={<PControl />} />
            <Route path="/solutions/hcontrol" element={<HControl />} />
            <Route path="/solutions/mcontrol" element={<MControl />} />
            <Route path="/solutions/gcontrol" element={<GControl />} />
            <Route path="/solutions/wcontrol" element={<WControl />} />
            <Route path="/solutions/lynx" element={<Lynx />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
