import { motion } from 'framer-motion';
import { Phone, MessageCircle, User, Briefcase, Scale, ShieldCheck } from 'lucide-react';

const teamMembers = [
    {
        name: "Diwakar Kumar Tiwari",
        role: "Director",
        mob: "9331594304",
        whatsapp: "+918583994218",
        icon: User,
        accent: "bg-blue-500/10 text-blue-600"
    },
    {
        name: "Santosh Tiwari",
        role: "All India Business Executive",
        mob: "8097193294",
        icon: Briefcase,
        accent: "bg-primary/10 text-primary"
    },
    {
        name: "Ad. Himanshu Kumar Tiwari",
        role: "Legal Advisor",
        mob: "7800245531, 8840954150",
        icon: Scale,
        accent: "bg-emerald-500/10 text-emerald-600"
    },
    {
        name: "Poonam Mishra",
        role: "All India Controlling Manager",
        mob: "9696359895",
        icon: ShieldCheck,
        accent: "bg-purple-500/10 text-purple-600"
    }
];

const AboutTeam = () => {
    return (
        <section className="relative py-16 max-[426px]:py-8 bg-[#fafafa] overflow-hidden">
            {/* Background elements - matching site theme */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
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
                        <span className="text-primary text-xs font-black tracking-widest uppercase">Executive Leadership</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl max-[426px]:text-4xl font-black text-heading tracking-tight"
                    >
                        The Faces Behind <br />
                        <span className="text-primary italic">Our Success</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-paragraph text-xl max-[426px]:text-lg font-medium max-w-2xl mx-auto"
                    >
                        Meet the dedicated leaders driving North Roadways Service towards new horizons of logistics excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white p-10 max-[426px]:p-6 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <member.icon className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-50 group-hover:text-primary/5 transition-colors duration-700 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`p-4 rounded-2xl ${member.accent} group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12`}>
                                        <member.icon size={28} />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-primary font-black text-xs uppercase tracking-widest mb-1">Active Member</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>)}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-3xl max-[426px]:text-2xl font-black text-heading mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-lg font-bold text-paragraph uppercase tracking-widest text-sm mb-10">
                                    {member.role}
                                </p>

                                <div className="mt-auto space-y-4">
                                    <a 
                                        href={`tel:${member.mob.split(',')[0].trim()}`} 
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 text-paragraph font-bold hover:bg-primary hover:text-white transition-all duration-300 group/link"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover/link:text-white group-hover/link:bg-white/20">
                                            <Phone size={18} />
                                        </div>
                                        <span className="tracking-wide">Mob: {member.mob}</span>
                                    </a>

                                    {member.whatsapp && (
                                        <a 
                                            href={`https://wa.me/${member.whatsapp}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition-all duration-300 group/link"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm group-hover/link:text-white group-hover/link:bg-white/20">
                                                <MessageCircle size={18} />
                                            </div>
                                            <span className="tracking-wide">WhatsApp: {member.whatsapp}</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Hover Border Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-transparent group-hover:bg-primary transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
