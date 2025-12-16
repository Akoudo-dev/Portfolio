import abut from "./assets/abut.jpeg"
export default function About() {

    return (
        <>
    <section id="about" className="bg-black opacity-90">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">A bout <span className="text-cyan-300">me</span>.</h2>
    <div className="mt-6 sm:mt-8 grid gap-8 sm:gap-12 md:gap-20 grid-cols-1 md:grid-cols-2 items-start">
    
    
    {/* Photo about Me */}
    <div className="bg-white rounded-full border-2 border-cyan-300 p-4 sm:p-6 shadow mx-auto w-full max-w-sm md:max-w-none">
   <img src={abut} className="w-full h-auto" />
    </div>
        {/* la description about me  */}
    <div className="space-y-4">
    <p className="text-white text-sm sm:text-base">Je suis Pascal, développeur frontend spécialisé WordPress avec un focus sur l'expérience utilisateur, la performance et la maintenabilité. J'ai accompagné des agences et startups à lancer des sites robustes et scalables, souvent en cycles courts de 1 à 4 semaines.

    </p>
    <p className="text-white text-sm sm:text-base">Je suis Pascal, développeur frontend spécialisé WordPress avec un focus sur l'expérience utilisateur, la performance et la maintenabilité. J'ai accompagné des agences et startups à lancer des sites robustes et scalables, souvent en cycles courts de 1 à 4 semaines.

    </p>

    <div className="mt-4 sm:mt-6">
    <a href="#resume" className="inline-block bg-cyan-300 text-black px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">View Resume</a>
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
            <p className="text-cyan-300 text-xs sm:text-sm uppercase tracking-wider">SKILLS</p>
            <h3 className="text-white font-medium text-xl sm:text-2xl md:text-3xl">Technical <span className="text-cyan-300">skills</span>.</h3>
            <p className="text-white text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat distinctio cumque debitis autem, officia quod voluptate aut quos! Nisi cum facere neque laborum dolorum facilis, ab molestiae voluptatum deleniti tenetur.
            </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">HTML5</button>
              <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">JAVASCRIPT</button>
              <button className="border rounded-full text-white border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">CSS</button>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">REACT</button>
            <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">TAILWIND</button> 
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <button className="border opacity-80 text-white rounded-full border-cyan-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">UI DESIGN</button>
            <button className="border rounded-xl border-cyan-300 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">TYPESCRIPT</button>
            </div>
        </div>
        </div>
    </div>
    </section>
    </>
    );
    }