import { useEffect, useRef, useState } from 'react';
import WordpressLogo from '../assets/logo/Wordpress.jpg';
import WooLogo from '../assets/logo/Woo.jpg';
import PhpLogo from '../assets/logo/Php.jpg';
import ReactLogo from '../assets/logo/React.jpg';
import SqlLogo from '../assets/logo/Sql.jpg';
import FigmaLogo from '../assets/logo/Figma.jpg';
import TailwindLogo from '../assets/logo/Tailwind.jpg';
import HtmlLogo from '../assets/logo/Html.jpg';
import NodeLogo from '../assets/logo/Node.jpg';
import SeoLogo from '../assets/logo/Seo.jpg';
import ElementorLogo from '../assets/logo/Elementor.jpg';
import WebflowLogo from '../assets/logo/webflow.jpg';
import NextjsLogo from '../assets/logo/Nextjs.jpg';
import FrameLogo from '../assets/logo/frame.jpg';

const LogoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Logos des partenaires/technologies
  const logos = [
    { name: 'WordPress', logoSrc: WordpressLogo },
    { name: 'WooCommerce', logoSrc: WooLogo },
    { name: 'PHP', logoSrc: PhpLogo },
    { name: 'React', logoSrc: ReactLogo },
    { name: 'SQL', logoSrc: SqlLogo },
    { name: 'Figma', logoSrc: FigmaLogo },
    { name: 'Tailwind', logoSrc: TailwindLogo },
    { name: 'HTML', logoSrc: HtmlLogo },
    { name: 'Node', logoSrc: NodeLogo },
    { name: 'SEO', logoSrc: SeoLogo },
    { name: 'Elementor', logoSrc: ElementorLogo },
    { name: 'Webflow', logoSrc: WebflowLogo },
    { name: 'Next.js', logoSrc: NextjsLogo },
    { name: 'Figma/Frame', logoSrc: FrameLogo },
  ];

  // Créer un tableau avec beaucoup de répétitions pour l'effet infini
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 1; // Vitesse de défilement

    const animate = () => {
      if (!isHovered) {
        position -= speed;

        // Calculer la largeur d'un logo (avec gap)
        const logoWidth = 128 + 24; // w-32 (128px) + gap-6 (24px)
        const totalWidth = logoWidth * logos.length;

        // Quand on a défilé d'une largeur complète, remettre à zéro
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }

        container.style.transform = `translateX(${position}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, logos.length]);

  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technos & <span className="text-[#0f4cf7]">partenaires</span>
          </h2>
          <p className="text-gray-400 text-lg">
            L'ensemble des outils et technos que je maîtrise pour vos projets
          </p>
        </div>

        {/* Carousel container avec défilement infini */}
        <div className="relative overflow-hidden">
          {/* Gradients latéraux */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Container avec transform pour mouvement fluide */}
          <div
            ref={containerRef}
            className="flex gap-6 transition-transform duration-75 ease-linear"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: 'fit-content',
              willChange: 'transform',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-[#0f4cf7] transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#0f4cf7]/20 hover:scale-105 cursor-pointer group"
              >
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <img
                    src={logo.logoSrc}
                    alt={`${logo.name} logo`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </div>
                <p className="text-white font-semibold text-sm sm:text-base text-center px-2 group-hover:text-[#0f4cf7] transition-colors">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur de scroll */}
        
      </div>
    </section>
  );
};

export default LogoCarousel;
