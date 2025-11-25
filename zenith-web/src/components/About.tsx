
import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Target, label: 'Mission', value: 'Mars Exploration' },
        { icon: Users, label: 'Team Members', value: '30+' },
        { icon: Award, label: 'Awards', value: 'Excellence' },
    ];

    return (
        <section id="about" className="py-20 bg-zenith-main relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-zenith-sub rounded-full blur-[128px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">About Us</h2>
                        <h3 className="text-4xl font-bold font-['Outfit'] mb-6">Pioneering the Future of <br /> Space Robotics</h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Zenith Space is a student-led non-profit research organization at Seoul National University of Science and Technology (SeoulTech).
                            We are a collective of passionate engineers, designers, and scientists dedicated to pushing the boundaries of autonomous planetary exploration.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Our current mission focuses on developing a next-generation Mars rover capable of autonomous navigation, scientific analysis, and precise manipulation tasks for the University Rover Challenge (URC).
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition-colors"
                            >
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="w-10 h-10 text-zenith-sub" />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
