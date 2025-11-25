import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsLoading(true);
        setStatus('idle');

        try {
            await emailjs.sendForm(
                'service_1w3btma',
                'template_dnka9w8',
                formRef.current,
                'wDHf9Bol6b5mPGz42'
            );
            setStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-zenith-main relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-zenith-sub/10 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">{t('contact.subtitle')}</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">{t('contact.title')}</h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h4 className="text-2xl font-bold text-white mb-6">{t('contact.connect')}</h4>
                        <p className="text-gray-400 mb-8">
                            {t('contact.desc')}
                        </p>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-zenith-sub">
                                <Mail />
                            </div>
                            <div>
                                <h5 className="text-white font-bold mb-1">{t('contact.info.email')}</h5>
                                <p className="text-gray-400">zenith1014@zenith.or.kr</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-zenith-sub">
                                <MapPin />
                            </div>
                            <div>
                                <h5 className="text-white font-bold mb-1">{t('contact.info.location')}</h5>
                                <p className="text-gray-400 whitespace-pre-line">
                                    {t('contact.info.address')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-2xl"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.name')}</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub transition-colors"
                                        placeholder={t('contact.form.name')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t('contact.form.message')}</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub transition-colors"
                                    placeholder={t('contact.form.message')}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-zenith-sub hover:bg-zenith-sub text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        {t('contact.form.sending')}
                                    </>
                                ) : (
                                    <>
                                        {t('contact.form.send')}
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                            {status === 'success' && (
                                <p className="text-green-400 text-center text-sm">{t('contact.form.success')}</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-center text-sm">{t('contact.form.error')}</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
