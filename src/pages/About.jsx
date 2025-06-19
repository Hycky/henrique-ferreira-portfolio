import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import technology icons
import apacheAirflowIcon from '../assets/apache_airflow_icon.png';
import dbtIcon from '../assets/dbt_icon.png';
import sqlServerIcon from '../assets/sql_server_icon.png';
import postgresqlIcon from '../assets/postgresql_icon.png';
import duckdbIcon from '../assets/duckdb_icon.png';
import redisIcon from '../assets/redis_icon.png';
import fastapiIcon from '../assets/fastapi_icon.png';
import powerBiIcon from '../assets/power_bi_icon.png';
import grafanaIcon from '../assets/grafana_icon.png';
import supersetIcon from '../assets/superset_icon.png';
import streamlitIcon from '../assets/streamlit_icon.png';
import dockerIcon from '../assets/docker_icon.png';
import prometheusIcon from '../assets/prometheus_icon.png';
import lokiIcon from '../assets/loki_icon.png';
import n8nIcon from '../assets/n8n_icon.png';

const About = () => {
  const { t } = useTranslation();

  const technologies = [
    { name: 'Apache Airflow', icon: apacheAirflowIcon },
    { name: 'dbt', icon: dbtIcon },
    { name: 'SQL Server', icon: sqlServerIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'DuckDB', icon: duckdbIcon },
    { name: 'Redis', icon: redisIcon },
    { name: 'FastAPI', icon: fastapiIcon },
    { name: 'Power BI', icon: powerBiIcon },
    { name: 'Grafana', icon: grafanaIcon },
    { name: 'Superset', icon: supersetIcon },
    { name: 'Streamlit', icon: streamlitIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Prometheus', icon: prometheusIcon },
    { name: 'Loki', icon: lokiIcon },
    { name: 'n8n', icon: n8nIcon }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('about.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {t('about.description')}
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              {t('about.technologies')}
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm text-muted-foreground text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

