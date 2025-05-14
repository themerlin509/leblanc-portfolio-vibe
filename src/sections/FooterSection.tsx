
import { Github, Linkedin, Mail } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/50 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold gradient-text">Pierre-Roberto Leblanc</h2>
            <p className="text-gray-400 mt-1">Électromécanicien | Développeur | Entrepreneur</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Linkedin size={20} className="text-white/80" />
            </a>
            <a href="mailto:pierrerobertoleblanc10@gmail.com" className="p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Mail size={20} className="text-white/80" />
            </a>
            <a href="#" className="p-2 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Github size={20} className="text-white/80" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Pierre-Roberto Leblanc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
