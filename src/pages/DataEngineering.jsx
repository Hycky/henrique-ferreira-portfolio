import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Database, ArrowRight, BarChart3 } from 'lucide-react';

// Import pipeline image
import dataPipelineImage from '../assets/data_pipeline_example.png';

const DataEngineering = () => {
  const { t } = useTranslation();

  const pipelineSteps = [
    {
      icon: Database,
      title: 'Ingestão de Dados',
      description: 'Coleta de dados de múltiplas fontes usando Airbyte e scripts customizados',
      technologies: ['Airbyte', 'Python', 'APIs REST']
    },
    {
      icon: ArrowRight,
      title: 'Transformação',
      description: 'Processamento e limpeza dos dados com dbt e DuckDB para análises',
      technologies: ['dbt', 'DuckDB', 'SQL']
    },
    {
      icon: BarChart3,
      title: 'Carga e Monitoramento',
      description: 'Armazenamento em bancos de produção com monitoramento contínuo',
      technologies: ['PostgreSQL', 'MariaDB', 'Prometheus', 'Grafana']
    }
  ];

  return (
    <section id="data-engineering" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('dataEngineering.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('dataEngineering.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Pipeline Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 mb-12 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              {t('dataEngineering.pipelineTitle')}
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              {t('dataEngineering.pipelineDescription')}
            </p>
            
            <div className="flex justify-center mb-8">
              <img
                src={dataPipelineImage}
                alt="Pipeline de Dados"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </motion.div>

          {/* Pipeline Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3 text-center">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground mb-4 text-center">
                  {step.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {step.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngineering;

