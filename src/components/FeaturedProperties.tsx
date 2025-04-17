import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROPERTIES } from '../data/mockData';

const FeaturedProperties: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const featuredProperties = PROPERTIES.filter(property => property.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Propriétés coup de cœur</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Découvrez notre sélection de biens exceptionnels analysés et recommandés par notre intelligence artificielle.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredId === property.id ? 1.1 : 1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute top-0 left-0 p-3 z-10">
                  <motion.div 
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Coup de cœur IA
                  </motion.div>
                </div>
                <div className="absolute bottom-0 right-0 p-3 z-10">
                  <div className="flex items-center text-white bg-gray-900/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span className="text-xs mr-1">Score IA</span>
                    <span className="text-sm font-bold text-blue-400">{property.aiScore}%</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-xl font-bold text-blue-600">{formatPrice(property.price)}</p>
                </div>
                <p className="text-gray-600 mb-4 flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {property.address}
                </p>

                <div className="flex justify-between mt-4 mb-5 text-sm">
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    {property.surface} m²
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {property.rooms} pièces
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    {property.bedrooms} ch.
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {property.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-sm text-gray-600 mb-3">
                    <span className="text-blue-600 font-medium">Recommandation IA : </span>
                    {property.aiRecommendation}
                  </div>
                  
                  <motion.button
                    className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voir les détails
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir toutes nos propriétés
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
