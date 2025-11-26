import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sponsorship = () => {
    const { t } = useLanguage();

    const mainTiers = [
        {
            key: 'affiliate',
            color: 'text-gray-400',
            hex: '#9CA3AF',
            border: 'group-hover:border-gray-400'
        },
        {
            key: 'silver',
            color: 'text-[#C0C0C0]',
            hex: '#C0C0C0',
            border: 'group-hover:border-[#C0C0C0]'
        },
        {
            key: 'gold',
            color: 'text-[#FFD700]',
            hex: '#FFD700',
            border: 'group-hover:border-[#FFD700]'
        },
        {
            key: 'platinum',
            color: 'text-[#22D3EE]', // Cyan
            hex: '#22D3EE',
            border: 'group-hover:border-[#22D3EE]'
        }
    ];

    const diamondTier = {
        key: 'diamond',
        // Aurora Gradient for Diamond
        color: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400',
        hex: '#A78BFA', // Purple-ish tint for the glow
        border: 'border-blue-500/30 group-hover:border-cyan-400'
    };

    const SparkleHalo = ({ color }: { color: string }) => {
        return (
            <div className="absolute -inset-2 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* 1. The Subtle Halo (Outer Glow) */}
                <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-all duration-500"
                    style={{ backgroundColor: color }}
                />

                {/* 2. Twinkling Particles (Randomized Positions & Drift) */}
                {[...Array(20)].map((_, i) => {
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
                            className="absolute w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]"
                            style={{ top, left }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: [0, (Math.random() - 0.5) * 30],
                                y: [0, (Math.random() - 0.5) * 30],
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

    const renderTierCard = (tierConfig: any, isDiamond = false) => {
        const features = t(`sponsorship.tiers.${tierConfig.key}.features`) as unknown as string[];

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true }}
                className={`relative group z-0 ${isDiamond ? 'w-full max-w-4xl mx-auto mt-12' : 'h-full'}`}
            >
                {/* Sparkle Halo Effect - Behind the card */}
                <SparkleHalo color={tierConfig.hex} />

                {/* Card Content */}
                <div className={`glass-panel p-8 rounded-2xl border transition-all duration-300 h-full relative z-10 overflow-hidden 
                    ${isDiamond ? 'bg-gradient-to-br from-slate-900/50 via-[#0A0B10]/80 to-[#0A0B10]/80' : 'bg-[#0A0B10]/40'} 
                    group-hover:bg-[#0A0B10] 
                    ${tierConfig.border} backdrop-blur-xl`}
                >
                    {/* Tinted Background on Hover - Inside the card */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: tierConfig.hex }}
                    />

                    <div className="relative z-10">
                        <h4 className={`text-2xl font-bold mb-2 ${tierConfig.color}`}>
                            {t(`sponsorship.tiers.${tierConfig.key}.name`)}
                        </h4>
                        <div className="text-xl font-bold text-gray-400 mb-6">
                            {t(`sponsorship.tiers.${tierConfig.key}.price`)}
                        </div>
                        <ul className={`space-y-4 ${isDiamond ? 'grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0' : ''}`}>
                            {features.map((feature, i) => {
                                // Highlight the last item of Diamond tier (Custom Benefit)
                                const isCustomBenefit = isDiamond && i === features.length - 1;

                                return (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        {isCustomBenefit ? (
                                            <Star className="w-5 h-5 flex-shrink-0 text-cyan-300 fill-cyan-300/20" />
                                        ) : (
                                            <Check className={`w-5 h-5 flex-shrink-0 ${tierConfig.key === 'diamond' ? 'text-cyan-400' : tierConfig.color}`} />
                                        )}
                                        <span className={isCustomBenefit ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200 font-semibold' : ''}>
                                            {feature}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="sponsorship" className="py-20 bg-[#0A0B10] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('sponsorship.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('sponsorship.subtitle')}</h3>
                </motion.div>

                {/* Main Tiers Grid (Affiliate, Silver, Gold, Platinum) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mainTiers.map((tier) => (
                        <div key={tier.key}>
                            {renderTierCard(tier)}
                        </div>
                    ))}
                </div>

                {/* Diamond Tier (Bottom Full Width) */}
                {renderTierCard(diamondTier, true)}
            </div>
        </section>
    );
};

export default Sponsorship;
