import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/mockData';

const BlogSection: React.FC = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Dernières actualités</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Notre blog immobilier</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Retrouvez nos derniers articles, analyses et conseils pour rester informé des tendances du marché immobilier.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-5">
                  {post.excerpt}
                </p>
                
                <motion.button
                  className="text-blue-600 font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Lire l'article
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </motion.button>
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
            Voir tous les articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
