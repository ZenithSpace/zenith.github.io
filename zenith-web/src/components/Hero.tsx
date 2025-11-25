import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import heroBg from '../assets/hero_bg.jpg';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-zenith-main/70 via-zenith-main/50 to-zenith-main z-10" />
                <img
                    src={heroBg}
                    alt="Space Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-zenith-sub font-bold tracking-[0.2em] uppercase mb-4">
                        {t('hero.subtitle')}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Outfit'] leading-tight">
                        {t('hero.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zenith-sub to-white">
                            {t('hero.titleHighlight')}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-zenith-sub hover:bg-white hover:text-zenith-main text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                            {t('hero.supportButton')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="/handbook.pdf" download className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2">
                            {t('hero.downloadButton')}
                            <Download className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
