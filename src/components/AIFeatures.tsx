import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

const AIFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(1);

  const features: Feature[] = [
    {
      id: 1,
      title: "Analyse prédictive",
      description: "Notre algorithme d'IA analyse les tendances du marché immobilier et prédit l'évolution des prix dans les zones géographiques ciblées avec une précision de 92%.",
      icon: "📈",
      color: "from-blue-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 2,
      title: "Recommandations personnalisées",
      description: "En analysant vos préférences et comportements, notre IA vous propose des biens immobiliers parfaitement adaptés à vos besoins et votre style de vie.",
      icon: "🎯",
      color: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
    },
    {
      id: 3,
      title: "Estimation précise",
      description: "Notre technologie d'estimation immobilière analyse plus de 100 critères pour déterminer la valeur exacte de votre bien, avec une marge d'erreur inférieure à 4%.",
      icon: "💰",
      color: "from-amber-500 to-red-500",
      image: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
    },
    {
      id: 4,
      title: "Visite virtuelle augmentée",
      description: "Explorez chaque propriété en 3D et visualisez le potentiel d'aménagement grâce à notre technologie de réalité augmentée exclusive.",
      icon: "🏠",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1505764761634-1f77dd33d111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Technologie de pointe</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">L'intelligence artificielle au service de l'immobilier</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Découvrez comment notre technologie révolutionne votre expérience immobilière et vous aide à prendre les meilleures décisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  className="absolute inset-0"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <img 
                    src={features.find(f => f.id === activeFeature)?.image} 
                    alt={features.find(f => f.id === activeFeature)?.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {features.find(f => f.id === activeFeature)?.title}
                    </h3>
                    <p className="text-gray-200">
                      {features.find(f => f.id === activeFeature)?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Décoration d'arrière-plan */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                }`}
                whileHover={{ scale: activeFeature === feature.id ? 1.02 : 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start">
                  <div className={`text-3xl mr-4 ${activeFeature !== feature.id ? 'bg-gradient-to-r ' + feature.color + ' bg-clip-text text-transparent' : ''}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${activeFeature === feature.id ? 'text-white' : 'text-gray-800'}`}>
                      {feature.title}
                    </h3>
                    <p className={activeFeature === feature.id ? 'text-white/90 mt-2' : 'text-gray-600 mt-2'}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                En savoir plus sur notre technologie IA
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
