import { TrendingUp, Clock, Shield, Zap, Award, Users, Target, X, CheckCircle2 } from 'lucide-react';

export default function WhyChooseMe() {
  return (
    <>
      {/* Section "Pourquoi me choisir" - Avantages principaux */}
      <section id="why-choose-me" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Pourquoi <span className="text-[#0f4cf7]">me choisir</span> ?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plus qu'un développeur WordPress, je suis votre partenaire stratégique pour transformer votre présence en ligne en machine à cash.
            </p>
          </div>

          {/* Grille principale - Responsive améliorée */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Expertise technique */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Zap className="size-5 lg:size-6 text-[#0f4cf7]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Expertise WordPress Avancée</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    5+ ans d'expérience spécialisée WordPress. Maîtrise complète du core, thèmes sur mesure,
                    plugins personnalisés et WooCommerce. Je code propre, maintenable et optimisé pour la performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Résultats mesurables */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="size-5 lg:size-6 text-[#0f4cf7]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Résultats Mesurables</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Mes clients voient en moyenne <span className="text-[#0f4cf7] font-semibold">+300% de conversions</span> et
                    <span className="text-[#0f4cf7] font-semibold"> -60% de temps de chargement</span>.
                    Je ne livre pas juste un site, je livre des résultats business.
                  </p>
                </div>
              </div>
            </div>

            {/* Rapidité d'exécution */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Clock className="size-5 lg:size-6 text-[#0f4cf7]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Rapidité d'Exécution</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Livraison garantie en 2-3 semaines. Processus agile avec validation à chaque étape.
                    Pas de surprises, juste des résultats dans les délais.
                  </p>
                </div>
              </div>
            </div>

            {/* Sécurité & Fiabilité */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Shield className="size-5 lg:size-6 text-[#0f4cf7]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Sécurité & Fiabilité</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Sites blindés contre les attaques, sauvegardes automatiques quotidiennes,
                    monitoring 24/7. Votre business est protégé, même la nuit.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Premium */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Users className="size-5 lg:size-6 text-[#0f4cf7]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Support Premium</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Disponible 7j/7, réponse garantie sous 2h. Support inclus 6 mois après livraison.
                    Vous n'êtes jamais seul face à un problème technique.
                  </p>
                </div>
              </div>
            </div>

            {/* Garantie Satisfaction */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-2 lg:p-3 rounded-lg flex-shrink-0">
                  <Award className="size-5 lg:size-6 text-[#0f4cf7]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Garantie Satisfaction</h3>
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    30 jours satisfaction garantie ou je travaille gratuitement jusqu'à ce que vous soyez
                    100% satisfait. Votre succès est ma priorité absolue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section statistiques - Responsive */}
          <div className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-cyan-500/10">
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-6 lg:mb-8">Chiffres qui parlent</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0f4cf7] mb-1 lg:mb-2">50+</div>
                <div className="text-gray-300 text-xs lg:text-sm">Projets livrés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0f4cf7] mb-1 lg:mb-2">98%</div>
                <div className="text-gray-300 text-xs lg:text-sm">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0f4cf7] mb-1 lg:mb-2">2s</div>
                <div className="text-gray-300 text-xs lg:text-sm">Temps de chargement moyen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0f4cf7] mb-1 lg:mb-2">24h</div>
                <div className="text-gray-300 text-xs lg:text-sm">Support maximum</div>
              </div>
            </div>
          </div>

          {/* CTA final - Responsive */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                Prêt à transformer votre business ?
              </h3>
              <p className="text-gray-300 text-sm lg:text-base mb-4 lg:mb-6 max-w-2xl mx-auto">
                Discutons de votre projet. Devis gratuit et sans engagement en 48h maximum.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0f4cf7] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-semibold hover:bg-[#0f4cf7] transition-all transform hover:scale-105 text-sm lg:text-base"
                >
                  <Target className="size-4 lg:size-5" />
                  Obtenir mon devis gratuit
                </a>
                <a
                  href="/cv-pascal-akoudo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#0f4cf7] text-[#0f4cf7] px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-semibold hover:bg-[#0f4cf7] hover:text-white transition-all text-sm lg:text-base"
                >
                  <Award className="size-4 lg:size-5" />
                  Voir mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau Comparatif - Responsive amélioré */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              Avantages vs <span className=" text-[#0f4cf7]">Conséquences</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comparez les bénéfices de travailler avec moi par rapport aux risques de chercher ailleurs.
            </p>
          </div>

          {/* Grille pour les deux tableaux - Responsive amélioré */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

            {/* TABLEAU 1 : Avantages - Responsive */}
            <div className="overflow-hidden rounded-xl lg:rounded-2xl border border-[#0f4cf7] bg-gradient-to-br from-[#0f4cf7]/5 to-[#0f4cf7]/5 shadow-xl">
              <div className="bg-gradient-to-r from-[#0f4cf7] to-[#0f4cf7] px-4 lg:px-6 py-3 lg:py-4">
                <h3 className="text-lg lg:text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="size-5 lg:size-6 flex-shrink-0" />
                  <span className="text-sm lg:text-base">Avantages de me choisir</span>
                </h3>
              </div>

              <div className="divide-y divide-[#0f4cf7]/20">
                {[
                  { title: "Expertise WordPress", desc: "5+ ans spécialisé, code propre et performant" },
                  { title: "Résultats mesurables", desc: "+300% conversions, -60% temps chargement" },
                  { title: "Rapidité garantie", desc: "Livraison 2-3 semaines, processus agile" },
                  { title: "Sécurité maximale", desc: "Protection 24/7, backups quotidiens automatiques" },
                  { title: "Support premium", desc: "7j/7, réponse en 2h, 6 mois inclus post-livraison" },
                  { title: "Garantie satisfaction", desc: "30 jours satisfaction ou travail gratuit" },
                  { title: "Transparence totale", desc: "Devis détaillé, zéro frais cachés, jalons clairs" },
                  { title: "Partenaire long terme", desc: "Disponible après livraison pour évolutions" },
                ].map((item, idx) => (
                  <div key={idx} className="px-4 lg:px-6 py-3 lg:py-4 hover:bg-[#0f4cf7]/5 transition-colors">
                    <h4 className="font-semibold text-[#0f4cf7] mb-1 text-sm lg:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TABLEAU 2 : Conséquences - Responsive */}
            <div className="overflow-hidden rounded-xl lg:rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/5 to-rose-600/5 shadow-xl">
              <div className="bg-gradient-to-r from-red-600 to-rose-600 px-4 lg:px-6 py-3 lg:py-4">
                <h3 className="text-lg lg:text-2xl font-bold text-white flex items-center gap-2">
                  <X className="size-5 lg:size-6 flex-shrink-0" />
                  <span className="text-sm lg:text-base">Conséquences de ne pas me choisir</span>
                </h3>
              </div>

              <div className="divide-y divide-red-500/20">
                {[
                  { title: "Développeur peu fiable", desc: "Délais non respectés, support inexistant" },
                  { title: "Code de mauvaise qualité", desc: "Site lent, bugué, difficile à maintenir" },
                  { title: "Sécurité compromise", desc: "Hacks, fuites données, site down régulièrement" },
                  { title: "Pas de documentation", desc: "Impossible de prendre en main le projet seul" },
                  { title: "Modification coûteuse", desc: "Chaque petit changement = 500€+ facturé" },
                  { title: "Pas de support", desc: "Un problème ? Vous êtes seul face au vide" },
                  { title: "Migration impossible", desc: "Bloqué sur une mauvaise plateforme forever" },
                  { title: "Site mort après 1 an", desc: "Abandon du projet, site désindexé de Google" },
                ].map((item, idx) => (
                  <div key={idx} className="px-4 lg:px-6 py-3 lg:py-4 hover:bg-red-500/5 transition-colors">
                    <h4 className="font-semibold text-red-300 mb-1 text-sm lg:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message de fermeture - Responsive */}
          <div className="mt-12 lg:mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-gray-700 text-center shadow-xl">
            <p className="text-gray-300 text-base lg:text-lg mb-3 lg:mb-4">
              Le choix est clair. Inversez l'équation maintenant.
            </p>
            <p className="text-white font-semibold text-lg lg:text-xl">
              Transformez votre vision en <span className="text-[#0f4cf7]">réalité profitable</span>.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 mt-4 lg:mt-6 bg-[#0f4cf7] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#0f4cf7]/50 transition-all transform hover:scale-105 text-sm lg:text-base"
            >
              <Target className="size-4 lg:size-5" />
              Discutons de votre projet
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
