import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
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
            color: 'text-[#E5E4E2]',
            hex: '#E5E4E2',
            border: 'group-hover:border-[#E5E4E2]'
        }
    ];

    const diamondTier = {
        key: 'diamond',
        color: 'text-[#B9F2FF]',
        hex: '#B9F2FF',
                    < h4 className = {`text-2xl font-bold mb-2 ${tierConfig.color}`
}>
    { t(`sponsorship.tiers.${tierConfig.key }.name`)}
                    </h4>
                    <div className="text-xl font-bold text-gray-400 mb-6">
                        {t(`sponsorship.tiers.${ tierConfig.key }.price`)}
                    </div>
                    <ul className={`space - y - 4 ${ isDiamond ? 'grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0' : '' } `}>
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <Check className={`w - 5 h - 5 flex - shrink - 0 ${ tierConfig.color } `} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
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
