import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Combien coûte une création de site WordPress sur mesure ?",
      answer: "Les tarifs varient selon la complexité : un site vitrine simple démarre à 2 000€, une boutique e-commerce entre 5 000€ et 15 000€. Je fournis toujours un devis détaillé et transparent après l'étude de votre projet. Pas de prix caché."
    },
    {
      question: "Quel est le délai de livraison ?",
      answer: "Pour un site WordPress standard : 2-3 semaines. Pour une boutique WooCommerce complexe : 4-6 semaines. Je respecte les délais promis grâce à mon processus agile et mes jalons clairs. En cas de retard, je travaille gratuitement jusqu'à completion."
    },
    {
      question: "Incluez-vous le support après la livraison ?",
      answer: "Oui ! 6 mois de support inclus après livraison (maintenance, bug fixes, petites modifications). Après, je propose des contrats de support mensuel (à partir de 200€/mois) avec priorité garantie."
    },
    {
      question: "Pouvez-vous aider pour le migration depuis un ancien site ?",
      answer: "Absolument. Je gère les migrations complètes : hébergement, domaine, contenu, redirections 301, SEO. Zero downtime, zéro perte de data. J'organise tout pour que le changement soit transparent pour vos utilisateurs."
    },
    {
      question: "Quelle est votre garantie ?",
      answer: "Garantie 30 jours satisfaction. Si le site ne correspond pas à vos attentes, je travaille gratuitement jusqu'à ce que vous soyez 100% satisfait. Aucune surprise, juste de la transparence."
    },
    {
      question: "Gérez-vous aussi le SEO et le marketing ?",
      answer: "Je fais de l'optimisation SEO technique (performance, structure, métadonnées). Pour la stratégie SEO complète et le marketing digital, je vous recommande des spécialistes de confiance. Je peux les intégrer dans votre projet."
    },
    {
      question: "Puis-je faire des modifications moi-même après ?",
      answer: "Oui, absolument ! Je vous formerai à utiliser WordPress et l'éditeur de pages (Elementor/Divi selon votre setup). Vous serez autonome pour les modifications simples. Mais j'adore quand les clients m'appellent pour les changements ! 😉"
    },
    {
      question: "Travaillez-vous avec des agences partenaires ?",
      answer: "Oui, je collabore régulièrement avec des agences pour renforcer leurs capacités WordPress. Prix partenaires disponibles. Je suis aussi à l'aise en temps que freelancer qu'en tant que responsable projet au sein d'une équipe."
    },
    {
      question: "Quel est votre processus de travail ?",
      answer: "Phase 1 : Découverte & Audit (1 semaine). Phase 2 : Design & Prototype (1 semaine). Phase 3 : Développement & Intégration (2-4 semaines). Phase 4 : Test & Optimisation (1 semaine). Phase 5 : Livraison & Formation. Transparence à chaque étape."
    },
    {
      question: "Vous acceptez les paiements partiels ?",
      answer: "Oui : 30% à la signature, 50% à mi-parcours, 20% à la livraison. Ou je peux discuter de modalités flexibles selon votre situation. L'essentiel c'est qu'on s'entende sur les termes dès le départ."
    },
  ];

  return (
    <section id="faqs" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="size-10 text-[#0f4cf7]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Questions <span className="text-[#0f4cf7]">fréquentes</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Les réponses aux questions que je reçois le plus souvent. Si vous en avez d'autres, contactez-moi !
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#0f4cf7]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-800/30 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white flex-1 group-hover:text-[#0f4cf7] transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`size-5 text-[#0f4cf7] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer - avec animation */}
              {openIndex === index && (
                <div className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#0f4cf7]/5 to-blue-600/5 border-t border-gray-700/30">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 bg-gradient-to-r from-[#0f4cf7]/10 to-blue-600/10 border border-[#0f4cf7]/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Vous n'avez pas trouvé votre réponse ?
          </h3>
          <p className="text-gray-300 mb-6">
            Contactez-moi directement. J'adore discuter de nouveaux projets !
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0f4cf7] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#0f4cf7]/50 transition-all transform hover:scale-105"
          >
            Démarrer la conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
