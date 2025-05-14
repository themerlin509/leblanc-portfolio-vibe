
import { useEffect, useRef } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

const SkillsSection = () => {
  const skills = [
    {
      category: "Technique",
      items: [
        { name: "Électromécanique", level: 95 },
        { name: "Maintenance industrielle", level: 90 },
        { name: "Systèmes électriques", level: 85 },
        { name: "Automatismes", level: 80 }
      ]
    },
    {
      category: "Développement",
      items: [
        { name: "WordPress", level: 85 },
        { name: "Webflow", level: 80 },
        { name: "HTML/CSS", level: 75 },
        { name: "No-code solutions", level: 90 }
      ]
    },
    {
      category: "Marketing",
      items: [
        { name: "Marketing digital", level: 85 },
        { name: "Community Management", level: 80 },
        { name: "Facebook Ads", level: 75 },
        { name: "Branding", level: 85 }
      ]
    },
    {
      category: "Gestion",
      items: [
        { name: "Gestion de projets", level: 85 },
        { name: "Leadership d'équipe", level: 80 },
        { name: "Planification stratégique", level: 75 },
        { name: "Résolution de problèmes", level: 90 }
      ]
    }
  ];

  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle="Mes domaines d'expertise et compétences techniques"
      className="bg-gradient-to-b from-black/30 to-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <Card key={index}>
            <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
            <div className="space-y-5">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" 
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
