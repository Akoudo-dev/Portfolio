const projects = [
  {
    id: 1,
    title: "Kalmy Health",
    excerpt:
      "Refonte complète d'une boutique locale : optimisation vitesse, parcours de paiement simplifié et blocage des abandons de panier.",
    
  },

  {
    id: 2,
    title: "Kalmy Health",
    
   
    excerpt:
      "Création d'une plateforme modulable pour une agence B2B : templates réutilisables, CMS pour contenus marketing et blog optimisé SEO.",
   
  },
  {
    id: 3,
    title: "Kalmy Health",
   
    
    excerpt:
      "Landing orientée conversion pour un nouveau produit SaaS : parcours clair, preuve sociale visible et formulaire optimisé.",
   
  },
]; 
import projet from "./assets/projet.jpeg"

export default function Projects() {
    return (
    <section id="projects" className="bg-[#1d1d14] text-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">Projets <span className="text-cyan-300">Factured.</span></h2>
  
    
    
    <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map(p => (
    <article key={p.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <img src={projet} alt="Aperçu du projet" className="w-full h-auto border border-cyan-300 rounded-xl sm:rounded-2xl bg-black p-3 sm:p-4" />
      <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">{p.title}</h3>
      <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm">{p.excerpt}</p>
    </article>
    ))}
    {projects.map(p => (
    <article key={p.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <img src={projet} alt="Aperçu du projet" className="w-full h-auto border border-cyan-300 rounded-xl sm:rounded-2xl bg-black p-3 sm:p-4" />
      <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">{p.title}</h3>
      <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm">{p.excerpt}</p>
    </article>
    ))}
    </div>
    </div>
    </section>
    );
    }