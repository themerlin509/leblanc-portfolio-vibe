
import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const certifications = [
    {
      id: 1,
      title: "Méthodologie de vente sans frictions",
      issuer: "HubSpot Academy",
      date: "avril 2025",
      category: "marketing"
    },
    {
      id: 2,
      title: "WordPress",
      issuer: "Coursera",
      date: "février 2025",
      category: "dev"
    },
    {
      id: 3,
      title: "Certification en entrepreneuriat",
      issuer: "HP LIFE",
      date: "novembre 2024",
      category: "business"
    },
    {
      id: 4,
      title: "Publicités Facebook Ads",
      issuer: "OpenClassrooms",
      date: "juillet 2024",
      category: "marketing"
    },
    {
      id: 5,
      title: "Gestion de communauté",
      issuer: "OpenClassrooms",
      date: "juillet 2024",
      category: "marketing"
    },
    {
      id: 6,
      title: "Marketing digital",
      issuer: "Google Digital Garage",
      date: "juin 2024",
      category: "marketing"
    },
    {
      id: 7,
      title: "Maintenance Productive Totale (TPM)",
      issuer: "Alison",
      date: "mai 2024",
      category: "technical"
    },
    {
      id: 8,
      title: "Fondements de la gestion de projet : intégration PMI",
      issuer: "LinkedIn Learning",
      date: "2024",
      category: "business"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'dev', name: 'Développement' },
    { id: 'business', name: 'Business' },
    { id: 'technical', name: 'Technique' }
  ];

  const filteredCertifications = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Mes qualifications et certifications professionnelles"
    >
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === category.id 
                ? 'bg-white/10 border-white/30 text-white' 
                : 'bg-transparent border-white/10 text-gray-300 hover:bg-white/5'
            } transition-all`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map(certification => (
          <Card key={certification.id} className="border border-white/10 hover:border-white/20">
            <div className="flex gap-4">
              <div className="p-2 bg-white/5 rounded-full h-fit">
                <Award size={20} className="text-white/80" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{certification.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-sm text-gray-400">{certification.issuer}</p>
                  <Badge type="silver">{certification.date}</Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default CertificationsSection;
