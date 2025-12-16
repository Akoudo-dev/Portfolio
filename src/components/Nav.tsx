export default function Nav() {
    return (
    <header className="bg-black backdrop-blur sticky top-0 z-40 shadow-sm">
    <div className="max-w-6xl mx-auto flex items-center justify-between p-3 sm:p-4 md:p-6">
    <a href="#hero" className="font-semibold text-base sm:text-lg md:text-xl text-white">Pascal <span className="text-cyan-300">.</span> </a>
    <nav className="space-x-4 lg:space-x-8 xl:space-x-12 hidden md:flex items-center text-white">
    <a href="#hero" className="text-sm lg:text-base xl:text-xl text-cyan-300">Home</a>
    <a href="#projects" className="text-sm lg:text-base xl:text-xl" > Featured Projects</a>
    <a href="#about" className="text-sm lg:text-base xl:text-xl">About me</a>
    <a href="#contact" className="text-sm lg:text-base xl:text-xl">Contact me</a>
    <a href="#resume" className="bg-cyan-300 text-black px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow hover:brightness-95 text-sm lg:text-base">View Resume</a>
    </nav>
    <div className="md:hidden">
    <a href="#resume" className="bg-cyan-300 text-black px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base">View Resume</a>
    </div>
    </div>
    </header>
    );
    }