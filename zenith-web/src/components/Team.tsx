import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
    const { t } = useLanguage();
    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);

    // Placeholder data - user will update assets later
    const leads = Array(8).fill({
        name: t('team.comingSoon'),
        role: t('team.preparing'),
        image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300'
    });

    // Duplicate list for infinite scroll effect
    const carouselItems = [...leads, ...leads];

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: "-50%",
                transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        } else {
            controls.stop();
        }
    }, [controls, isPaused]);

    const handleManualScroll = (direction: 'left' | 'right') => {
        setIsPaused(true);
        // Logic for manual scroll would go here, but for now we just pause
        // Implementing true manual + infinite auto-scroll hybrid is complex
        // For this iteration, we'll just pause on interaction and maybe nudge

        // Resume auto-scroll after delay
        setTimeout(() => setIsPaused(false), 3000);
    };

    return (
        <section id="team" className="py-20 bg-zenith-main relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('team.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('team.subtitle')}</h3>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:flex gap-2">
                        <button
                            onClick={() => handleManualScroll('left')}
                            className="p-2 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => handleManualScroll('right')}
                            className="p-2 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zenith-main to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zenith-main to-transparent z-10" />

                <motion.div
                    className="flex gap-8 px-8"
                    animate={controls}
                    style={{ width: "max-content" }}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                >
                    {carouselItems.map((member, index) => (
                        <div
                            key={index}
                            className="w-64 flex-shrink-0 group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                <p className="text-zenith-sub text-sm uppercase tracking-wider">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
