import { motion } from 'framer-motion';

const processes = [
    {
        title: "Discovery",
        icon: "🔍",
        description: "Together, we dive into your world. A brainstorming session where your challenges meet our creative thinking",
        phase: "Phase 1",
        image: require('../asset/images/discovery.avif')
    },
    {
        title: "Analysis",
        icon: "📊",
        description: "We craft a tailored action plan that aligns with your budget and requirements – no guesswork, just solutions",
        phase: "Phase 2",
        image: require('../asset/images/analysis.avif')
    },
    {
        title: "Execution",
        icon: "🚀",
        description: "It's go time. Our team gets to work, setting plans into motion, turning ideas into real-world impact",
        phase: "Phase 3",
        image: require('../asset/images/execution.avif')
    }
];

export const Process = () => (
    <section className="py-24 bg-space-black relative overflow-hidden flex flex-col justify-between">
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
        
        <div className="container mx-auto px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <motion.div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
                        <span className="text-galaxy-purple">From Concept to Creation:</span>{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-galaxy-purple to-neon-cyan animate-gradient">
                            A Collaborative Approach
                        </span>
                    </h2>
                </motion.div>
            </motion.div>
            
            <div className="flex flex-col gap-10 max-w-6xl mx-auto relative">
                {processes.map((process, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative flex flex-col md:flex-row items-start bg-black border border-[rgb(70,70,70)] rounded-2xl p-8 md:p-12 shadow-lg"
                    >
                        <div className="md:w-1/3 flex flex-col justify-center">
                            <div className="flex items-center mb-2">
                                <div className="bg-yellow-500 rounded-full w-4 h-4 mr-4" />
                                <span className="text-lg text-gray-300">(Step {index + 1})</span>
                            </div>
                            <h3 className="text-5xl font-bold text-white mb-2">
                                {process.title}
                            </h3>
                        </div>
                        <div className="md:w-2/3 flex flex-row items-center">
                            <p className="text-gray-300 text-2xl mb-4 flex-1 font-medium">
                                {process.description}
                            </p>
                            <img 
                                src={process.image}
                                alt={process.title}
                                className="w-1/6 h-auto ml-4 rounded filter grayscale"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
