import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, CheckCircle2, TrendingUp } from 'lucide-react';

const coreValues = [
  {
    title: "Our Vision",
    description: "To be India's most trusted and technologically advanced logistics partner, connecting every corner of the nation with unparalleled efficiency.",
    icon: Lightbulb,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Our Mission",
    description: "To transform complex supply chain challenges into seamless growth opportunities for our clients through innovation and integrity.",
    icon: Target,
    color: "text-primary",
    bg: "bg-primary/5"
  },
  {
    title: "Our Promise",
    description: "Unwavering commitment to cargo safety, on-time delivery, and 100% transparency in every transit and transaction.",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  }
];

const AboutInfo = () => {
    return (
        <section className="relative py-16 max-[426px]:py-8 bg-[#fafafa] overflow-hidden">
            {/* Background pattern - Consistent with site theme */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="mx-auto px-4 lg:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    
                    {/* Left: Content & Metrics */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 space-y-10 text-center md:text-left"
                    >
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm mx-auto md:mx-0"
                            >
                                <TrendingUp size={16} className="text-primary" />
                                <span className="text-primary text-xs font-black tracking-[0.2em] uppercase">The Legacy of Excellence</span>
                            </motion.div>

                            <h2 className="text-5xl md:text-6xl max-[426px]:text-4xl font-black text-heading leading-[1.1] tracking-tight">
                                Delivering Reliability <br />
                                <span className="text-primary italic">Since 2022.</span>
                            </h2>

                            <p className="text-paragraph text-xl max-[426px]:text-lg leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
                                From a single-vehicle operation to a pan-India powerhouse, our journey is defined by grit, innovation, and an obsession with customer success.
                            </p>
                        </div>

                        {/* Interactive Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-left">
                            <div className="group p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/30 hover:shadow-2xl transition-all duration-500 cursor-default">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Users size={24} />
                                    </div>
                                    <span className="text-4xl font-black text-heading">100+</span>
                                </div>
                                <h4 className="text-lg font-bold text-heading group-hover:text-primary transition-colors">Trusted Clients</h4>
                                <p className="text-paragraph text-sm font-medium mt-2">Leading businesses trusting us daily.</p>
                            </div>

                            <div className="group p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/30 hover:shadow-2xl transition-all duration-500 cursor-default">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span className="text-4xl font-black text-heading">100%</span>
                                </div>
                                <h4 className="text-lg font-bold text-heading group-hover:text-emerald-600 transition-colors">Safety Integrity</h4>
                                <p className="text-paragraph text-sm font-medium mt-2">Zero-compromise cargo protection.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Values Cards */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Decorative side accent */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>

                        <div className="space-y-6">
                            {coreValues.map((value, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="group p-8 max-[426px]:p-4 bg-white border border-slate-100 rounded-[40px] hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(255,117,24,0.08)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                                >
                                    {/* Reveal background pattern on hover */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>

                                    <div className="flex gap-8 items-start relative z-10 text-left">
                                        <div className={`p-5 max-[426px]:p-3 rounded-[24px] ${value.bg} ${value.color} group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6`}>
                                            <value.icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-4 max-[426px]:space-y-2">
                                            <h3 className="text-2xl font-black text-heading group-hover:text-primary transition-colors tracking-tight">
                                                {value.title}
                                            </h3>
                                            <p className="text-paragraph text-lg max-[426px]:text-base leading-relaxed font-medium">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom indicator */}
                                    <div className="absolute bottom-0 left-1/4 h-1 w-0 bg-primary group-hover:w-1/2 transition-all duration-700 rounded-full"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutInfo;
