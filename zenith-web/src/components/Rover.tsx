import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useTransform } from 'framer-motion';
import { Weight, Gauge, Dumbbell, BatteryCharging, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import roverV1 from '../assets/Zero_v1.webp';
import roverV2_1 from '../assets/Zero_v2_1.png';
import roverV2_2 from '../assets/Zero_v2_2.png';

const SparkleHalo = ({ color }: { color: string }) => {
    return (
        <div className="absolute -inset-10 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-500"
                style={{ backgroundColor: color }}
            />
            {[...Array(15)].map((_, i) => {
                const angle = Math.random() * 360;
                const radius = Math.random() * 50 + 50;
                const top = `calc(50% + ${Math.sin(angle) * radius}%)`;
                const left = `calc(50% + ${Math.cos(angle) * radius}%)`;

                return (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]"
                        style={{ top, left }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            x: [0, (Math.random() - 0.5) * 20],
                            y: [0, (Math.random() - 0.5) * 20],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                );
            })}
        </div>
    );
};

const TypingText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <motion.div className={className} key={text}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.05, delay: index * 0.05 }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

const RollingNumber = ({ value }: { value: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref);

    // Extract number and suffix (e.g., "55kg" -> 55, "kg")
    const match = value.match(/([\d.]+)(.*)/);
    const numberValue = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : value;

    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            spring.set(numberValue);
        } else {
            spring.set(0); // Reset when out of view if desired, or keep it
        }
    }, [inView, numberValue, spring]);

    // Reset spring when value changes to trigger animation again
    useEffect(() => {
        spring.set(0);
        setTimeout(() => spring.set(numberValue), 100);
    }, [value, numberValue, spring]);

    return (
        <span className="flex items-baseline">
            {match ? (
                <>
                    <motion.span ref={ref}>{display}</motion.span>
                    <span>{suffix}</span>
                </>
            ) : (
                <span>{value}</span>
            )}
        </span>
    );
};

const Rover = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'v1' | 'v2'>('v2');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when tab changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeTab]);

    const rovers = {
        v1: {
            images: [roverV1],
            specs: [
                { icon: <Weight />, label: t('rover.v1.specs.weight'), value: t('rover.v1.values.weight') },
                { icon: <Gauge />, label: t('rover.v1.specs.speed'), value: t('rover.v1.values.speed') },
                { icon: <Dumbbell />, label: t('rover.v1.specs.arm'), value: t('rover.v1.values.arm') },
                { icon: <BatteryCharging />, label: t('rover.v1.specs.battery'), value: t('rover.v1.values.battery') },
            ]
        },
        v2: {
            images: [roverV2_1, roverV2_2],
            specs: [
                { icon: <Weight />, label: t('rover.v2.specs.weight'), value: t('rover.v2.values.weight') },
                { icon: <Gauge />, label: t('rover.v2.specs.speed'), value: t('rover.v2.values.speed') },
                { icon: <Dumbbell />, label: t('rover.v2.specs.arm'), value: t('rover.v2.values.arm') },
                { icon: <BatteryCharging />, label: t('rover.v2.specs.battery'), value: t('rover.v2.values.battery') },
            ]
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % rovers[activeTab].images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + rovers[activeTab].images.length) % rovers[activeTab].images.length);
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

                {/* Stable Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
                    {/* Rover Image Column */}
                    <div className="relative group max-w-md mx-auto w-full h-full flex items-center justify-center">
                        <SparkleHalo color="#FFB800" />
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square w-full bg-zinc-900">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={`${activeTab}-${currentImageIndex}`}
                                    src={rovers[activeTab].images[currentImageIndex]}
                                    alt={t(`rover.${activeTab}.name`)}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </AnimatePresence>

                            {/* Navigation Buttons (Only if more than 1 image) */}
                            {rovers[activeTab].images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-zenith-sub hover:text-black transition-colors z-10"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-zenith-sub hover:text-black transition-colors z-10"
                                    >
                                        <ChevronRight size={24} />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                        {rovers[activeTab].images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-zenith-sub w-4' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Description & Specs Column */}
                    <div>
                        <TypingText
                            text={t(`rover.${activeTab}.name`)}
                            className="text-3xl font-bold text-white mb-4 h-10" // Fixed height to prevent jump
                        />

                        <motion.div
                            key={activeTab + "-desc"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed min-h-[80px]">
                                {t(`rover.${activeTab}.description`)}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {rovers[activeTab].specs.map((spec, index) => (
                                <div key={index} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-colors group">
                                    <div className="text-zenith-sub mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {spec.icon}
                                    </div>
                                    <div className="text-xl font-bold text-white mb-1 break-words">
                                        <RollingNumber value={spec.value} />
                                    </div>
                                    <div className="text-sm text-gray-400">{spec.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rover;
