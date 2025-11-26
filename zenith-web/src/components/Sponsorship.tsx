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
        < section id = "sponsorship" className = "py-20 bg-[#0A0B10] overflow-hidden" >
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
        </section >
    );
};

export default Sponsorship;
