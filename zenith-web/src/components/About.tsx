import { motion } from 'framer-motion';
import { Target, Rocket, History } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <History className="w-8 h-8 text-zenith-sub" />,
            title: t('about.historyTitle'),
            description: t('about.historyDesc')
        },
        {
            icon: <Target className="w-8 h-8 text-zenith-sub" />,
            title: t('about.missionTitle'),
            description: t('about.missionDesc')
        },
        {
            icon: <Rocket className="w-8 h-8 text-zenith-sub" />,
            title: t('about.visionTitle'),
            description: t('about.visionDesc')
        }
    ];

    return (
        <section id="about" className="py-20 bg-[#0A0B10]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('about.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">Who We Are</h3>
                </motion.div>

                {/* URC 2026 Announcement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20 bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10"
                >
                    <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-zenith-sub/20">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/yWl8IhGZf-s"
                            title="Zenith Space URC SAR"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full lg:w-1/2 text-left space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-zenith-sub/20 text-zenith-sub font-bold text-sm tracking-wider border border-zenith-sub/30">
                            {t('about.urcAnnouncement.badge')}
                        </div>
                        <h4 className="text-3xl sm:text-4xl font-bold leading-tight">
                            {t('about.urcAnnouncement.title')}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {t('about.urcAnnouncement.description')}
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel p-8 rounded-2xl hover:border-zenith-sub/50 transition-colors"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
