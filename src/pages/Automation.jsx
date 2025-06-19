import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, Mail, Clock, CheckCircle } from 'lucide-react';

// Import n8n workflow image
import n8nWorkflowImage from '../assets/n8n_workflow_example.png';

const Automation = () => {
  const { t } = useTranslation();

  const automationFeatures = [
    {
      icon: Zap,
      title: 'Monitoramento de APIs',
      description: 'Verificação automática do status de APIs críticas com alertas em tempo real'
    },
    {
      icon: Clock,
      title: 'ETLs Agendados',
      description: 'Execução automática de processos de extração, transformação e carga de dados'
    },
    {
      icon: Mail,
      title: 'Alertas Inteligentes',
      description: 'Notificações por email personalizadas baseadas em condições específicas'
    },
    {
      icon: CheckCircle,
      title: 'Validação de Dados',
      description: 'Verificação automática da qualidade e integridade dos dados processados'
    }
  ];

  return (
    <section id="automation" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('automation.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('automation.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Workflow Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 mb-12 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              {t('automation.workflowTitle')}
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              {t('automation.workflowDescription')}
            </p>
            
            <div className="flex justify-center mb-6">
              <img
                src={n8nWorkflowImage}
                alt="Workflow n8n"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full">
                <img src="/src/assets/n8n_icon.png" alt="n8n" className="w-5 h-5 mr-2" />
                Powered by n8n
              </span>
            </div>
          </motion.div>

          {/* Automation Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;

