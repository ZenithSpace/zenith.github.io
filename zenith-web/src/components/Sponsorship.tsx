import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sponsorship = () => {
    const { t } = useLanguage();

    const tiers = [
        {
            name: t('sponsorship.tiers.bronze'),
            price: '₩1,000,000+',
            features: ['Logo on Website', 'Social Media Shoutout', 'Thank You Letter']
        },
        {
            name: t('sponsorship.tiers.silver'),
            price: '₩3,000,000+',
            features: ['Everything in Bronze', 'Small Logo on Rover', 'Team T-shirt']
        },
        {
            name: t('sponsorship.tiers.gold'),
            price: '₩5,000,000+',
            features: ['Everything in Silver', 'Large Logo on Rover', 'Logo on Team Uniform', 'Invitation to Demo Day']
        },
        {
            name: t('sponsorship.tiers.platinum'),
            price: '₩10,000,000+',
            features: ['Everything in Gold', 'Main Sponsor Branding', 'Exclusive Workshop', 'Recruiting Booth Access']
        }
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-panel p-8 rounded-2xl border transition-all duration-300 ${index === 3 ? 'border-zenith-sub shadow-[0_0_30px_rgba(255,187,0,0.2)]' : 'border-white/10 hover:border-white/30'
                                }`}
                        >
                            <h4 className={`text-2xl font-bold mb-2 ${index === 3 ? 'text-zenith-sub' : 'text-white'}`}>{tier.name}</h4>
                            <div className="text-xl font-bold text-gray-400 mb-6">{tier.price}</div>
                            <ul className="space-y-4">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-zenith-sub flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;
