import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink } from 'lucide-react';

// Import dashboard images
import powerBiDashboard from '../assets/power_bi_dashboard_example.png';
import supersetDashboard from '../assets/superset_dashboard_example.png';

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const dashboards = [
    {
      id: 1,
      title: t('portfolio.powerBiTitle'),
      description: t('portfolio.powerBiDescription'),
      image: powerBiDashboard,
      technologies: ['Power BI', 'SQL Server', 'DAX'],
      link: '#'
    },
    {
      id: 2,
      title: t('portfolio.supersetTitle'),
      description: t('portfolio.supersetDescription'),
      image: supersetDashboard,
      technologies: ['Apache Superset', 'PostgreSQL', 'Python'],
      link: '#'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group cursor-pointer" onClick={() => openLightbox(dashboard.image)}>
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Clique para ampliar</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {dashboard.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {dashboard.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {dashboard.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={dashboard.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Ver projeto <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-5xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Dashboard ampliado"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

