import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';   // Import new page
import Projects from './Projects'; // Import new page

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{ padding: '20px', background: '#333', color: 'white' }}>
        <Link to="/" style={navStyle}>Home</Link>
        <Link to="/projects" style={navStyle}>Projects</Link>
        <Link to="/about" style={navStyle}>About</Link>
        <Link to="/contact" style={navStyle}>Contact</Link>
      </nav>

      {/* Page Content */}
      <div style={{ padding: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* This is the "404 Not Found" page catch-all */}
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// A small style helper for the links
const navStyle = { marginRight: '15px', color: 'white', textDecoration: 'none' };

export default App;