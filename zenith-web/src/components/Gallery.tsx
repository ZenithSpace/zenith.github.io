import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import { galleryImages as images } from '../data/gallery';

const Gallery = () => {
    const { t } = useLanguage();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section id="gallery" className="py-20 bg-zenith-main relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('gallery.title')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('gallery.subtitle')}</h3>
                </motion.div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 h-[400px] md:h-[600px]">
                <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full object-cover"
                            alt={`Gallery image ${currentIndex + 1}`}
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-zenith-sub hover:text-black transition-colors z-10"
                        onClick={prevSlide}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-zenith-sub hover:text-black transition-colors z-10"
                        onClick={nextSlide}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-zenith-sub w-6' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
