import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      nav: {
        about: "Sobre Mim",
        portfolio: "Portfólio de BI",
        dataEngineering: "Engenharia de Dados",
        automation: "Automação com n8n",
        cases: "Cases Reais",
        certifications: "Certificações",
        articles: "Artigos",
        contact: "Contato"
      },
      hero: {
        title: "Henrique Ferreira",
        subtitle: "Analista de BI & Engenheiro de Dados",
        description: "Transformando dados em insights estratégicos com tecnologias modernas e automações inteligentes."
      },
      about: {
        title: "Sobre Mim",
        description: "Sou um profissional especializado em Business Intelligence e Engenharia de Dados, com ampla experiência em transformar dados brutos em insights estratégicos que impulsionam decisões de negócio. Minha expertise abrange desde a ingestão e transformação de dados até a criação de dashboards interativos e automações inteligentes.",
        technologies: "Tecnologias que domino:"
      },
      portfolio: {
        title: "Portfólio de BI",
        description: "Dashboards e visualizações criados para diferentes necessidades de negócio",
        powerBiTitle: "Dashboard de Vendas - Power BI",
        powerBiDescription: "Dashboard completo de performance de vendas com KPIs e análises de tendências.",
        supersetTitle: "Analytics Web - Superset",
        supersetDescription: "Painel de analytics web com métricas de usuários e comportamento."
      },
      dataEngineering: {
        title: "Engenharia de Dados",
        description: "Pipelines robustos e escaláveis para processamento de dados",
        pipelineTitle: "Pipeline de Dados Completo",
        pipelineDescription: "Arquitetura end-to-end para ingestão, transformação e carga de dados com monitoramento em tempo real."
      },
      automation: {
        title: "Automação com n8n",
        description: "Workflows inteligentes para otimizar processos e aumentar eficiência",
        workflowTitle: "Workflow de Monitoramento",
        workflowDescription: "Automação para monitoramento de APIs com alertas por email em caso de falhas."
      },
      cases: {
        title: "Cases Reais",
        description: "Projetos implementados com impacto real nos negócios"
      },
      certifications: {
        title: "Certificações",
        description: "Certificações e qualificações profissionais"
      },
      contact: {
        title: "Contato",
        description: "Entre em contato para discutir projetos e oportunidades",
        form: {
          name: "Nome",
          email: "E-mail",
          message: "Mensagem",
          send: "Enviar Mensagem"
        },
        downloadCV: "Baixar Currículo"
      },
      footer: {
        rights: "Todos os direitos reservados."
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About Me",
        portfolio: "BI Portfolio",
        dataEngineering: "Data Engineering",
        automation: "n8n Automation",
        cases: "Real Cases",
        certifications: "Certifications",
        articles: "Articles",
        contact: "Contact"
      },
      hero: {
        title: "Henrique Ferreira",
        subtitle: "BI Analyst & Data Engineer",
        description: "Transforming data into strategic insights with modern technologies and intelligent automations."
      },
      about: {
        title: "About Me",
        description: "I am a professional specialized in Business Intelligence and Data Engineering, with extensive experience in transforming raw data into strategic insights that drive business decisions. My expertise ranges from data ingestion and transformation to creating interactive dashboards and intelligent automations.",
        technologies: "Technologies I master:"
      },
      portfolio: {
        title: "BI Portfolio",
        description: "Dashboards and visualizations created for different business needs",
        powerBiTitle: "Sales Dashboard - Power BI",
        powerBiDescription: "Complete sales performance dashboard with KPIs and trend analysis.",
        supersetTitle: "Web Analytics - Superset",
        supersetDescription: "Web analytics panel with user metrics and behavior analysis."
      },
      dataEngineering: {
        title: "Data Engineering",
        description: "Robust and scalable pipelines for data processing",
        pipelineTitle: "Complete Data Pipeline",
        pipelineDescription: "End-to-end architecture for data ingestion, transformation and loading with real-time monitoring."
      },
      automation: {
        title: "n8n Automation",
        description: "Intelligent workflows to optimize processes and increase efficiency",
        workflowTitle: "Monitoring Workflow",
        workflowDescription: "Automation for API monitoring with email alerts in case of failures."
      },
      cases: {
        title: "Real Cases",
        description: "Implemented projects with real business impact"
      },
      certifications: {
        title: "Certifications",
        description: "Professional certifications and qualifications"
      },
      contact: {
        title: "Contact",
        description: "Get in touch to discuss projects and opportunities",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message"
        },
        downloadCV: "Download CV"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

