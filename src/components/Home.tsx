import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { CodeXml } from 'lucide-react';
import { Anchor } from 'lucide-react';
import { WandSparkles } from 'lucide-react';

export default function Hero() {
  return (
    <>
    <section id="hero" className="bg-black pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      
      <div className="max-w-4xl text-white mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
          Hi I am <span className="text-cyan-300">Pascal Akoudo</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white px-2">
        A seasoned <span className="text-cyan-300">Frontend Developer</span> transforming ideas into stunning digital experiences. Let's create something amazing!
        </p>
        <div className="mt-6 sm:mt-8 justify-center">
          <a 
            href="#" 
            className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Discutons de votre projet
          </a>
         <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
            <Facebook className="hover:text-blue-600 bg-white rounded-full p-2 size-9 sm:size-10 text-black cursor-pointer" />
            <Twitter className="hover:text-sky-500 cursor-pointer bg-white rounded-full p-2 size-9 sm:size-10 text-black" />
            <Instagram className="hover:text-pink-500 cursor-pointer bg-white rounded-full p-2 size-9 sm:size-10 text-black" />
            <Linkedin className="hover:text-blue-700 cursor-pointer bg-white rounded-full p-2 size-9 sm:size-10 text-black" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#1d1d14] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-4xl text-white mx-auto px-4 sm:px-6">
       <p className="text-center text-sm sm:text-base">Services </p>
       <h3 className="mb-4 sm:mb-6 mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-center">What <span className="text-cyan-300">I do.</span></h3>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
       {/*  card1 */}
    <div className="border rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-cyan-300 text-white hover:text-black">
      <div className="flex justify-between items-center gap-2">
      <CodeXml className="size-6 sm:size-7  border-2 rounded-full"/>
      <h3 className="text-2xl sm:text-3xl font-semibold opacity-50">01</h3>
      </div>
    <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-base sm:text-lg">Web Development</h3>
    <hr className="w-1/2"/>
    
    <p className="mt-2  text-xs sm:text-sm">Optimisation UX & performance pour augmenter la conversion.</p>
   
    </div>
   {/*  card2 */}
    <div className="border border-cyan-300 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-cyan-300 text-white hover:text-black">
    <div className="flex justify-between items-center gap-2">
      <Anchor className="size-6 sm:size-7  border-2 rounded-full"/>
      <h3 className="text-2xl sm:text-3xl font-semibold opacity-50">02</h3>
      </div>
    <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-base sm:text-lg">UI Design</h3>
    <hr className="w-1/2"/>
    <p className="mt-2 text-xs sm:text-sm">Optimisation UX & performance pour augmenter la conversion.</p>
   
    </div>
    {/* card3 */}
    <div className="border rounded-2xl border-cyan-300 p-4 sm:p-5 md:p-6 hover:bg-cyan-300 text-white hover:text-black">
    <div className="flex justify-between items-center gap-2">
      <WandSparkles className="size-6 sm:size-7  border-2 rounded-full"/>
      <h3 className="text-2xl sm:text-3xl font-semibold opacity-50">03</h3>
      </div>
    <h3 className="font-semibold mt-3 sm:mt-4 mb-2 text-base sm:text-lg">Content Writing</h3>
    <hr className="w-1/2"/>
    <p className="mt-2 text-xs sm:text-sm">Optimisation UX & performance pour augmenter la conversion.</p>
    
    </div>
      </div>
      </div>
    
    </section>
    </>
  );
}