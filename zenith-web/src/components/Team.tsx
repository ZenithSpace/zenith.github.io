import { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';
import { getTeamMembers } from '../data/team';

const Team = () => {
    const { t, language } = useLanguage();

    // Get team members
    const allMembers = getTeamMembers().filter(member => !member.hidden);

    // Grouping Logic
    const groups = {
        leadership: allMembers.filter(m => m.team.includes('Lead') || ['CEO', 'CTO', 'CFO'].includes(m.role)),
        hardware: allMembers.filter(m => m.team === 'Hardware Team' && !m.team.includes('Lead')),
        firmware: allMembers.filter(m => m.team === 'Firmware Team' && !m.team.includes('Lead')),
        software: allMembers.filter(m => m.team === 'Software Team' && !m.team.includes('Lead')),
        science: allMembers.filter(m => m.team === 'Science Team'),
        join: allMembers.filter(m => m.team === 'Join Zenith Space!')
    };

    // Duplicate list for infinite scroll effect (mobile only)
    const carouselItems = [...allMembers, ...allMembers, ...allMembers];

    const [ref] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

    // Calculate the width of one set of items
    const CARD_WIDTH = 288;
    const TOTAL_WIDTH = allMembers.length * CARD_WIDTH;

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

    // Sparkle Halo Component (Optimized)
    const SparkleHalo = () => {
        return (
            <div className="absolute -inset-2 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* 1. The Subtle Halo (Outer Glow) - Gold */}
                <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-all duration-500"
                    style={{ backgroundColor: '#FFBB00' }}
                />

                {/* 2. Twinkling Particles - Balanced count */}
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-zenith-sub shadow-[0_0_5px_#FFBB00]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        );
    };

    const MemberCard = ({ member }: { member: any }) => (
        <div className="group relative flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-all duration-300 w-64 flex-shrink-0 z-10 backdrop-blur-sm mx-auto">
            <SparkleHalo />

            {/* Inner Tint */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-zenith-sub rounded-xl" />

            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20 group-hover:border-zenith-sub transition-colors duration-300 relative z-10">
                <img
                    src={member.image}
                    alt={member.nameEn}
                    className="w-full h-full object-cover"
                    style={{
                        objectPosition: member.imagePosition || 'top',
                        transform: `scale(${member.imageScale || 1})`
                    }}
                    loading="lazy"
                />
            </div>
            <h4 className="text-xl font-bold text-white mb-1 relative z-10 text-center">
                {language === 'ko' ? member.nameKo : member.nameEn}
            </h4>
            <p className="text-zenith-sub font-medium text-sm relative z-10 mb-0.5 text-center">{member.team}</p>
            <p className="text-gray-400 text-xs relative z-10 text-center">{member.role}</p>
        </div>
    );

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
                </motion.div>
            </div>

            {/* Desktop Grid View (Hidden on Mobile) */}
            <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* Leadership */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white border-l-4 border-zenith-sub pl-4">Leadership</h4>
                    <div className="grid grid-cols-4 gap-8 justify-items-center">
                        {groups.leadership.map((member, index) => (
                            <MemberCard key={`lead-${index}`} member={member} />
                        ))}
                    </div>
                </div>

                {/* Hardware */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white border-l-4 border-zenith-sub pl-4">Hardware Team</h4>
                    <div className="grid grid-cols-4 gap-8 justify-items-center">
                        {groups.hardware.map((member, index) => (
                            <MemberCard key={`hw-${index}`} member={member} />
                        ))}
                    </div>
                </div>

                {/* Firmware */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white border-l-4 border-zenith-sub pl-4">Firmware Team</h4>
                    <div className="grid grid-cols-4 gap-8 justify-items-center">
                        {groups.firmware.map((member, index) => (
                            <MemberCard key={`fw-${index}`} member={member} />
                        ))}
                    </div>
                </div>

                {/* Software */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white border-l-4 border-zenith-sub pl-4">Software Team</h4>
                    <div className="grid grid-cols-4 gap-8 justify-items-center">
                        {groups.software.map((member, index) => (
                            <MemberCard key={`sw-${index}`} member={member} />
                        ))}
                    </div>
                </div>

                {/* Science */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white border-l-4 border-zenith-sub pl-4">Science Team</h4>
                    <div className="flex justify-center gap-8">
                        {groups.science.map((member, index) => (
                            <MemberCard key={`sci-${index}`} member={member} />
                        ))}
                    </div>
                </div>

                {/* Join Us */}
                <div className="flex justify-center pt-8">
                    {groups.join.map((member, index) => (
                        <MemberCard key={`join-${index}`} member={member} />
                    ))}
                </div>
            </div>

            {/* Mobile Carousel View (Hidden on Desktop) */}
            <div className="lg:hidden relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zenith-main to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zenith-main to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 px-8 py-20"
                    ref={ref}
                    style={{ x: xTranslation, width: "max-content" }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {carouselItems.map((member, index) => (
                        <MemberCard key={`carousel-${index}`} member={member} />
                    ))}
                </motion.div>

                {/* Navigation Buttons (Bottom) */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => handleManualScroll('left')}
                        className="p-3 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10 z-20"
                        aria-label="Previous team members"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => handleManualScroll('right')}
                        className="p-3 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10 z-20"
                        aria-label="Next team members"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
