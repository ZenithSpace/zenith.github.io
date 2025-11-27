                            </div >
                        </div >

    {/* Description & Specs */ }
    < div >
                            <h3 className="text-3xl font-bold text-white mb-4">{t(`rover.${activeTab}.name`)}</h3>
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                {t(`rover.${activeTab}.description`)}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {rovers[activeTab].specs.map((spec, index) => (
                                    <div key={index} className="glass-panel p-6 rounded-xl border border-white/10 hover:border-zenith-sub/50 transition-colors group">
                                        <div className="text-zenith-sub mb-3 group-hover:scale-110 transition-transform duration-300">
                                            {spec.icon}
                                        </div>
                                        <div className="text-xl font-bold text-white mb-1 break-words">{spec.value}</div>
                                        <div className="text-sm text-gray-400">{spec.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div >
                    </motion.div >
                </AnimatePresence >
            </div >
        </section >
    );
};

export default Rover;
