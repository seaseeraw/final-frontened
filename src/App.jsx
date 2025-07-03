
import React from 'react'
import Footers from './pages/footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Trans from './pages/trans';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trans" element={<Trans />} />
      </Routes>
      <Footers />
    </Router>  
  )
}

export default App