import { Phone ,  Mail , MapPin} from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {

  /* Email */
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_ap4ykng',      // Remplacez par votre Service ID
        'template_acshfe8',     // Remplacez par votre Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'k7_uAlC8xWo0FjsYx'       // Remplacez par votre Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset après 5 secondes
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  
  return (
    <section id="contact" className="bg-black py-12 sm:py-16 md:py-20">
      <div className="bg-black text-white">
        <div className="px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Prêt à lancer <span className="text-[#0f4cf7]">votre projet</span> ?</h2>
        <p className="mt-2 text-gray-400 text-center text-sm sm:text-base">
          Réponse garantie sous 24h. Devis gratuit et sans engagement.
        </p>
        </div>
       {/*  Contact */}
       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
             Votre site WordPress de rêve commence ici. <br /> <span className="text-[#0f4cf7]">Parlons-en maintenant !</span>
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div className='flex items-center gap-3 text-sm sm:text-base'>
            <Phone className='text-[#0f4cf7]'/>
            <p className="text-gray-300">+229 60730862</p>
            </div>
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <Mail className='text-[#0f4cf7]'/>
            <p className="text-gray-300">pascalakoudo14@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <MapPin className='text-[#0f4cf7]'/>
            <p className="text-gray-300">Cotonou, Bénin</p>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-cyan-300 font-medium text-sm sm:text-base mb-2"> Ce que vous obtenez :</p>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>• Devis détaillé en 48h maximum</li>
              <li>• Consultation stratégique gratuite (30 min)</li>
              <li>• Recommandations personnalisées</li>
            </ul>
          </div>
          </div>
        </div>
         <form onSubmit={handleSubmit} className="text-white space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2">
              Votre nom 
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-colors text-sm sm:text-base"
              placeholder="Jean Dupont"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2">
              Votre email 
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-colors text-sm sm:text-base"
              placeholder="jean.dupont@entreprise.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2">
              Décrivez votre projet 
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-colors resize-none text-sm sm:text-base"
              placeholder=" J'ai besoin d'un site e-commerce pour vendre mes produits artisanaux. "
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-2.5 md:mt-5 mt-8 sm:py-3 px-4 rounded-md text-sm sm:text-base font-medium text-black transition-colors ${
                status === 'sending' 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : status === 'success'
                  ? 'bg-green-500 hover:bg-green-600'
                  : status === 'error'
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-cyan-300 hover:bg-cyan-400'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300`}
            >
              {status === 'sending' && ' Envoi en cours...'}
              {status === 'success' && ' Message envoyé !'}
              {status === 'error' && ' Erreur, réessayez'}
              {status === 'idle' && ' Obtenir mon devis gratuit'}
            </button>
            <p className="mt-3 text-center text-xs text-gray-500">
              Vos données sont protégées. Réponse sous 24h garantie.
            </p>
          </div>

          {/* Message de succès détaillé */}
          {status === 'success' && (
            <div className="bg-[#0f4cf7] border border-[#0f4cf7] rounded-lg p-4 text-center">
              <p className="text-[#0f4cf7] font-medium"> Message envoyé avec succès !</p>
              <p className="text-sm text-gray-300 mt-1">Je vous répondrai dans les 24h.</p>
            </div>
          )}

          {/* Message d'erreur détaillé */}
          {status === 'error' && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center">
              <p className="text-red-400 font-medium"> Erreur d'envoi</p>
              <p className="text-sm text-gray-300 mt-1">
                Contactez-moi directement : <br />
                <a href="mailto:pascalakoudo14@gmail.com" className="text-[#0f4cf7] hover:underline">
                  pascalakoudo14@gmail.com
                </a>
              </p>
            </div>
          )}
        </form>
        </div>
       </div>
        
      </div>
    </section>
  );
}