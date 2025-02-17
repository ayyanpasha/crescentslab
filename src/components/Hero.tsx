import { motion } from 'framer-motion';

export const Hero = () => {
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

    return (
        <section className="min-h-screen bg-space-black relative overflow-hidden flex flex-col justify-between">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.1)_0%,transparent_65%)]" />
            
            {/* Animated Glow Effects */}
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

            {/* Grid Background */}
            <div className="absolute inset-0" 
                 style={{
                     backgroundImage: `radial-gradient(rgba(100,255,218,0.1) 1px, transparent 1px)`,
                     backgroundSize: '30px 30px',
                     opacity: 0.3
                 }}
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto w-full"
                >
                    <div className="text-center space-y-8">
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-neon-cyan font-mono tracking-wider"
                        >
                            WELCOME TO CRESCENT'S LAB
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            <span className="text-galaxy-purple">Transforming Ideas into</span>{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-galaxy-purple to-neon-cyan animate-gradient">
                                Digital Reality
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-stellar-gray max-w-2xl mx-auto leading-relaxed"
                        >
                            Experience unparalleled engineering solutions that elevate your vision to new heights.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <a 
                                className="group relative px-10 py-5 rounded-full bg-neon-cyan text-space-black font-semibold 
                                           hover:bg-cyan-300 transition-all duration-300 min-w-[220px]
                                           shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:shadow-[0_0_25px_rgba(100,255,218,0.4)]"
                                href='#footer'
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor click behavior
                                    document.getElementById('footer')?.scrollIntoView({ 
                                        behavior: 'smooth' // Smooth scroll animation
                                    });
                                }}
                            >
                                <span className="relative z-10 text-md md:text-lg">Work with us</span>
                            </a>
                            
                            <a className="group px-10 py-5 rounded-full border border-neon-cyan text-neon-cyan font-semibold 
                                           hover:bg-neon-cyan/10 transition-all duration-300 min-w-[220px]"
                                           href='services'
                                           onClick={(e) => {
                                               e.preventDefault(); // Prevent default anchor click behavior
                                               document.getElementById('services')?.scrollIntoView({ 
                                                   behavior: 'smooth' // Smooth scroll animation
                                               });
                                           }}
                            >
                                <span className="text-md md:text-lg">View Our Services</span>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                variants={scrollIndicatorVariants}
                initial="initial"
                animate="animate"
                className="relative z-10 flex justify-center w-full mb-12"
            >
                <motion.div 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                >
                    <span className="text-stellar-gray text-sm tracking-wider mb-4 uppercase">
                        Scroll to discover
                    </span>
                    <motion.div
                        variants={arrowVariants}
                        animate="animate"
                        className="w-6 h-8 border-2 border-neon-cyan rounded-full p-1"
                    >
                        <motion.div
                            variants={arrowVariants}
                            animate="animate" 
                            className="w-1 h-1 bg-neon-cyan rounded-full mx-auto"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Vertical Lines Overlay */}
            <div className="absolute inset-0 flex justify-between">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50" />
            </div>
        </section>
    );
};