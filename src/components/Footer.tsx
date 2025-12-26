import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
  , MapPin
} from "lucide-react";

export default function Footer() {
    return (
    <footer className="bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Conteneur principal */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 md:flex-row md:items-start md:justify-between text-sm text-gray-400">

          {/* Logo */}
          <a 
            href="#hero"
            className="text-center md:text-left font-semibold text-lg sm:text-xl text-white"
          >
            Pascal <span className="text-cyan-300">.</span>
          </a>

          {/* Sections */}
          <div className="flex flex-col sm:flex-row sm:gap-6 md:gap-0 md:divide-x divide-gray-700 text-center sm:text-left">

            {/* Profil */}
            <div className="px-4 sm:px-6 md:px-8">
              <h3 className="text-white font-medium text-sm sm:text-base">Développeur WordPress</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Spécialiste Performance & Conversion</p>
               
               <div className=" mt-4 flex items-center gap-3 text-sm sm:text-base">
            <MapPin className='text-cyan-300'/>
            <p className="text-gray-300">Cotonou, Bénin</p>
          </div>
            </div>

            {/* Navigation */}
             <nav className="px-4 sm:px-6 md:px-8 mt-6 sm:mt-0">
              <h3 className="text-white font-medium text-sm sm:text-base mb-3">Navigation</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                <li><a href="#hero" className="hover:text-cyan-300 cursor-pointer transition-colors">Accueil</a></li>
                <li><a href="#projects" className="hover:text-cyan-300 cursor-pointer transition-colors">Mes projets</a></li>
                <li><a href="#about" className="hover:text-cyan-300 cursor-pointer transition-colors">À propos</a></li>
                <li><a href="#contact" className="hover:text-cyan-300 cursor-pointer transition-colors">Me contacter</a></li>
              </ul>
            </nav>

            {/* Réseaux sociaux */}
            <div className="px-4 sm:px-6 md:px-8 mt-6 sm:mt-0">
              <h3 className="mb-3 sm:mb-4 text-white font-medium text-sm sm:text-base">Suivez-moi</h3>
              <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 text-white">
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors hover:scale-110">
                  <Facebook className="size-5 sm:size-6" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition-colors hover:scale-110">
                  <Twitter className="size-5 sm:size-6" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors hover:scale-110">
                  <Instagram className="size-5 sm:size-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors hover:scale-110">
                  <Linkedin className="size-5 sm:size-6" />
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3">Réponse sous 24h garantie</p>
            </div>

          </div>
        </div>

        {/* Footer bottom */}
         <div className="mt-8 sm:mt-10 border-t border-gray-800 pt-3 sm:pt-4 text-center text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pascal Akoudo - Développeur WordPress. Tous droits réservés.</p>
          <p className="mt-2 text-xs">
            Conçu avec Coeur à Cotonou • <a href="#contact" className="text-cyan-300 hover:underline">Discutons de votre projet</a>
          </p>
        </div>

      </div>
    </footer>
    );
}