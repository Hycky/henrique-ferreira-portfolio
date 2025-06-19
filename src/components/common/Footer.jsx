import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2024 Henrique Ferreira. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

