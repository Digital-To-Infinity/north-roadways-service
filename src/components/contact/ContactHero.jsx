import { motion } from 'framer-motion';

const ContactHero = () => {
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
        <section className="relative min-h-[60vh] max-[426px]:min-h-[40vh] flex items-center overflow-hidden bg-[#fafafa] pt-16">
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
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/5 border border-primary/10 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Get In Touch</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-7xl md:text-8xl max-[426px]:text-6xl font-extrabold text-heading mb-8 leading-[1.1] tracking-tight">
                        Let's Start a <span className="text-primary relative inline-block">
                            Conversation
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20 fill-current" viewBox="0 0 200 20">
                                <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-paragraph mb-12 leading-relaxed max-w-5xl mx-auto">
                        Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
