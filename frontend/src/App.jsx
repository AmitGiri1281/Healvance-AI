// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Services, Portfolio, Blog, Contact, CaseStudy } from './pages'
import { Navbar, Footer, AIChatbot } from './components/common'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies/:id" element={<CaseStudy />} />
      </Routes>
      <Footer />
      <AIChatbot />
    </Router>
  )
}

export default App