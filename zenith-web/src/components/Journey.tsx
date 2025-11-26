import { motion } from 'framer-motion';
import { Flag, Trophy, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Journey = () => {
    const { t } = useLanguage();

    const milestones = [
        {
            year: t('journey.milestones.founded.year'),
            title: t('journey.milestones.founded.title'),
            description: t('journey.milestones.founded.desc'),
            icon: <Flag size={20} />,
            image: "/assets/journey/2024_founding.webp"
        },
        {
            year: t('journey.milestones.prototype.year'),
            title: t('journey.milestones.prototype.title'),
            description: t('journey.milestones.prototype.desc'),
            icon: <Rocket size={20} />,
            image: "/assets/journey/2024_mvp.webp"
        },
        {
            year: t('journey.milestones.award.year'),
            title: t('journey.milestones.award.title'),
            description: t('journey.milestones.award.desc'),
            icon: <Trophy size={20} />,
            image: "/assets/journey/2025_award.webp"
        },
        {
            year: t('journey.milestones.urc.year'),
            title: t('journey.milestones.urc.title'),
            description: t('journey.milestones.urc.desc'),
            icon: <Rocket size={20} />,
            image: "/assets/journey/2026_urc.webp?v=fixed"
        }
    ];

    return (
        <section id="journey" className="py-20 bg-zenith-main relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('journey.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('journey.subtitle')}</h3>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 hidden md:block" />

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-5/12" />
                                <div className="z-10 w-10 h-10 rounded-full bg-zenith-sub flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,187,0,0.5)] mb-4 md:mb-0">
                                    {milestone.icon}
                                </div>
                                <div className="w-full md:w-5/12">
                                    <div className="glass-panel p-6 rounded-xl hover:border-zenith-sub/50 transition-colors">
                                        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text-zenith-sub font-bold mb-2">{milestone.year}</div>
                                        <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
