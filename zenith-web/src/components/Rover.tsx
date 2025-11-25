import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const roverImage = "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=1000";

const Rover = () => {
    const { t } = useLanguage();

    const specs = [
        { icon: <Scale />, label: t('rover.specs.weight'), value: '50kg' },
        { icon: <Zap />, label: t('rover.specs.speed'), value: '2m/s' },
        { icon: <Activity />, label: t('rover.specs.arm'), value: '5kg' },
        { icon: <Cpu />, label: t('rover.specs.battery'), value: '4hrs' },
    ];

    return (
        <section id="rover" className="py-20 bg-[#050608] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Rover Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-zenith-sub/20 blur-[100px] rounded-full" />
                        <img
                            src={roverImage}
                            alt="Mars Rover Prototype"
                            className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Specs */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('rover.title')}</h2>
                        <h3 className="text-4xl font-bold font-['Outfit'] mb-8">{t('rover.subtitle')}</h3>

                        <div className="grid grid-cols-2 gap-6">
                            {specs.map((spec, index) => (
                                <div key={index} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-colors group">
                                    <div className="text-zenith-sub mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {spec.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">{spec.value}</div>
                                    <div className="text-sm text-gray-400">{spec.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Rover;
