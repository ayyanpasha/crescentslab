import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
    {
        title: "AI-Powered Web Apps",
        description: "Next.js-based solutions with integrated AI capabilities",
        features: ["Real-time analytics", "GenAI integrations", "Scalable architecture"],
        image: require(`../asset/images/aiwebapp.png`)
    },
    {
        title: "Smart Mobile Apps",
        description: "React Native cross-platform solutions with ML Kit",
        features: ["Offline-first", "AI-enhanced UX", "Biometric auth"],
        image: require(`../asset/images/smartmobileapp.png`)
    },
    {
        title: "GenAI Services",
        description: "Custom LLM deployments & AI automation",
        features: ["ChatGPT integration", "Voice synthesis", "Workflow automation"],
        image: require(`../asset/images/genaiservices.png`)
    },
    {
        title: "AI Phone Systems",
        description: "NLP-powered call automation",
        features: ["Voice bots", "Sentiment analysis", "Multi-language support"],
        image: require(`../asset/images/aiphonesystems.png`)
    }
];

// ... existing imports and services array ...

export const Services = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <section id='services' className="py-32 bg-space-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.1)_0%,transparent_65%)]" />
            
            {/* Animated Glow Effects */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-galaxy-purple/20 rounded-full blur-[120px]" />

            {/* Grid Background */}
            <div className="absolute inset-0" 
                 style={{
                     backgroundImage: `radial-gradient(rgba(100,255,218,0.1) 1px, transparent 1px)`,
                     backgroundSize: '30px 30px',
                     opacity: 0.3
                 }}
            />

            {/* Vertical Lines Overlay */}
            <div className="absolute inset-0 flex justify-between">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent opacity-50" />
            </div>

            <div className="container mx-auto px-3 relative z-10 md:px-6">
                <div className="bg-white rounded-2xl p-2 md:p-12 pt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto h-full">
                        {/* Left Column - Intro + Services List */}
                        <div className="space-y-4 md:space-y-16">
                            {/* Introduction */}
                            <div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-blue-500 font-mono tracking-wider mb-4"
                                >
                                    | WHAT WE DO
                                </motion.p>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    className="text-4xl md:text-5xl font-bold text-[#334155] mb-6"
                                >
                                    We bring <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">AI, engineering &<br />content</span> expertise
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-[#64748b] max-w-xl text-md md:text-lg"
                                >
                                    Each problem is looked at from a fresh lens to provide you with a solution that 
                                    solves your specific requirements and integrates with your existing infrastructure
                                </motion.p>
                            </div>

                            {/* Services List */}
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        onClick={() => setActiveService(index)}
                                        className={`cursor-pointer p-2 transition-all duration-300 relative`}
                                    >
                                        <h3 className={`text-xl font-semibold transition-colors duration-300
                                            ${activeService === index ? 'font-bold' : 'text-[#475569]'}`}>
                                            {service.title}
                                        </h3>
                                        <div className={`absolute left-0 bottom-0 h-1 transition-all duration-300 ease-in-out
                                            ${activeService === index ? 'w-full bg-blue-500' : 'w-0'}`}></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Service Details */}
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-[400px] md:h-[600px] lg:h-full"
                        >
                            <div className="absolute inset-0 overflow-hidden rounded-2xl md:rounded-br-none md:rounded-bl-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10" />
                                <img 
                                    src={services[activeService].image} 
                                    alt={services[activeService].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-end">
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    {services[activeService].title}
                                </h3>
                                <p className="text-gray-200 mb-8 text-lg">
                                    {services[activeService].description}
                                </p>
                                <ul className="space-y-4">
                                    {services[activeService].features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="flex items-center space-x-3 text-gray-200"
                                        >
                                            <span className="text-neon-cyan">▹</span>
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};