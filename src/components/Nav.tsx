import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (window.location.pathname === '/') {
      event.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `#${id}`);
      }
    }
  };

  return (
    <header className="bg-black backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3 sm:p-4 md:p-6">
        <Link to="/" className="font-semibold text-base sm:text-lg md:text-xl text-white">
          Pascal <span className="text-[#0f4cf7]">.</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-12 text-white">
          <Link to="/" className="text-sm lg:text-base xl:text-lg text-[#0f4cf7] hover:text-white transition-colors">Accueil</Link>
          <a
            href="/#projects"
            onClick={(event) => handleScrollTo(event, 'projects')}
            className="text-sm lg:text-base xl:text-lg hover:text-[#0f4cf7] transition-colors"
          >
           Projects
          </a>
          <a
            href="/#about"
            onClick={(event) => handleScrollTo(event, 'about')}
            className="text-sm lg:text-base xl:text-lg hover:text-[#0f4cf7] transition-colors"
          >
            A Propos
          </a>
          <Link to="/contact" className="text-sm lg:text-base xl:text-lg hover:text-[#0f4cf7] transition-colors">Contact</Link>
          <a
            href="/cv-pascal-akoudo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Pascal-Akoudo-WordPress-Developer.pdf"
            className="bg-[#0f4cf7] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow hover:brightness-95 text-sm lg:text-base transition-all hover:scale-105"
          >
            Mon CV
          </a>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/cv-pascal-akoudo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Pascal-Akoudo-WordPress-Developer.pdf"
            className="bg-[#0f4cf7] text-black px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base font-medium"
          >
            CV
          </a>

          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white text-lg py-2 hover:text-[#0f4cf7] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
               Accueil
              </Link>
              <a
                href="/#projects"
                onClick={(event) => {
                  setIsMenuOpen(false);
                  handleScrollTo(event, 'projects');
                }}
                className="text-white text-lg py-2 hover:text-[#0f4cf7] transition-colors"
              >
                 Projects
              </a>
              <a
                href="/#about"
                onClick={(event) => {
                  setIsMenuOpen(false);
                  handleScrollTo(event, 'about');
                }}
                className="text-white text-lg py-2 hover:text-[#0f4cf7] transition-colors"
              >
                A Propos 
              </a>
              <Link
                to="/contact"
                className="text-white text-lg py-2 hover:text-[#0f4cf7] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact 
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}