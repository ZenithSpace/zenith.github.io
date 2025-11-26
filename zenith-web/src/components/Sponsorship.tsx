import { motion } from 'framer-motion';
```javascript
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sponsorship = () => {
    const { t } = useLanguage();

    const mainTiers = [
        {
            key: 'affiliate',
            color: 'from-gray-400 to-gray-600',
            glow: 'group-hover:shadow-[0_0_30px_rgba(156,163,175,0.4)]',
            border: 'group-hover:border-gray-400'
        },
        {
            key: 'silver',
            color: 'text-[#C0C0C0]',
            glow: 'group-hover:shadow-[0_0_30px_rgba(192,192,192,0.4)]',
            border: 'group-hover:border-[#C0C0C0]'
        },
        {
            key: 'gold',
            color: 'text-[#FFD700]',
            glow: 'group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]',
            border: 'group-hover:border-[#FFD700]'
        },
        {
            key: 'platinum',
            color: 'text-[#E5E4E2]',
            glow: 'group-hover:shadow-[0_0_30px_rgba(229,228,226,0.4)]',
            border: 'group-hover:border-[#E5E4E2]'
        }
    ];

    const diamondTier = {
        key: 'diamond',
        color: 'text-[#B9F2FF]',
        glow: 'group-hover:shadow-[0_0_30px_rgba(185,242,255,0.4)]',
        border: 'group-hover:border-[#B9F2FF]'
    };

    const renderTierCard = (tierConfig: any, isDiamond = false) => {
        const features = t(`sponsorship.tiers.${ tierConfig.key }.features`) as unknown as string[];

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass - panel p - 8 rounded - 2xl border border - white / 10 transition - all duration - 500 group relative overflow - hidden ${
    isDiamond ? 'w-full max-w-4xl mx-auto mt-12' : 'h-full'
} ${ tierConfig.border } ${ tierConfig.glow } `}
            >
                {/* Particle/Glow Background Effect */}
                <div className={`absolute inset - 0 opacity - 0 group - hover: opacity - 10 transition - opacity duration - 500 bg - gradient - to - br ${ isDiamond ? 'from-cyan-200 to-white' : 'from-white to-white' } `} />

                <div className="relative z-10">
                    <h4 className={`text - 2xl font - bold mb - 2 ${ tierConfig.color || 'text-white' } `}>
                        {t(`sponsorship.tiers.${ tierConfig.key }.name`)}
                    </h4>
                    <div className="text-xl font-bold text-gray-400 mb-6">
                        {t(`sponsorship.tiers.${ tierConfig.key }.price`)}
                    </div>
                    <ul className={`space - y - 4 ${ isDiamond ? 'grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0' : '' } `}>
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <Check className={`w - 5 h - 5 flex - shrink - 0 ${ tierConfig.color || 'text-gray-400' } `} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="sponsorship" className="py-20 bg-[#0A0B10]">
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

                {/* Main Tiers Grid (Affiliate to Platinum) */}
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
```
