import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';

import { getTeamMembers } from '../data/team';

const Team = () => {
    const { t } = useLanguage();

    // Placeholder data
    const leads = getTeamMembers();

    // Duplicate list for infinite scroll effect (triple it to be safe for wide screens)
    const carouselItems = [...leads, ...leads, ...leads];

    const [ref] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

    // Calculate the width of one set of items
    // We assume all items are same width (w-64 = 16rem = 256px) + gap (gap-8 = 2rem = 32px)
    // Total item width = 288px
    const CARD_WIDTH = 288;
    const TOTAL_WIDTH = leads.length * CARD_WIDTH;

    useEffect(() => {
        let controls: any;

        const startLoop = (from: number) => {
            // Ensure we are moving towards -TOTAL_WIDTH
            // If from is already past -TOTAL_WIDTH (e.g. due to manual scroll overshoot), 
            // we should wrap it first, but the recursive call handles the 0 reset.
            // Here we just want to go from 'from' to '-TOTAL_WIDTH'.

            // Calculate distance remaining to the end of the loop
            const distance = Math.abs(-TOTAL_WIDTH - from);
            // Maintain constant speed (pixels per second)
            const speed = 50; // Adjust this value to change speed (higher = faster)
            const duration = distance / speed;

            controls = animate(xTranslation, [from, -TOTAL_WIDTH], {
                ease: "linear",
                duration: duration,
                onComplete: () => {
                    // Loop finished, reset to 0 and start again
                    startLoop(0);
                }
            });
        };

        if (!isHovered && !isManuallyScrolling) {
            const current = xTranslation.get();
            // Normalize current position to be within the loop range [0, -TOTAL_WIDTH]
            // This prevents the "reverse" spin issue
            let wrapped = current % TOTAL_WIDTH;
            if (wrapped > 0) wrapped -= TOTAL_WIDTH; // Should generally be negative

            startLoop(wrapped);
        } else {
            controls?.stop();
        }

        return () => controls?.stop();
    }, [isHovered, isManuallyScrolling, TOTAL_WIDTH, xTranslation]);

    const handleManualScroll = (direction: 'left' | 'right') => {
        setIsManuallyScrolling(true);

        const current = xTranslation.get();
        let target = current + (direction === 'left' ? CARD_WIDTH : -CARD_WIDTH);

        // We don't strictly need boundary checks for the animation target itself 
        // because the useEffect will wrap it correctly when it resumes.
        // However, to prevent scrolling into empty space if user clicks fast:

        // If we are too far right (positive), snap to equivalent negative position
        if (target > 0) {
            const snap = -TOTAL_WIDTH + CARD_WIDTH;
            xTranslation.set(-TOTAL_WIDTH);
            target = snap;
        }
        // If we are too far left (beyond 2 sets), snap back
        else if (target < -TOTAL_WIDTH * 2) {
            const snap = -TOTAL_WIDTH - CARD_WIDTH;
            xTranslation.set(-TOTAL_WIDTH);
            target = snap;
        }

        animate(xTranslation, target, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            onComplete: () => {
                setIsManuallyScrolling(false);
            }
        });
    };

    // Sparkle Halo Component (Inline for simplicity)
    const SparkleHalo = () => {
        return (
            <div className="absolute -inset-2 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* 1. The Subtle Halo (Outer Glow) - Gold */}
                <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-all duration-500"
                    style={{ backgroundColor: '#FFBB00' }}
                />

                {/* 2. Twinkling Particles */}
                {[...Array(10)].map((_, i) => {
                    const side = Math.floor(Math.random() * 4);
                    let top = '0%', left = '0%';

                    switch (side) {
                        case 0: top = Math.random() * 10 - 5 + '%'; left = Math.random() * 100 + '%'; break;
                        case 1: top = Math.random() * 100 + '%'; left = Math.random() * 10 + 95 + '%'; break;
                        case 2: top = Math.random() * 10 + 95 + '%'; left = Math.random() * 100 + '%'; break;
                        case 3: top = Math.random() * 100 + '%'; left = Math.random() * 10 - 5 + '%'; break;
                    }

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-zenith-sub shadow-[0_0_5px_#FFBB00]"
                            style={{ top, left }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: [0, (Math.random() - 0.5) * 20],
                                y: [0, (Math.random() - 0.5) * 20],
                            }}
                            transition={{
                                duration: 1.5 + Math.random() * 2,
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

    return (
        <section id="team" className="py-20 bg-zenith-main border-b border-white/5 relative overflow-hidden">
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
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {carouselItems.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-all duration-300 w-64 flex-shrink-0 z-10 backdrop-blur-sm"
                        >
                            <SparkleHalo />

                            {/* Inner Tint */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-zenith-sub rounded-xl" />

                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20 group-hover:border-zenith-sub transition-colors duration-300 relative z-10">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-1 relative z-10">{member.name}</h4>
                            <p className="text-zenith-sub text-sm relative z-10">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
