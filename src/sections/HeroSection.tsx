
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after a small delay for dramatic effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background to-background" />
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 inline-block">
            <span className="py-1 px-3 border border-white/10 rounded-full text-sm bg-white/5 backdrop-blur-sm">
              Électromécanicien | Développeur | Fondateur de Bac Fasil
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text glow-effect">
            Pierre-Roberto <br /> Leblanc
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professionnel polyvalent en électromécanique et technologies numériques, je combine expertise technique et compétences en 
            développement web pour offrir des solutions innovantes et durables.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#about" 
              className="btn bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-slate-200 transition-colors"
            >
              En savoir plus
            </a>
            <a 
              href="#contact" 
              className="btn px-6 py-3 rounded-md font-medium border border-white/20 hover:bg-white/10 transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } animate-bounce`}
      >
        <ArrowDown className="text-white/50 hover:text-white transition-colors" />
      </a>
    </section>
  );
};

export default HeroSection;
