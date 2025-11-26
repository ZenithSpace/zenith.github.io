import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';

import { partnersData } from '../data/partners';

const Partners = () => {
    const { t } = useLanguage();

    // Partners data

    // Duplicate list for infinite scroll effect (repeat enough to fill screen)
    const partners = [...partnersData, ...partnersData, ...partnersData, ...partnersData];

    const [ref] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

    // Card width (w-64 approx or auto) + gap
    // Let's assume fixed width for smoother calculation or measure it
    // Here we use a fixed width container for each logo: w-64 (16rem = 256px) + gap-8 (32px) = 288px
    const CARD_WIDTH = 288;
    const TOTAL_WIDTH = partnersData.length * CARD_WIDTH;

    useEffect(() => {
        let controls: any;

        const startLoop = (from: number) => {
            const distance = Math.abs(-TOTAL_WIDTH - from);
            const speed = 50; // Adjust speed
            const duration = distance / speed;

            controls = animate(xTranslation, [from, -TOTAL_WIDTH], {
                ease: "linear",
                duration: duration,
                onComplete: () => {
                    startLoop(0);
                }
            });
        };

        if (!isHovered && !isManuallyScrolling) {
            const current = xTranslation.get();
            let wrapped = current % TOTAL_WIDTH;
            if (wrapped > 0) wrapped -= TOTAL_WIDTH;

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

        if (target > 0) {
            const snap = -TOTAL_WIDTH + CARD_WIDTH;
            xTranslation.set(-TOTAL_WIDTH);
            target = snap;
        } else if (target < -TOTAL_WIDTH * 2) {
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

    // Sparkle Halo Component (White/Silver Version)
    const SparkleHalo = () => {
        return (
            <div className="absolute -inset-2 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* 1. The Subtle Halo (Outer Glow) - White (Visible against dark section bg) */}
                <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-50 transition-all duration-500"
                    style={{ backgroundColor: '#FFFFFF' }}
                />

                {/* 2. Twinkling Particles - Silver (Visible on white card) */}
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
                            className="absolute w-1 h-1 rounded-full bg-slate-400 shadow-[0_0_2px_#94a3b8]"
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
        <section id="partners" className="py-20 bg-zenith-main border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('partners.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('partners.subtitle')}</h3>

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
                    {partners.map((partner, index) => (
                        <motion.a
                            key={index}
                            href={partner.link}
                            target={partner.link.startsWith('http') ? "_blank" : "_self"}
                            rel={partner.link.startsWith('http') ? "noopener noreferrer" : ""}
                            className="group relative flex items-center justify-center p-6 bg-white rounded-xl border border-white/10 w-64 flex-shrink-0 z-10 h-32"
                        >
                            <SparkleHalo />
                            {/* Inner Tint removed */}

                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-full max-w-full w-auto h-auto object-contain relative z-10"
                                />
                            ) : (
                                <span className="text-black font-bold text-lg text-center relative z-10">
                                    {t('partners.placeholder')}
                                </span>
                            )}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
