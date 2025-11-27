import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { partnersData } from '../data/partners';

const Partners = () => {
    const { t } = useLanguage();

    // Partners data

    // Duplicate list for infinite scroll effect (Double it for 50% scroll)
    const partners = [...partnersData, ...partnersData];



    // Sparkle Halo Component (Optimized - Glow Only)
    const SparkleHalo = () => {
        return (
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* 1. The Subtle Halo (Outer Glow) - White & Softer (Matches Sponsorship) */}
                <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-all duration-500"
                    style={{ backgroundColor: '#FFFFFF' }}
                />
            </div>
        );
    };

    return (
        <section id="partners" className="py-20 bg-zenith-main border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('partners.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('partners.subtitle')}</h3>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zenith-main to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zenith-main to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    <div className="flex gap-8 px-4 items-center py-10">
                        {partners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.link}
                                target={partner.link.startsWith('http') ? "_blank" : "_self"}
                                rel={partner.link.startsWith('http') ? "noopener noreferrer" : ""}
                                className="group relative flex items-center justify-center p-6 bg-white rounded-xl border border-white/10 transition-colors duration-300 w-64 flex-shrink-0 z-10 h-32"
                            >
                                <SparkleHalo />

                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full w-auto h-auto object-contain relative z-10"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="text-black font-bold text-lg text-center relative z-10">
                                        {t('partners.placeholder')}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
