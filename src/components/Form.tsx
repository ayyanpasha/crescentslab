import { motion } from 'framer-motion';
import { useState } from 'react';

export const Form = () => {
    const glowVariants = {
        initial: { opacity: 0.5, scale: 0.8 },
        animate: { 
            opacity: [0.5, 0.8, 0.5],
            scale: [0.8, 1, 0.8],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const scrollIndicatorVariants = {
        initial: { opacity: 0, y: -20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1.2
            }
        }
    };

    const arrowVariants = {
        animate: {
            y: [0, 12, 0],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section id='footer' className="py-32 bg-space-black relative overflow-hidden rounded-b-[30px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.1)_0%,transparent_65%)]" />
            <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[120px]"
            />
            <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="absolute bottom-1/4 -right-32 w-64 h-64 bg-galaxy-purple/20 rounded-full blur-[120px]"
            />
            
            <div className="container mx-auto px-4 relative max-w-8xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-full mx-auto">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-galaxy-purple/20 rounded-tl-2xl rounded-bl-2xl" />
                        <div className="h-full flex items-center justify-center rounded-xl overflow-hidden">
                            <div className="relative w-full h-full">
                                <img
                                    src={require('../asset/images/workwithus.png')}
                                    alt="Work With Us Today"
                                    className="object-cover w-full h-full rounded-xl filter blur-md"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-4">
                                    <h3 className="text-white font-mono tracking-wider mb-2 uppercase">
                                        Work With Us Today
                                    </h3>
                                    <h4 className="text-7xl text-white mb-4">
                                        Ready to Upgrade?
                                    </h4>
                                    <p className="text-white">
                                        Dive into the future with Crescent's Labs. Get in touch and build out a smarter, more automated org.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-black p-8 rounded-tr-2xl rounded-br-2xl border border-[rgb(70,70,70)] 
                                     backdrop-blur-sm shadow-lg lg:col-span-2"
                            style={{ backgroundColor: 'rgb(8, 8, 8)' }}
                        >
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 border border-[rgb(70,70,70)] 
                                                     rounded-lg focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 
                                                     text-stellar-gray transition-all duration-300 placeholder:text-white"
                                            style={{ backgroundColor: 'rgb(15, 15, 15)' }}
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="w-full px-4 py-3 border border-[rgb(70,70,70)] 
                                                     rounded-lg focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 
                                                     text-stellar-gray transition-all duration-300 placeholder:text-white"
                                            style={{ backgroundColor: 'rgb(15, 15, 15)' }}
                                            required
                                        />
                                    </div>
                                </div>

                                {['phone', 'company'].map((field) => (
                                    <motion.div
                                        key={field}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        className="relative"
                                    >
                                        <input
                                            type="text"
                                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                            className="w-full px-4 py-3 border border-[rgb(70,70,70)] 
                                                     rounded-lg focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 
                                                     text-stellar-gray transition-all duration-300
                                                     placeholder:text-white"
                                            style={{ backgroundColor: 'rgb(15, 15, 15)' }}
                                            required
                                        />
                                    </motion.div>
                                ))}
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <textarea
                                        placeholder="How can we help?"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-[rgb(70,70,70)] 
                                                 rounded-lg focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 
                                                 text-stellar-gray transition-all duration-300
                                                 placeholder:text-white"
                                        style={{ backgroundColor: 'rgb(15, 15, 15)' }}
                                        required
                                    />
                                </motion.div>
                                
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-white text-black font-semibold py-4 px-8 rounded-lg
                                              transition-all duration-300 
                                             shadow-lg"
                                >
                                    Submit Enquiry →
                                </motion.button>
                            </form>
                        </motion.div>
                </div>
            </div>
        </section>
    );
};