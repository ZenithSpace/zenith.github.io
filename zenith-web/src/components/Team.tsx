import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';

const Team = () => {
    const { t } = useLanguage();

    // Placeholder data
    const leads = Array(8).fill({
        name: t('team.comingSoon'),
        role: t('team.preparing'),
        image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=300&h=300'
    });

    // Duplicate list for infinite scroll effect (triple it to be safe for wide screens)
    const carouselItems = [...leads, ...leads, ...leads];

    const [ref] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    // Calculate the width of one set of items
    // We assume all items are same width (w-64 = 16rem = 256px) + gap (gap-8 = 2rem = 32px)
    // Total item width = 288px
    const CARD_WIDTH = 288;
    const TOTAL_WIDTH = leads.length * CARD_WIDTH;

    useEffect(() => {
        let controls;
        const finalPosition = -TOTAL_WIDTH;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: Math.abs(finalPosition - xTranslation.get()) / 50, // Speed
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: Math.abs(finalPosition - xTranslation.get()) / 50, // Speed
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return () => controls?.stop();
    }, [xTranslation, TOTAL_WIDTH, mustFinish, rerender]);

    const handleManualScroll = (direction: 'left' | 'right') => {
        const current = xTranslation.get();
        let target = current + (direction === 'left' ? CARD_WIDTH : -CARD_WIDTH);

        // Boundary checks for manual scrolling to keep it smooth
        // If we move too far left (positive), snap back to end
        if (target > 0) {
            xTranslation.set(-TOTAL_WIDTH);
            target = -TOTAL_WIDTH + CARD_WIDTH;
        }
        // If we move too far right (negative), snap back to start
        else if (target < -TOTAL_WIDTH * 2) {
            xTranslation.set(-TOTAL_WIDTH);
            target = -TOTAL_WIDTH - CARD_WIDTH;
        }

        // Animate to the new position quickly
        animate(xTranslation, target, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            onComplete: () => {
                setMustFinish(true); // Resume auto-scroll naturally
            }
        });
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
                            className="p-2 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10 z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => handleManualScroll('right')}
                            className="p-2 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10 z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zenith-main to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zenith-main to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 px-8"
                    ref={ref}
                    style={{ x: xTranslation, width: "max-content" }}
                    onHoverStart={() => {
                        setMustFinish(true);
                        xTranslation.stop(); // Pause on hover
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true); // Resume
                    }}
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
