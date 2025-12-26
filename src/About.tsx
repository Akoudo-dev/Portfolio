import abou from "./assets/abou.jpg"
export default function About() {

    return (
        <>
    <section id="about" className="bg-black opacity-90">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">Qui suis-je <span className="text-cyan-300">vraiment</span> ?</h2>
    <div className="mt-6 sm:mt-8 grid gap-8 sm:gap-12 md:gap-20 grid-cols-1 md:grid-cols-2 items-start">
    
    
    {/* Photo about Me */}
    <div className="bg-white rounded-full border-2 border-cyan-300 p-4 sm:p-6 shadow mx-auto w-full max-w-sm md:max-w-none">
   <img src={abou} className="w-full h-auto rounded-full" />
    </div>
        {/* la description about me  */}
    <div className="space-y-4">
    <p className="text-white text-sm sm:text-base">Développeur WordPress passionné depuis 5+ ans, je transforme vos ambitions digitales en sites performants qui génèrent des résultats concrets. Spécialisé dans l'optimisation UX, la vitesse et le code propre.

    </p>
    <p className="text-white text-sm sm:text-base">J'ai aidé 30+ entreprises (startups, agences, e-commerces) à lancer des projets WordPress robustes et scalables. Mon approche : livraison rapide (1-4 semaines), communication claire, zéro surprise. Votre succès est ma priorité.

    </p>

    <div className="mt-4 sm:mt-6">
    <a href="#contact" className="inline-block bg-cyan-300 text-black px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-cyan-400 transition-colors">Discutons de votre projet</a>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Skills */}
    <section className="bg-black opacity-90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="space-y-3 sm:space-y-4">
            <p className="text-cyan-300 text-xs sm:text-sm uppercase tracking-wider">MON STACK TECHNIQUE</p>
            <h3 className="text-white font-medium text-xl sm:text-2xl md:text-3xl">Technologies que je <span className="text-cyan-300">maîtrise</span>.</h3>
            <p className="text-white text-sm sm:text-base">
                 WordPress natif, custom post types, ACF, WooCommerce avancé, optimisation serveur. Je code avec les technologies modernes pour garantir des sites rapides, sécurisés et faciles à maintenir sur le long terme.
            </p>
        </div>
         <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">WORDPRESS</button>
              <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">WOOCOMMERCE</button>
              <button className="border rounded-full text-white border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">PHP</button>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">ELEMENTOR PRO</button>
            <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">ACF</button> 
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">JAVASCRIPT</button>
            <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">CSS3</button>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">SEO OPTIMIZATION</button>
            <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">FIGMA</button>
            </div>
        </div>
        </div>
    </div>
    </section>
    </>
    );
    }