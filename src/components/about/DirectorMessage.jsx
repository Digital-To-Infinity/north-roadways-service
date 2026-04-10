import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const DirectorMessage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <section ref={containerRef} className="relative py-16 max-[426px]:py-8 overflow-hidden bg-white border-y border-slate-50">
            {/* Dynamic Background with Parallax & Grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,29,55,0.03)_0%,transparent_50%)]"></div>
                
                {/* Animated Parallax Blobs */}
                <motion.div style={{ y: y1 }} className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></motion.div>
                <motion.div style={{ y: y2, rotate }} className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></motion.div>
                
                {/* Premium Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
                     style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="mx-auto px-4 lg:px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div 
                        initial="initial"
                        whileHover="hover"
                        className="relative inline-block group"
                    >
                        {/* Interactive Large Quotes */}
                        <motion.div
                            variants={{
                                initial: { x: 0, y: 0, rotate: 12, opacity: 0.3 },
                                hover: { x: -30, y: -20, rotate: -5, opacity: 0.6 }
                            }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="absolute -top-0 -left-30 text-primary w-32 h-32 max-[426px]:w-16 max-[426px]:h-16 max-[426px]:-top-8 max-[426px]:-left-8 pointer-events-none"
                        >
                            <Quote size="70%" />
                        </motion.div>

                        <motion.div
                            variants={{
                                initial: { x: 0, y: 0, rotate: 12, opacity: 0.3 },
                                hover: { x: 30, y: 20, rotate: 20, opacity: 0.6 }
                            }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="absolute -bottom-10 -right-30 text-primary w-32 h-32 scale-x-[-1] max-[426px]:w-16 max-[426px]:h-16 max-[426px]:-bottom-8 max-[426px]:-right-8 pointer-events-none"
                        >
                            <Quote size="70%" />
                        </motion.div>
                        
                        {/* Magnetic Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="inline-flex items-center gap-4 px-6 py-2 bg-white border border-slate-100 rounded-full mb-12 group-hover:border-primary/20 transition-colors"
                        >
                            <div className="relative flex items-center justify-center">
                                <span className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></span>
                                <div className="relative p-1.5 bg-primary rounded-full">
                                    <Sparkles size={12} className="text-white" />
                                </div>
                            </div>
                            <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">Message from Director</span>
                        </motion.div>

                        {/* Premium Headline with Layered Animation */}
                        <div className="relative">
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="text-6xl md:text-7xl max-[426px]:text-4xl font-black text-heading leading-[0.95] tracking-tighter"
                            >
                                <span className="block mb-4 group-hover:translate-x-2 transition-transform duration-500">"Customer satisfaction is</span>
                                <span className="relative inline-block text-primary italic overflow-hidden">
                                    our satisfaction"
                                    <motion.div 
                                        initial={{ x: "-100%" }}
                                        whileInView={{ x: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                    ></motion.div>
                                </span>
                            </motion.h2>

                            {/* Particle/Decor effects */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DirectorMessage;
