import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init({ publicKey: 'psfRRI6KcbYqvSW30' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorDetail(null);

    try {
      await emailjs.send(
        'service_v8awere',
        'template_p5n2zy',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setStatus('error');
      const err: any = error;
      const detail = err?.text || err?.message || (typeof err === 'string' ? err : null);
      setErrorDetail(detail);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation simplifiée */}
      <nav className="bg-black/95 backdrop-blur sticky top-0 z-40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors">
            <ArrowLeft className="size-5" />
            <span className="font-medium">Retour au portfolio</span>
          </Link>
          <div className="text-sm text-gray-400">
            Pascal Akoudo • Développeur WordPress
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Parlons de <span className="text-[#0f4cf7]">votre projet</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Transformons vos idées en réalité. Contactez-moi pour un devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#0f4cf7]">Mes coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0f4cf7]/10 p-3 rounded-lg">
                    <Phone className="size-6 text-[#0f4cf7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-300">+229 60730862</p>
                    <p className="text-sm text-gray-500 mt-1">Disponible 9h-18h (GMT+1)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0f4cf7]/10 p-3 rounded-lg">
                    <Mail className="size-6 text-[#0f4cf7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">pascalakoudo14@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h garantie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0f4cf7]/10 p-3 rounded-lg">
                    <MapPin className="size-6 text-[#0f4cf7]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-gray-300">Cotonou, Bénin</p>
                    <p className="text-sm text-gray-500 mt-1">Travail à distance worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-gradient-to-r from-[#0f4cf7]/10 to-blue-500/10 p-6 rounded-xl border border-[#0f4cf7]/20">
              <h3 className="font-semibold mb-4 text-[#0f4cf7]">Pourquoi travailler avec moi ?</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Devis détaillé sous 48h maximum</li>
                <li>• Consultation stratégique gratuite (30 min)</li>
                <li>• Livraison garantie en 2-3 semaines</li>
                <li>• Support 24/7 après livraison</li>
                <li>• Garantie satisfaction 30 jours</li>
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Votre nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Votre adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all"
                  placeholder="jean.dupont@entreprise.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all resize-none"
                  placeholder="Ex: J'ai besoin d'un site e-commerce pour vendre mes produits artisanaux. Budget : 2000-3000€. Délai souhaité : 1 mois."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
                  status === 'sending' 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : status === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : status === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black font-semibold'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300`}
              >
                {status === 'sending' && ' Envoi en cours...'}
                {status === 'success' && ' Message envoyé !'}
                {status === 'error' && ' Erreur, réessayez'}
                {status === 'idle' && ' Envoyer ma demande'}
              </button>

              {/* Messages de statut */}
              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">✅ Message envoyé avec succès !</p>
                  <p className="text-sm text-gray-300 mt-1">Je vous répondrai dans les 24h.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center">
                  <p className="text-red-400 font-medium"> Erreur d'envoi</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Contactez-moi directement : <br />
                    <a href="mailto:pascalakoudo14@gmail.com" className="text-cyan-300 hover:underline">
                      pascalakoudo14@gmail.com
                    </a>
                  </p>
                  {errorDetail && (
                    <p className="text-xs text-red-300 mt-2 break-words">Détail: {errorDetail}</p>
                  )}
                </div>
              )}

              <p className="text-center text-xs text-gray-500 mt-4">
                Vos données sont protégées et ne seront jamais partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
