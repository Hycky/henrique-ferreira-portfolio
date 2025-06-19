import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Lightbulb, Cog, TrendingUp } from 'lucide-react';

const Cases = () => {
  const { t } = useTranslation();

  const cases = [
    {
      id: 1,
      title: 'Otimização de Performance de Vendas',
      challenge: 'Uma empresa de e-commerce precisava de visibilidade em tempo real sobre suas vendas e identificar gargalos no funil de conversão.',
      solution: 'Implementei um pipeline completo de dados integrando múltiplas fontes (CRM, e-commerce, marketing) com dashboards interativos em Power BI.',
      architecture: 'Airbyte → PostgreSQL → dbt → Power BI + Alertas n8n',
      technologies: ['Airbyte', 'PostgreSQL', 'dbt', 'Power BI', 'n8n'],
      impact: 'Aumento de 25% na eficiência das vendas e redução de 40% no tempo de tomada de decisão.',
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Automação de Relatórios Financeiros',
      challenge: 'Processo manual de geração de relatórios financeiros consumia 8 horas semanais da equipe e estava sujeito a erros.',
      solution: 'Criei automações com n8n para coleta, processamento e distribuição automática de relatórios financeiros.',
      architecture: 'APIs Financeiras → n8n → DuckDB → Streamlit → Email',
      technologies: ['n8n', 'DuckDB', 'Streamlit', 'FastAPI', 'Docker'],
      impact: 'Redução de 95% no tempo de geração de relatórios e eliminação de erros manuais.',
      icon: Cog
    },
    {
      id: 3,
      title: 'Sistema de Monitoramento de Qualidade',
      challenge: 'Necessidade de monitorar a qualidade dos dados em tempo real e detectar anomalias automaticamente.',
      solution: 'Desenvolvi um sistema de monitoramento com Prometheus e Grafana, integrado com alertas inteligentes.',
      architecture: 'Data Sources → Prometheus → Grafana → n8n → Slack/Email',
      technologies: ['Prometheus', 'Grafana', 'n8n', 'PostgreSQL', 'Docker'],
      impact: 'Detecção de anomalias 80% mais rápida e melhoria de 30% na qualidade dos dados.',
      icon: Target
    }
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('cases.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cases.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                    <caseItem.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {caseItem.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-destructive" />
                        <h4 className="font-semibold text-foreground">Desafio</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {caseItem.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        <h4 className="font-semibold text-foreground">Solução</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {caseItem.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Arquitetura</h4>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <code className="text-sm text-foreground font-mono">
                        {caseItem.architecture}
                      </code>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                      Impacto
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {caseItem.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;

