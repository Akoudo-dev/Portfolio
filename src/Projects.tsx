const projects = [
  {
    id: 1,
    title: "E-commerce 300% de CA en plus",
    excerpt:
      "Boutique WooCommerce repensée de A à Z. Temps de chargement divisé par 3, checkout en 2 clics. Résultat : panier moyen +45%, taux d'abandon -60%.",
    link: "https://acutepharmacy.com",
    image: prot,
  },

  {
    id: 2,
    title: "Site Vitrine Agence B2B",
    excerpt:
      "Plateforme WordPress modulaire avec système de templates. CMS intuitif pour l'équipe marketing. Blog optimisé SEO qui génère 10K visites/mois.",
    link: "https://akoudo1.netlify.app/",
    image: projet2,
  },
  {
    id: 3,
    title: "Galerie Top Photo Style ",
    excerpt:
      "Galerie WordPress avec recherche avancée, filtres dynamiques et lightbox responsive. Chargement lazy optimisé, masonry layout fluide. Plus de 5000 images organisées.",
    link: "https://akoudo4.netlify.app/",
    image: projet3,
  },
]; 


import prot from "./assets/prot.png";
import projet2 from "./assets/projet2.jpg";
import projet3 from "./assets/projet3.jpg";
import { ExternalLink } from "lucide-react";

export default function Projects() {
    return (
    <section id="projects" className="bg-[#1d1d14] text-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">Projets qui ont <span className="text-cyan-300">cartonné</span></h2>
  
    <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map(p => (
    <article key={p.id} className="group p-4 sm:p-6 hover:shadow-lg transition-all hover:scale-105 duration-300">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <img src={p.image} alt={`Aperçu du projet ${p.title}`} className="w-full h-auto border border-cyan-300 bg-black p-3 sm:p-4 group-hover:brightness-75 transition-all" />
        
        {/* Overlay avec bouton au survol */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a 
            href={p.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-cyan-300 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-cyan-400 transition-colors"
          >
            Voir le site
            <ExternalLink className="size-4 sm:size-5" />
          </a>
        </div>
      </div>
      
      <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">{p.title}</h3>
      <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm">{p.excerpt}</p>
      
      {/* Lien discret en bas */}
      <a 
        href={p.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-cyan-300 text-xs sm:text-sm hover:underline"
      >
        Visiter le projet
        <ExternalLink className="size-3 sm:size-4" />
      </a>
    </article>
    ))}
    
    
    </div>
    </div>
    </section>
    );
}