import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { partnersData } from '../data/partners';

const Partners = () => {
    const { t } = useLanguage();

    // Duplicate list for infinite scroll effect (Double it for 50% scroll)
    const partners = [...partnersData, ...partnersData];

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
                                className="group relative flex items-center justify-center p-6 bg-white rounded-xl border border-white/10 w-64 h-32 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-zenith-sub hover:shadow-[0_10px_30px_-10px_rgba(255,187,0,0.3)] z-10"
                            >
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full w-auto h-auto object-contain"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="text-black font-bold text-lg text-center">
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
