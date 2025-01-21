import { Link } from "react-router-dom";
import { scrollToSection, scrollToTop } from "@/utils/scrollUtils";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  const handleSectionClick = (sectionId: string) => {
    if (window.location.pathname === "/") {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-sunset text-transparent bg-clip-text">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => handleSectionClick('stays')} className="hover:text-primary transition-colors">
                  {t('nav.stays')}
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleSectionClick('work')} className="hover:text-primary transition-colors">
                  {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleSectionClick('travel')} className="hover:text-primary transition-colors">
                  {t('nav.travel')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-ocean text-transparent bg-clip-text">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-sunset text-transparent bg-clip-text"
            >
              Roamari
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              {t('footer.copyright', { year: new Date().getFullYear() })} {" "}
              <a 
                href="https://elev8.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                {t('footer.by')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};