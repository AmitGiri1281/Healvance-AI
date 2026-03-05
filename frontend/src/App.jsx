// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home, Services, Portfolio, Blog, Contact, CaseStudy } from './pages'
import { Navbar, Footer, AIChatbot } from './components/common'
import { useEffect } from 'react'

// Create a Layout wrapper component
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Add class to body for home page styling
  useEffect(() => {
    if (isHomePage) {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }
  }, [isHomePage]);

  return (
    <>
      <Navbar />
      <main className={!isHomePage ? "pt-20 lg:pt-24" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/:id" element={<CaseStudy />} />
        </Routes>
      </main>
      <Footer />
      <AIChatbot />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App