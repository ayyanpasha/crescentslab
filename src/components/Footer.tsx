import { motion } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css';

const socialLinks = [
    { name: 'Twitter', icon: <i className="fab fa-twitter"></i>, href: 'https://twitter.com/crescentslabs' },
    { name: 'LinkedIn', icon: <i className="fab fa-linkedin"></i>, href: 'https://linkedin.com/company/crescentslabs' },
    { name: 'Instagram', icon: <i className="fab fa-instagram"></i>, href: 'https://instagram.com/crescentslabs' }
];

export const Footer = () => (
    <footer className="bg-white relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white to-gray-50"/>
        
        <div className="container mx-auto px-4 py-12 relative w-full">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-200 pb-8 mb-8"
                >
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Crescent's Lab</h3>
                        <p className="text-gray-600 max-w-md">
                            Transforming businesses with next-generation AI solutions
                        </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-start md:justify-end items-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                <span className="text-2xl">{social.icon}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
                >
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} Crescent's Lab. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="/terms" className="hover:text-gray-900 transition-colors duration-300">
                            Terms & Conditions
                        </a>
                        <a href="/privacy" className="hover:text-gray-900 transition-colors duration-300">
                            Privacy Policy
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </footer>
);
