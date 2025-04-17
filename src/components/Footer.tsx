import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: 'facebook', url: '#', label: 'Facebook' },
    { icon: 'twitter', url: '#', label: 'Twitter' },
    { icon: 'instagram', url: '#', label: 'Instagram' },
    { icon: 'linkedin', url: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Colonne 1 - Logo et description */}
          <motion.div className="col-span-1 md:col-span-1" variants={item}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-4"
            >
              IntelligenceImmoAI
            </motion.div>
            <p className="text-gray-300 mt-4 mb-6">
              La première plateforme immobilière augmentée par l'intelligence artificielle pour une expérience d'achat et de vente révolutionnaire.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <i className={`fa fa-${social.icon}`} aria-hidden="true"></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Liens rapides */}
          <motion.div className="col-span-1" variants={item}>
            <h3 className="text-xl font-semibold mb-6 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              {['Accueil', 'Propriétés', 'Nos services', 'À propos', 'Blog', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }} className="transition-all duration-300">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-blue-500">›</span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Services */}
          <motion.div className="col-span-1" variants={item}>
            <h3 className="text-xl font-semibold mb-6 text-white">Nos Services IA</h3>
            <ul className="space-y-3">
              {['Estimation de biens', 'Analyse prédictive', 'Recommandations personnalisées', 'Visite virtuelle', 'Conseil en investissement', 'Home staging digital'].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }} className="transition-all duration-300">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-blue-500">•</span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4 - Contact */}
          <motion.div className="col-span-1" variants={item}>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 text-blue-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300">123 Avenue de l'Innovation<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-gray-300">contact@intelligenceimmoai.fr</span>
              </li>
            </ul>

            <motion.div
              className="mt-8 p-5 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-white font-medium mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Recevez nos actualités et analyses IA</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-300"
                >
                  OK
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} IntelligenceImmoAI. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              CGU
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
