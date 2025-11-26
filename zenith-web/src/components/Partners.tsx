import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';

const Partners = () => {
    const { t } = useLanguage();

    // Partners data
    const partnersData = [
        { name: 'SeoulTech', logo: '/assets/partners/1.png', link: 'https://www.seoultech.ac.kr/' },
        { name: 'Misumi', logo: '/assets/partners/2.png', link: 'https://kr.misumi-ec.com/' },
        { name: 'Meviy', logo: '/assets/partners/3.png', link: 'https://meviy.misumi-ec.com/ko-kr/' },
        { name: 'Next Partner', logo: null, link: '#contact' }, // Placeholder
    ];

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
            </div >
        </section >
    );
};

export default Partners;
