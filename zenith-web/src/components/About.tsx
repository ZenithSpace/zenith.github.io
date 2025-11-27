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
