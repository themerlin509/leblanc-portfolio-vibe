
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { GraduationCap, School } from 'lucide-react';

const EducationSection = () => {
  return (
    <Section
      id="education"
      title="Formation"
      subtitle="Mon parcours académique et formations professionnelles"
      className="bg-gradient-to-b from-black/30 to-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute transform rotate-45 bg-badge-gold w-24 h-5 top-6 right-[-30px]"></div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 bg-white/5 rounded-full h-fit">
              <School size={28} className="text-white/80" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">Diplôme en Électromécanique</h3>
                <Badge type="gold">Diplôme</Badge>
              </div>
              <p className="text-gray-400 mb-3">Canado Technique (2022-2024)</p>
              <p className="text-gray-300">
                Formation complète en électromécanique, incluant les systèmes électriques, mécaniques et leur intégration.
              </p>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute transform rotate-45 bg-badge-gold w-24 h-5 top-6 right-[-30px]"></div>
          </div>
          
          <div className="flex gap-4">
            <div className="p-3 bg-white/5 rounded-full h-fit">
              <GraduationCap size={28} className="text-white/80" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">Gestion Moderne des Ressources Humaines</h3>
                <Badge type="gold">Diplôme</Badge>
              </div>
              <p className="text-gray-400 mb-3">Alison</p>
              <p className="text-gray-300">
                Formation approfondie sur les techniques modernes de gestion des ressources humaines et le développement organisationnel.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default EducationSection;
