import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoIcon from '../assets/logo_icon.png';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.journey'), href: '#journey' },
    { name: t('nav.rover'), href: '#rover' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.partners'), href: '#partners' },
    { name: t('nav.sponsorship'), href: '#sponsorship' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zenith-main/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src={logoIcon} alt="Zenith Space Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold font-['Outfit'] tracking-wider text-white">ZENITH SPACE</span>
          </div>

          {/* Desktop Menu - Changed lg to xl for earlier hamburger switch */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-zenith-sub hover:-translate-y-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border border-white/20 hover:border-white/50"
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'KO' : 'EN'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - Changed lg to xl */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-white p-2"
            >
              <span className="font-bold">{language === 'en' ? 'KO' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Changed lg to xl */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-zenith-main border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
