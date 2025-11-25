
import { Mail, Instagram, Github, Download } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="sponsorship" className="bg-[#050608] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-6 font-['Outfit']">ZENITH SPACE</h2>
                        <p className="text-gray-400 max-w-md mb-8">
                            Pushing the boundaries of aerospace and robotics research.
                            Join us in our mission to explore the unknown.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zenith-sub hover:text-white transition-colors text-gray-400">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zenith-sub hover:text-white transition-colors text-gray-400">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zenith-sub hover:text-white transition-colors text-gray-400">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-zenith-sub transition-colors">About Us</a></li>
                            <li><a href="#journey" className="text-gray-400 hover:text-zenith-sub transition-colors">Our Journey</a></li>
                            <li><a href="#rover" className="text-gray-400 hover:text-zenith-sub transition-colors">The Rover</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-zenith-sub transition-colors">Team</a></li>
                        </ul>
                    </div>

                    {/* Sponsorship */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Sponsorship</h3>
                        <p className="text-gray-400 mb-6">
                            Interested in supporting our mission? Download our sponsorship handbook.
                        </p>
                        <a href="/handbook.pdf" download className="w-full px-6 py-3 bg-zenith-sub hover:bg-zenith-sub text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                            <Download size={18} />
                            Download PDF
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zenith Space. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
