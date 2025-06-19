import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      id: 1,
      name: 'Microsoft Certified: Azure Data Engineer Associate',
      institution: 'Microsoft',
      date: '2023',
      link: '#',
      description: 'Certificação em engenharia de dados na plataforma Azure'
    },
    {
      id: 2,
      name: 'dbt Analytics Engineering Certification',
      institution: 'dbt Labs',
      date: '2023',
      link: '#',
      description: 'Certificação em engenharia de analytics com dbt'
    },
    {
      id: 3,
      name: 'Apache Airflow Fundamentals',
      institution: 'Astronomer',
      date: '2022',
      link: '#',
      description: 'Fundamentos de orquestração de workflows com Apache Airflow'
    },
    {
      id: 4,
      name: 'Power BI Data Analyst Associate',
      institution: 'Microsoft',
      date: '2022',
      link: '#',
      description: 'Análise de dados e criação de dashboards com Power BI'
    },
    {
      id: 5,
      name: 'Google Cloud Professional Data Engineer',
      institution: 'Google Cloud',
      date: '2022',
      link: '#',
      description: 'Engenharia de dados na plataforma Google Cloud'
    },
    {
      id: 6,
      name: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      date: '2021',
      link: '#',
      description: 'Arquitetura de soluções na plataforma AWS'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('certifications.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('certifications.description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium">{cert.institution}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      
                      <a
                        href={cert.link}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

