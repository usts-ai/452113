import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/mockData';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Témoignages</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Découvrez l'expérience de nos clients qui ont trouvé leur bien idéal grâce à notre plateforme immobilière augmentée par l'IA.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Circles de décoration */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="relative h-96">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                          <img 
                            src={TESTIMONIALS[currentIndex].avatar} 
                            alt={TESTIMONIALS[currentIndex].name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-800">{TESTIMONIALS[currentIndex].name}</h3>
                          <p className="text-blue-600">{TESTIMONIALS[currentIndex].role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {renderStars(TESTIMONIALS[currentIndex].rating)}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <svg className="w-10 h-10 text-blue-100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 16.784c0 5.296 3.168 8.784 6.512 8.784 3.168 0 5.952-2.8 5.952-6.328 0-3.36-2.432-6.16-5.6-6.16-.448 0-1.12.112-1.232.112.672-2.128 3.584-5.488 6.128-7.28L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 12.784 0 5.296 3.168 8.784 6.512 8.784 3.168 0 5.952-2.8 5.952-6.328 0-3.36-2.432-6.16-5.6-6.16-.448 0-1.12.112-1.232.112.672-2.128 3.584-5.488 6.128-7.28L25.864 4z" />
                      </svg>
                      <p className="text-gray-700 text-lg mt-3 italic">
                        {TESTIMONIALS[currentIndex].text}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between items-center">
                    <div className="text-gray-500 text-sm">
                      Client depuis 2024
                    </div>
                    <img src="/logo-small.png" alt="Logo" className="h-8 opacity-30" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 focus:outline-none"
              whileHover={{ scale: 1.1, backgroundColor: "#EEF2FF" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {TESTIMONIALS.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
            
            <motion.button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 focus:outline-none"
              whileHover={{ scale: 1.1, backgroundColor: "#EEF2FF" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
