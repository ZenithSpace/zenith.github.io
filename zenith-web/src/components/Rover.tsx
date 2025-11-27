import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Weight, Gauge, Dumbbell, Battery } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import roverV1 from '../assets/Zero_v1.webp';
import roverV2 from '../assets/Zero_v2.jpg';

const Rover = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'v1' | 'v2'>('v2');

    const rovers = {
        v1: {
            image: roverV1,
            specs: [
                { icon: <Weight />, label: t('rover.v1.specs.weight'), value: t('rover.v1.values.weight') },
                { icon: <Gauge />, label: t('rover.v1.specs.speed'), value: t('rover.v1.values.speed') },
                { icon: <Dumbbell />, label: t('rover.v1.specs.arm'), value: t('rover.v1.values.arm') },
                { icon: <Battery />, label: t('rover.v1.specs.battery'), value: t('rover.v1.values.battery') },
            ]
        },
        v2: {
            image: roverV2,
            specs: [
                { icon: <Weight />, label: t('rover.v2.specs.weight'), value: t('rover.v2.values.weight') },
                { icon: <Gauge />, label: t('rover.v2.specs.speed'), value: t('rover.v2.values.speed') },
                { icon: <Dumbbell />, label: t('rover.v2.specs.arm'), value: t('rover.v2.values.arm') },
                { icon: <Battery />, label: t('rover.v2.specs.battery'), value: t('rover.v2.values.battery') },
            ]
        }
    };

    return (
        <section id="rover" className="py-20 bg-[#050608] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('rover.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit'] mb-8">{t('rover.subtitle')}</h3>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-8">
                        {(['v1', 'v2'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border ${activeTab === tab
                                        ? 'bg-zenith-sub text-white border-zenith-sub shadow-[0_0_15px_rgba(255,187,0,0.4)]'
                                        : 'bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white'
                                    }`}
                            >
                                {t(`rover.tabs.${tab}`)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Rover Image */}
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-zenith-sub/20 blur-[100px] rounded-full" />

                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
                                <div className="absolute inset-0 bg-zenith-sub/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                <img
                                    src={rovers[activeTab].image}
                                    alt={t(`rover.${activeTab}.name`)}
                                    className="relative z-10 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Description & Specs */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">{t(`rover.${activeTab}.name`)}</h3>
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                {t(`rover.${activeTab}.description`)}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {rovers[activeTab].specs.map((spec, index) => (
                                    <div key={index} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-colors group">
                                        <div className="text-zenith-sub mb-3 group-hover:scale-110 transition-transform duration-300">
                                            {spec.icon}
                                        </div>
                                        <div className="text-xl font-bold text-white mb-1 break-words">{spec.value}</div>
                                        <div className="text-sm text-gray-400">{spec.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Rover;
