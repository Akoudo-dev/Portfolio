import {
  Github ,
   Mail,

  Twitter,

  Linkedin
} from "lucide-react";
import { CodeXml } from 'lucide-react';
import { Anchor } from 'lucide-react';
import { WandSparkles } from 'lucide-react';

export default function Hero() {
  return (
    <>
    <section id="hero" className="bg-black pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      
      <div className="max-w-4xl text-white mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
          Hi I am <span className="text-cyan-300">Pascal Akoudo</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-3xl mt-4 font-medium leading-tight">
          Je crée des sites WordPress qui <span className="text-cyan-300">multiplient vos ventes par 3</span>
        </h1>
         <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white px-2">
          Développeur WordPress expert. Je code des sites <span className="text-cyan-300">rapides comme l'éclair</span>, optimisés SEO et conçus pour transformer vos visiteurs en clients payants.
        </p>
        
        <div className="mt-6 sm:mt-8 justify-center">
         <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            
            Discutons de votre projet
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </a>
         <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
          <a href="https://github.com/Akoudo-dev">
             <Github  className="hover:text-blue-600 bg-white rounded-full p-2 size-9 sm:size-10 text-black cursor-pointer"/>
          </a>
          <a
              href="mailto:pascalakoudo14@gmail.com?subject=Demande%20de%20collaboration&body=Bonjour%20Pascal,%0D%0A%0D%0AJe%20souhaite%20discuter%20d’un%20projet."
            aria-label="Envoyer un email"
            className="inline-flex hover:opacity-70 transition"
          >
            <Mail className="bg-white rounded-full p-2 size-9 sm:size-10 text-black hover:text-blue-600" />
          </a>

          <a href="https://x.com/akoudo7977">
            <Twitter className="hover:text-sky-500 cursor-pointer bg-white rounded-full p-2 size-9 sm:size-10 text-black" />

          </a>
            <a href="https://www.linkedin.com/in/pascal-akoudo-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex hover:opacity-70 transition"
            >
            <Linkedin className="hover:text-blue-700 cursor-pointer bg-white rounded-full p-2 size-9 sm:size-10 text-black" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#1d1d14] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-4xl text-white mx-auto px-4 sm:px-6">
       <p className="text-center text-sm sm:text-base">Ce que j'apporte à votre business</p>
       <h3 className="mb-4 sm:mb-6 mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-center">3 solutions pour <span className="text-cyan-300">exploser vos objectifs</span></h3>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
       {/*  card1 */}
    <div className="border rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-cyan-300 text-white hover:text-black">
      <div className="flex justify-between items-center gap-2">
      <CodeXml className="size-6 sm:size-7  border-2 rounded-full"/>
      <h3 className="text-2xl sm:text-3xl font-semibold opacity-50">01</h3>
      </div>
    <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-base sm:text-lg">Sites WordPress Pro</h3>
    <hr className="w-1/2"/>
    
    <p className="mt-2  text-xs sm:text-sm">Vitrine, e-commerce WooCommerce, solutions sur mesure. Code propre, mobile-first, SEO optimisé. Livré en 2 semaines.</p>
   
    </div>
   {/*  card2 */}
    <div className="border border-cyan-300 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-cyan-300 text-white hover:text-black">
    <div className="flex justify-between items-center gap-2">
      <Anchor className="size-6 sm:size-7  border-2 rounded-full"/>
      <h3 className="text-2xl sm:text-3xl font-semibold opacity-50">02</h3>
      </div>
    <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-base sm:text-lg">Performance Maximale</h3>
    <hr className="w-1/2"/>
    <p className="mt-2 text-xs sm:text-sm">Votre site charge en moins de 2 secondes. Score Google 95+. Taux de conversion doublé. Fini les visiteurs qui partent.</p>
   
    </div>
    {/* card3 */}
    <div className="border rounded-2xl border-cyan-300 p-4 sm:p-5 md:p-6 hover:bg-cyan-300 text-white hover:text-black">
    <div className="flex justify-between items-center gap-2">
      <WandSparkles className="size-6 sm:size-7  border-2 rounded-full"/>
      <h3 className="text-2xl sm:text-3xl font-semibold opacity-50">03</h3>
      </div>
    <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-base sm:text-lg">Support Sans Faille</h3>
    <hr className="w-1/2"/>
    <p className="mt-2 text-xs sm:text-sm">Maintenance 24/7, sécurité blindée, mises à jour automatiques. Réponse en moins de 2h. Zéro temps d'arrêt garanti.</p>
    
    </div>
      </div>
      </div>
    
    </section>
    </>
  );
}