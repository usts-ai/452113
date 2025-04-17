import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Prêt à découvrir la puissance de l'IA pour votre projet immobilier ?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Que vous soyez acheteur, vendeur ou investisseur, notre intelligence artificielle vous accompagne à chaque étape de votre parcours immobilier.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="px-8 py-4 bg-white text-blue-700 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              Démarrer mon estimation gratuite
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Nous contacter
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-16 pt-10 border-t border-white/20 text-blue-100 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conseils d'experts</h3>
              <p className="text-center opacity-80">Une équipe de professionnels à votre écoute pour vous guider.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Résultats rapides</h3>
              <p className="text-center opacity-80">Des analyses et recommandations en temps réel grâce à notre IA.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité garantie</h3>
              <p className="text-center opacity-80">Vos données sont protégées et votre vie privée respectée.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
