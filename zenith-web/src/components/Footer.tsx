import { Mail, Instagram, Youtube, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="sponsorship" className="bg-[#050608] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-6 font-['Outfit']">ZENITH SPACE</h2>
                        <p className="text-gray-400 max-w-md mb-8">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/zenith_space_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zenith-sub hover:text-white transition-colors text-gray-400">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.youtube.com/@ZenithSpace1014" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zenith-sub hover:text-white transition-colors text-gray-400">
                                <Youtube size={20} />
                            </a>
                            <a href="mailto:zenith1014@zenith.or.kr" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zenith-sub hover:text-white transition-colors text-gray-400">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-zenith-sub transition-colors">{t('nav.about')}</a></li>
                            <li><a href="#journey" className="text-gray-400 hover:text-zenith-sub transition-colors">{t('nav.journey')}</a></li>
                            <li><a href="#rover" className="text-gray-400 hover:text-zenith-sub transition-colors">{t('nav.rover')}</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-zenith-sub transition-colors">{t('nav.team')}</a></li>
                        </ul>
                    </div>

                    {/* Sponsorship */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t('footer.sponsorship')}</h4>
                        <p className="text-gray-400 mb-6 text-sm">
                            {t('footer.sponsorshipDesc')}
                        </p>
                        <a href="/handbook.pdf" download className="w-full px-6 py-3 bg-zenith-sub hover:bg-zenith-sub text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                            <Download size={18} />
                            {t('footer.download')}
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 {t('footer.rights')}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        Designed by Zenith Space
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
