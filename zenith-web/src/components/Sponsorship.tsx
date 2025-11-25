
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Sponsorship = () => {
    const tiers = [
        {
            name: 'Bronze',
            price: '₩1,000,000+',
            features: ['Logo on Website', 'Social Media Shoutout', 'Thank You Letter'],
            color: 'border-orange-700/50',
            bg: 'bg-orange-900/10'
        },
        {
            name: 'Silver',
            price: '₩3,000,000+',
            features: ['Logo on Rover (Small)', 'Logo on Team Shirt', 'All Bronze Benefits'],
            color: 'border-gray-400/50',
            bg: 'bg-gray-400/10'
        },
        {
            name: 'Gold',
            price: '₩5,000,000+',
            features: ['Logo on Rover (Large)', 'Access to Recruitment DB', 'Tech Talk Session', 'All Silver Benefits'],
            color: 'border-yellow-500/50',
            bg: 'bg-yellow-500/10',
            featured: true
        },
        {
            name: 'Platinum',
            price: '₩10,000,000+',
            features: ['Naming Rights for Rover Component', 'Exclusive Partnership Event', 'VIP Booth at Exhibitions', 'All Gold Benefits'],
            color: 'border-cyan-400/50',
            bg: 'bg-cyan-400/10'
        }
    ];

    return (
        <section id="sponsorship" className="py-20 bg-zenith-main relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">Partner With Us</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">Sponsorship Tiers</h3>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Join us in our journey to Mars. Your support empowers the next generation of engineers and scientists.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${tier.color} ${tier.bg} backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300`}
                        >
                            {tier.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zenith-sub text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                    <Star size={14} fill="currentColor" /> Most Popular
                                </div>
                            )}
                            <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                            <div className="text-zenith-sub text-xl font-bold mb-6">{tier.price}</div>
                            <ul className="space-y-4">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <Check size={16} className="text-zenith-sub mt-1 flex-shrink-0" />
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
