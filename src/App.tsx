import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './Projects'
import About from './About';
import WhyChooseMe from './components/WhyChooseMe';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import LogoCarousel from './components/LogoCarousel';
import FAQs from './components/FAQs';

export default function PortfolioApp() {
  return (
  <div className="font-sans antialiased text-gray-900">
  <Nav />
   <main>
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <Projects /> 
          <About />
          <LogoCarousel />
          <WhyChooseMe />
          <FAQs />
        </>
      } />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </main> 
  <Footer />
  </div>
  );
  }