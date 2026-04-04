import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import servicesHeroImg from '../../assets/images/logistics_excellence_bg.png';

const ServicesHero = () => {
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#fafafa] py-16">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,24,0.05),transparent_70%)]"></div>
                
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
                        className="max-w-2xl mx-auto text-center md:text-left md:mx-0"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/5 border border-primary/10 rounded-full group mx-auto md:mx-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Fleet & Capabilities</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl max-[426px]:text-5xl font-extrabold text-heading mb-8 leading-[1.1] tracking-tight">
                            Premier <span className="text-primary relative inline-block">
                                Logistics
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20 fill-current" viewBox="0 0 200 20">
                                    <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span> <br />
                            Solutions for <b>Every Cargo</b>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-paragraph mb-12 leading-relaxed">
                            Discover our comprehensive range of specialized transportation services. From agile pickups to massive container hauls, we provide the muscle for your logistics success.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-5">
                            <Link to="/contact" className="w-full max-[426px]:w-full sm:w-auto">
                                <button className="w-full max-[426px]:w-full px-10 py-4 bg-primary text-white font-black text-sm tracking-widest rounded-2xl hover:bg-primary-hover shadow-2xl shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer group uppercase">
                                    Contact Us
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,117,24,0.3)] border-4 border-white">
                            <img 
                                src={servicesHeroImg} 
                                alt="Modern Logistics Fleet" 
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        </div>
                        
                        {/* Status Card Overlay */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -right-8 bottom-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-50 z-20 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                                <Settings className="animate-spin-slow" size={24} />
                            </div>
                            <div>
                                <h4 className="text-heading font-black text-sm uppercase">Real-time tracking</h4>
                                <p className="text-paragraph text-[10px] font-bold">ACTIVE ALL OVER INDIA</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
