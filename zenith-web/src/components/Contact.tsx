
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
                    <h2 className="text-zenith-sub font-bold tracking-widest uppercase mb-2">Get in Touch</h2>
                    <h3 className="text-4xl font-bold font-['Outfit']">Contact Us</h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h4 className="text-2xl font-bold text-white mb-6">Let's Connect</h4>
                        <p className="text-gray-400 mb-8">
                            Have questions about our rover, sponsorship opportunities, or just want to say hi?
                            Reach out to us!
                        </p>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-zenith-sub">
                                <Mail />
                            </div>
                            <div>
                                <h5 className="text-white font-bold mb-1">Email</h5>
                                <p className="text-gray-400">zenith1014@zenith.or.kr</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-zenith-sub">
                                <MapPin />
                            </div>
                            <div>
                                <h5 className="text-white font-bold mb-1">Location</h5>
                                <p className="text-gray-400">
                                    Seoul National University of Science and Technology<br />
                                    232 Gongneung-ro, Nowon-gu, Seoul
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub transition-colors" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zenith-sub transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-zenith-sub hover:bg-zenith-sub text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
