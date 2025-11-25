
import { motion } from 'framer-motion';
import { Cpu, Activity, Radio } from 'lucide-react';

const Rover = () => {
    const features = [
        {
            icon: Cpu,
            title: 'Autonomous Navigation',
            description: 'Advanced SLAM algorithms and path planning for traversing rough Martian terrain.',
        },
        {
            icon: Activity,
            title: 'Scientific Analysis',
            description: 'Onboard laboratory for soil analysis and life detection experiments.',
        },
        {
            icon: Radio,
            title: 'Long-range Comms',
            description: 'High-gain antenna systems ensuring constant link with the base station.',
        },
    ];

    return (
        <section id="rover" className="py-20 bg-zenith-main relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Rover Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass-panel border-0">
                            {/* Placeholder for Rover Image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <span className="text-gray-600 text-xl font-mono">[Rover 3D Model / Photo]</span>
                            </div>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 border border-zenith-sub/20 rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-white/10 rounded-full" />
                    </motion.div>

                    {/* Features */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">Project Zenith</h2>
                            <h3 className="text-4xl font-bold font-['Outfit'] mb-6">Next-Gen Mars Rover</h3>
                            <p className="text-gray-300 text-lg">
                                Designed to withstand the harsh conditions of the Red Planet, our rover combines rugged mechanical engineering with state-of-the-art software intelligence.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg bg-zenith-sub/10 flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-zenith-sub" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rover;
