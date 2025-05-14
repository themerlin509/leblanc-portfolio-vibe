
import Section from '../components/Section';
import Card from '../components/Card';
import { Award, Briefcase, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="À Propos"
      subtitle="Découvrez mon parcours professionnel et mes compétences"
      className="bg-gradient-to-b from-black/50 to-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-white/10">
            <User size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Qui suis-je</h3>
          <p className="text-gray-400">
            Diplômé en électromécanique de Canado Technique, passionné par le développement web et les solutions technologiques innovantes.
          </p>
        </Card>

        <Card className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-white/10">
            <Briefcase size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Mon expertise</h3>
          <p className="text-gray-400">
            Je combine une solide expérience en électromécanique avec des compétences en développement web, gestion de projets et marketing numérique.
          </p>
        </Card>

        <Card className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-white/10">
            <Award size={28} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Mes réalisations</h3>
          <p className="text-gray-400">
            Collaboration avec des institutions publiques comme le Ministère de la Défense (Haïti) et des entreprises privées pour améliorer leur présence numérique.
          </p>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              Bienvenue sur mon portfolio professionnel. Je suis Pierre-Roberto Leblanc, un électromécanicien polyvalent avec une passion pour le développement web et les technologies numériques.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Ma formation en électromécanique et mon auto-apprentissage continu dans le développement web me permettent d'offrir une perspective unique à mes clients et partenaires. En tant qu'auto-entrepreneur et fondateur de Bac Fasil, je m'efforce de créer des solutions techniques innovantes qui répondent aux besoins spécifiques de chaque projet.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Mon expérience professionnelle auprès d'institutions comme le Ministère de la Défense d'Haïti et diverses entreprises privées m'a permis de développer une compréhension approfondie des enjeux techniques et numériques actuels. Je continue à me former régulièrement pour rester à la pointe des technologies et méthodologies.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default AboutSection;
