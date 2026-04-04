import { motion } from 'framer-motion';
import { Package, Truck, Clock, Globe, Shield, Zap } from 'lucide-react';

const specialties = [
    {
        title: "Full Truck Load (FTL)",
        description: "Specialized end-to-end transport for bulk shipments across every industrial sector in India with dedicated vehicle assignment.",
        icon: Truck,
        keywords: ["Express", "Pan-India", "Secure"]
    },
    {
        title: "ODC Cargo Handling",
        description: "Expertise in managing Over Dimensional Cargo with specialized trailers and route surveys for complex industrial machinery.",
        icon: Package,
        keywords: ["Surveys", "Permission", "Heavy"]
    },
    {
        title: "Just-In-Time Delivery",
        description: "Zero-delay logistics supply chains for automotive and manufacturing industries where every minute counts.",
        icon: Clock,
        keywords: ["Automotive", "Agile", "Fast"]
    },
    {
        title: "Multi-Modal Solutions",
        description: "Integrated road and rail transport solutions to optimize costs and reduce lead times for long-range shipments.",
        icon: Globe,
        keywords: ["Economical", "Diverse", "Rail"]
    },
    {
        title: "Safety & Compliance",
        description: "Strict adherence to safety protocols and transport laws ensuring your cargo is never stuck or at risk.",
        icon: Shield,
        keywords: ["Legal", "Insured", "Hassle-Free"]
    },
    {
        title: "Smart Tracking",
        description: "Advanced telematics and real-time dashboard for every shipment, providing 100% visibility to our clients.",
        icon: Zap,
        keywords: ["Live Updates", "Transparency", "Tech"]
    }
];

const AboutSpecialization = () => {
    return (
        <section className="relative py-16 max-[426px]:py-8 bg-white overflow-hidden">
            {/* Consistent Background Blobs */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary text-xs font-black tracking-widest uppercase">Expertise Hub</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl max-[426px]:text-3xl font-black text-heading leading-tight tracking-tight"
                    >
                        Industrial <span className="text-primary italic">Specialization</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-paragraph text-xl max-[426px]:text-lg font-medium"
                    >
                        We don't just provide trucks; we provide engineered logistics solutions tailored for modern commerce.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white p-10 rounded-[40px] border border-slate-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative number or background icon */}
                            <div className="absolute top-6 right-6 text-slate-50 font-black text-6xl group-hover:text-primary/10 transition-colors pointer-events-none">
                                0{index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-primary flex items-center justify-center mb-8 transform group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-black text-heading mb-4 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                
                                <p className="text-paragraph text-lg leading-relaxed font-medium mb-8">
                                    {item.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {item.keywords.map((tag, k) => (
                                        <span key={k} className="text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1 bg-slate-50 rounded-full text-paragraph group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Minimal bottom progress line */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-50 group-hover:bg-primary transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSpecialization;
