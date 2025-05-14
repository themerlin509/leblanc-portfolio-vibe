
import { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message envoyé", {
        description: "Merci de m'avoir contacté. Je vous répondrai dès que possible."
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="N'hésitez pas à me contacter pour discuter de vos projets"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="flex items-center gap-4 hover:translate-y-[-5px] transition-all">
            <div className="p-3 bg-white/5 rounded-full">
              <Mail size={24} className="text-white/80" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <a href="mailto:pierrerobertoleblanc10@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                pierrerobertoleblanc10@gmail.com
              </a>
            </div>
          </Card>

          <Card className="flex items-center gap-4 hover:translate-y-[-5px] transition-all">
            <div className="p-3 bg-white/5 rounded-full">
              <Linkedin size={24} className="text-white/80" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">LinkedIn</h3>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pierre-Roberto Leblanc
              </a>
            </div>
          </Card>

          <Card className="flex items-center gap-4 hover:translate-y-[-5px] transition-all">
            <div className="p-3 bg-white/5 rounded-full">
              <FileText size={24} className="text-white/80" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">CV</h3>
              <a 
                href="https://drive.google.com/file/d/1APUhXo4_UZ-c8a0r5P8oNVwvqrhMCTmT/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Voir mon CV complet
              </a>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-white/25 focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-white/25 focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Votre email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-white/25 focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md font-medium hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
