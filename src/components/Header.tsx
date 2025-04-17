import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
            IntelligenceImmoAI
          </div>
        </motion.div>

        {/* Menu pour bureau */}
        <div className="hidden md:flex items-center space-x-8">
          {['Accueil', 'Propriétés', 'Services IA', 'À propos', 'Blog', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className={`relative text-base font-medium ${
                isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
              } transition-colors duration-300`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.button
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Estimation IA
          </motion.button>
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-10 h-10 flex flex-col justify-center items-center focus:outline-none ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <span
              className={`block w-6 h-0.5 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {['Accueil', 'Propriétés', 'Services IA', 'À propos', 'Blog', 'Contact'].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-800 hover:text-blue-600 text-lg font-medium py-2 border-b border-gray-100"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium mt-4"
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Estimation IA
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
