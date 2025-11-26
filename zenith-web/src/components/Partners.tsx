import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Partners = () => {
    const { t } = useLanguage();

    // Placeholder partners - user will replace these
    const partners = [
        { name: 'Partner 1', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+1', link: '#' },
        { name: 'Partner 2', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+2', link: '#' },
        { name: 'Partner 3', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+3', link: '#' },
        { name: 'Partner 4', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+4', link: '#' },
    ];

    return (
        <section id="partners" className="py-20 bg-zenith-main border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('partners.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('partners.subtitle')}</h3>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <motion.a
                            key={index}
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-all duration-300 hover:bg-white/10"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
