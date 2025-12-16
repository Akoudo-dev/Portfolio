
import './App.css';
import Nav from './components/Nav';
 import Home from './components/Home';
 import Projects from './Projects'
 import About from './About';

import Contact from './Contact';   
import Footer from './components/Footer';

export default function PortfolioApp() {
  return (
  <div className="font-sans antialiased text-gray-900">
  <Nav />
   <main>
  <Home />
  <Projects /> 
   <About /> 
 
   <Contact /> 
  </main> 
  <Footer />
  </div>
  );
  }