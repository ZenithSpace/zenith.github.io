
import { motion } from 'framer-motion';

const Journey = () => {
    const milestones = [
        {
            year: '2025',
            title: 'Defense Robot Competition',
            description: 'Awarded the Excellence Prize for our autonomous surveillance robot prototype.',
            status: 'completed',
        },
        {
            year: '2026',
            title: 'University Rover Challenge',
            description: 'Preparing to compete in the world\'s premier robotics competition in Utah, USA.',
            status: 'upcoming',
        },
    ];

    return (
        <section id="journey" className="py-20 bg-zenith-main relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">Our Journey</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">Milestones & Goals</h3>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10 hidden md:block" />

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-5/12" />

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-zenith-sub border-4 border-zenith-main z-10 hidden md:block" />

                                <div className="w-full md:w-5/12">
                                    <div className="glass-panel p-8 rounded-2xl relative hover:border-zenith-sub/50 transition-colors">
                                        <div className="text-5xl font-bold text-white/5 absolute top-4 right-4 font-['Outfit']">
                                            {milestone.year}
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                                        <p className="text-gray-400">{milestone.description}</p>
                                        {milestone.status === 'upcoming' && (
                                            <span className="inline-block mt-4 px-3 py-1 bg-zenith-sub/20 text-zenith-sub text-xs font-bold rounded-full uppercase tracking-wider">
                                                Upcoming
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
