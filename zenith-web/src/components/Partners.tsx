import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useMeasure from 'react-use-measure';
import { partnersData, affiliatesData } from '../data/partners';

const Partners = () => {
    const { t } = useLanguage();

    // Duplicate list for infinite scroll effect (triple it to be safe)
    const partners = [...partnersData, ...partnersData, ...partnersData];

    const [ref] = useMeasure();
    const xTranslation = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

    // Easter Egg State
    const [clickCount, setClickCount] = useState(0);
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [showHearts, setShowHearts] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Card width (w-64 = 256px) + gap (gap-8 = 32px) = 288px
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

    const handleAffiliateClick = (nameEn: string) => {
        // Obfuscated check for target (btoa('Suah Son'))
        if (btoa(nameEn) === 'U3VhaCBTb24=') {
            const newCount = clickCount + 1;
            setClickCount(newCount);
            if (newCount >= 7) {
                setShowPasswordPrompt(true);
                setClickCount(0); // reset
            }
        } else {
            setClickCount(0); // reset if clicked someone else
        }
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Obfuscated check for "0826"
        if (btoa(passwordInput) === 'MDgyNg==') {
            setShowPasswordPrompt(false);
            setShowHearts(true);
            setPasswordInput('');
            setPasswordError(false);
            // Hide hearts after 5 seconds
            setTimeout(() => setShowHearts(false), 5000);
        } else {
            setPasswordError(true);
        }
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
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zenith-main to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zenith-main to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 px-8 py-10 items-center"
                    ref={ref}
                    style={{ x: xTranslation, width: "max-content" }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.link}
                            target={partner.link.startsWith('http') ? "_blank" : "_self"}
                            rel={partner.link.startsWith('http') ? "noopener noreferrer" : ""}
                            className="group relative flex items-center justify-center p-6 bg-white rounded-xl border border-white/10 w-64 h-32 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] z-10 overflow-hidden"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={`max-h-full max-w-full w-auto h-auto object-contain ${partner.className || ''}`}
                                    loading="lazy"
                                />
                            ) : (
                                <span className="text-black font-bold text-sm text-center whitespace-nowrap">
                                    {t('partners.placeholder')}
                                </span>
                            )}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons (Bottom) */}
            <div className="flex justify-center gap-4 mt-8 pb-16">
                <button
                    onClick={() => handleManualScroll('left')}
                    className="p-3 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10 z-20"
                    aria-label="Previous partners"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => handleManualScroll('right')}
                    className="p-3 rounded-full bg-white/5 hover:bg-zenith-sub hover:text-white transition-colors border border-white/10 z-20"
                    aria-label="Next partners"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Affiliates Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-t border-white/5 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center relative mb-12"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('partners.affiliates.subtitle')}</h2>
                    <h3 className="text-3xl font-bold font-['Outfit']">{t('partners.affiliates.title')}</h3>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {affiliatesData.map((affiliate, index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleAffiliateClick(affiliate.nameEn)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className={`w-48 py-4 px-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex flex-col items-center justify-center hover:border-zenith-sub/50 hover:bg-white/10 transition-all ${btoa(affiliate.nameEn) === 'U3VhaCBTb24=' ? 'cursor-pointer' : 'cursor-default'} group`}
                        >
                            <span className="text-gray-200 font-bold mb-1 group-hover:text-white transition-colors">{affiliate.nameKo}</span>
                            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase group-hover:text-gray-300 transition-colors text-center">{affiliate.nameEn}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Password Prompt Modal */}
            {showPasswordPrompt && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#0A0B10] border border-white/10 p-8 rounded-2xl max-w-sm w-full"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 text-center">비밀번호를 입력하세요</h3>
                        <form onSubmit={handlePasswordSubmit}>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => {
                                    setPasswordInput(e.target.value);
                                    setPasswordError(false);
                                }}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub mb-4 text-center text-lg tracking-widest"
                                placeholder={"****"}
                                maxLength={4}
                                autoFocus
                            />
                            {passwordError && <p className="text-red-400 text-sm mb-4 text-center">비밀번호가 틀렸습니다.</p>}
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowPasswordPrompt(false);
                                        setPasswordInput('');
                                        setPasswordError(false);
                                    }}
                                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
                                >
                                    취소
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 rounded-lg bg-zenith-sub text-white hover:bg-opacity-90 transition-colors font-bold"
                                >
                                    확인
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Heart Explosion Overlay */}
            {showHearts && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    {[...Array(60)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 1,
                                scale: 0,
                                x: '50vw',
                                y: '50vh'
                            }}
                            animate={{
                                opacity: [1, 1, 1, 0],
                                scale: [0, Math.random() * 2 + 1, Math.random() * 2 + 1.5, Math.random() * 2 + 1.5],
                                x: `calc(50vw + ${(Math.random() - 0.5) * 120}vw)`,
                                y: `calc(50vh + ${(Math.random() - 0.5) * 120}vh)`,
                                rotate: Math.random() * 360
                            }}
                            transition={{
                                duration: Math.random() * 2.5 + 2.5,
                                ease: "easeOut"
                            }}
                            className="absolute text-4xl"
                        >
                            {['❤️', '💖', '💞', '💕', '💘'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Partners;
