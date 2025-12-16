export default function Contact() {
  return (
    <section id="contact" className="bg-black py-12 sm:py-16 md:py-20">
      <div className="bg-black text-white">
        <div className="px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Contactez-moi</h2>
        <p className="mt-2 text-gray-400 text-center text-sm sm:text-base">
          Un projet en tête ? Discutons-en !
        </p>
        </div>
       {/*  Contact */}
       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
            Have an awesome project idea? <br /> <span className="text-cyan-300">Let's Discuss</span>
          </h3>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          <p className="text-gray-300">+229123456789</p>
          <p className="text-gray-300">pascalakoudo14@gmail.com</p>
          <p className="text-gray-300">cotonou, Benin</p>
          </div>
        </div>
        <form className="text-white space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-colors text-sm sm:text-base"
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-colors text-sm sm:text-base"
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-colors resize-none text-sm sm:text-base"
              placeholder="Votre message..."
              defaultValue={''}
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full py-2.5 md:mt-5 mt-8 sm:py-3 px-4 rounded-md text-sm sm:text-base font-medium text-black bg-cyan-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-300 transition-colors"
            >
              Envoyer le message
            </button>
          </div>
        </form>
        </div>
       </div>
        
      </div>
    </section>
  );
}