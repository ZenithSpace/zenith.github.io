import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';

const Partners = () => {
    const { t } = useLanguage();

    // Placeholder partners
    const partnersData = [
        { name: 'Partner 1', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+1', link: '#' },
        { name: 'Partner 2', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+2', link: '#' },
        { name: 'Partner 3', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+3', link: '#' },
        { name: 'Partner 4', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Partner+4', link: '#' },
    ];

    // Duplicate list for infinite scroll effect (repeat enough to fill screen)
    const partners = [...partnersData, ...partnersData, ...partnersData, ...partnersData];

    const [ref] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

    // Card width (w-64 approx or auto) + gap
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-all duration-300 hover:bg-white/10 w-64 flex-shrink-0"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                        />
                    </motion.a>
                ))}
            </motion.div>
        </div>
    </section>
);
};

export default Partners;
