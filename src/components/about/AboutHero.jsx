import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';
import truckImg from '../../assets/images/about-hero-truck.png';

const AboutHero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafafa] py-10">
            {/* Dynamic Background Elements - Matching WhyChooseUs */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Gradient Base */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,24,0.05),transparent_70%)]"></div>
                
                {/* Animated Primary Blobs */}
                <motion.div 
                    animate={{ 
                        x: [0, 80, -40, 0], 
                        y: [0, -40, 80, 0],
                        scale: [1, 1.1, 0.95, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
                />
                <motion.div 
                    animate={{ 
                        x: [0, -100, 60, 0], 
                        y: [0, 80, -40, 0],
                        scale: [1, 0.9, 1.05, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-primary-hover/5 rounded-full blur-[120px]"
                />

                {/* Modern Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#FF7518_1px,transparent_1px),linear-gradient(to_bottom,#FF7518_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/5 border border-primary/10 rounded-full group">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Est. 1995</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-6xl font-extrabold text-heading mb-8 leading-[1.1] tracking-tight">
                            Reliable <span className="text-primary relative inline-block">
                                Logistics
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20 fill-current" viewBox="0 0 200 20">
                                    <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span> <br />
                            For A Faster <span className="italic font-light">Global Future</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-paragraph mb-12 leading-relaxed">
                            North Roadways Service is a leader in modern transportation, bridging gaps and delivering excellence across the nation. We transform complex logistics into competitive advantages.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mb-16">
                            <button className="px-10 py-5 bg-primary text-white font-black text-sm tracking-widest rounded-2xl hover:bg-primary-hover shadow-2xl shadow-primary/30 transition-all active:scale-95 flex items-center gap-3 cursor-pointer group uppercase">
                                Explore Services
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 bg-white text-heading font-bold text-sm tracking-widest rounded-2xl border-2 border-slate-100 hover:border-primary/20 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer uppercase">
                                Contact Us
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content: Premium Image & Floating Elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -right-10 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white shadow-primary/10">
                            <img 
                                src={truckImg} 
                                alt="Modern Logistics Hub" 
                                className="w-full h-auto object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>

                        {/* Interactive Ring Background */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1.5px] border-primary/10 rounded-[50px] scale-110 pointer-events-none group-hover:scale-125 group-hover:border-primary/20 transition-all duration-[1.5s]"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
