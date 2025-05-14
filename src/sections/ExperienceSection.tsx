
import Section from '../components/Section';
import Card from '../components/Card';
import { Building2, Globe } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title="Expériences Professionnelles"
      subtitle="Mon parcours professionnel et mes collaborations"
    >
      <div className="space-y-8">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:text-right md:pr-12 relative">
              <div className="hidden md:block absolute right-0 top-7 transform translate-x-1/2 w-4 h-4 rounded-full bg-white/50"></div>
              <Card>
                <div className="flex items-start md:justify-end gap-4">
                  <div className="md:order-2">
                    <Globe size={24} className="text-white/70" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Ministère de la Défense (Haïti)</h3>
                    <p className="text-sm text-gray-400 mb-3">Septembre 2024 - Présent</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Conception et développement du site web officiel</li>
                      <li>Amélioration de la présence numérique</li>
                      <li>Optimisation de l'image institutionnelle</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="md:pl-12 relative">
              <div className="hidden md:block absolute left-0 top-7 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white/50"></div>
              <Card>
                <div className="flex items-start gap-4">
                  <Building2 size={24} className="text-white/70" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">RUNTECH Services</h3>
                    <p className="text-sm text-gray-400 mb-3">Novembre 2023 - Présent</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Technicien en électromécanique | Chef d'équipe</li>
                      <li>Élaboration de stratégies de croissance</li>
                      <li>Gestion de projets techniques</li>
                      <li>Maintenance de systèmes électromécaniques</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="md:text-right md:pr-12 relative">
              <div className="hidden md:block absolute right-0 top-7 transform translate-x-1/2 w-4 h-4 rounded-full bg-white/50"></div>
              <Card>
                <div className="flex items-start md:justify-end gap-4">
                  <div className="md:order-2">
                    <Building2 size={24} className="text-white/70" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">RDM Construction Plus</h3>
                    <p className="text-sm text-gray-400 mb-3">Octobre 2023 - Présent (Freelance)</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Développement de solutions techniques</li>
                      <li>Conseil en image de marque</li>
                      <li>Stratégies de développement commercial</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
