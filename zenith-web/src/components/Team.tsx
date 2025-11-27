import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getTeamMembers } from '../data/team';

const Team = () => {
    const { t } = useLanguage();

    // Placeholder data
    const leads = getTeamMembers();

    // Placeholder data
    const leads = getTeamMembers();

    // Duplicate list for infinite scroll effect (Double it for 50% scroll)
    const carouselItems = [...leads, ...leads];

    // Sparkle Halo Component (Optimized)
    const SparkleHalo = () => {
        return (
            <div className="absolute -inset-2 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* 1. The Subtle Halo (Outer Glow) - Gold */}
                <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-30 transition-all duration-500"
                    style={{ backgroundColor: '#FFBB00' }}
                />

                {/* 2. Twinkling Particles - Reduced count for performance */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-zenith-sub shadow-[0_0_5px_#FFBB00]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <section id="team" className="py-20 bg-zenith-main border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('team.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('team.subtitle')}</h3>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zenith-main to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zenith-main to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    {/* First set of items */}
                    <div className="flex gap-8 px-4">
                        {carouselItems.map((member, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-all duration-300 w-64 flex-shrink-0 z-10 backdrop-blur-sm"
                            >
                                <SparkleHalo />

                                {/* Inner Tint */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-zenith-sub rounded-xl" />

                                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20 group-hover:border-zenith-sub transition-colors duration-300 relative z-10">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1 relative z-10">{member.name}</h4>
                                <p className="text-zenith-sub font-medium text-sm relative z-10 mb-0.5">{member.team}</p>
                                <p className="text-gray-400 text-xs relative z-10">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop (CSS infinite scroll needs 2 sets usually, but we have 3 in carouselItems already? 
                        Wait, CSS infinite scroll works by translating -50%. So we need exactly 2 identical sets side-by-side.
                        carouselItems is already tripled. 
                        Actually, for translateX(-50%) to work seamlessly, the container needs to contain TWO identical halves.
                        So I should render `carouselItems` TWICE? Or just ensure `carouselItems` itself is even?
                        
                        Let's simplify:
                        We need the content to be duplicated.
                        If I render `leads` (original list) multiple times.
                        
                        Let's change the strategy slightly:
                        Render `leads` twice.
                        Animation moves from 0 to -50%.
                        
                        Let's adjust the variable `carouselItems` in the code block above?
                        No, I can just render `leads` twice in the JSX.
                    */}
                </div>
            </div>
        </section>
    );
};

export default Team;
