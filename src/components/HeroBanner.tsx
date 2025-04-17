import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroBanner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images de fond avec effet de transition */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      {/* Contenu */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              L'Immobilier Réinventé <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Par l'Intelligence Artificielle
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Découvrez une nouvelle façon d'acheter, vendre et investir dans l'immobilier avec notre plateforme propulsée par l'IA.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-semibold shadow-xl hover:shadow-blue-500/30 text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Trouver un bien
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/30 hover:bg-white/20 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Estimation IA gratuite
              </motion.button>
            </motion.div>
            
            {/* Stats en bas du hero */}
            <motion.div
              className="absolute bottom-10 left-0 right-0 grid grid-cols-2 md:grid-cols-4 gap-5 px-6"
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { value: "97%", label: "Satisfaction client" },
                { value: "15 jours", label: "Temps moyen de vente" },
                { value: "25 000+", label: "Biens analysés par IA" },
                { value: "92%", label: "Précision des estimations" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                >
                  <h3 className="text-white text-2xl md:text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
