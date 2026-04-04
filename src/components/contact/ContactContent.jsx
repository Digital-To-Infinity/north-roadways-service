import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, ChevronDown, Check } from 'lucide-react';

const ContactContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('Logistics Inquiry');
    const dropdownRef = useRef(null);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const subjects = [
        'Logistics Inquiry',
        'Supply Chain Solutions',
        'Transportation Query',
        'Customer Support',
        'Other / Business'
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Side: Contact Information */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                        }}
                        className="lg:col-span-12 xl:col-span-5 space-y-12"
                    >
                        <div className="space-y-6 text-center xl:text-left">
                            <h2 className="text-4xl font-extrabold text-heading leading-[1.2]">
                                We're Here To <br />
                                <span className="text-primary italic font-light">Support You</span> At Every Step
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                            {[
                                { icon: <Phone size={24} />, title: "Contact Numbers", details: ["+91 9331594304"], sub: "Available during business hours", link: "tel:+919331594304" },
                                { 
                                    icon: (
                                        <svg viewBox="0 0 24 24" size={24} className="w-6 h-6 fill-current">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    ), 
                                    title: "WhatsApp Chat", 
                                    details: ["+91 8583994218"], 
                                    sub: "Click to chat instantly", 
                                    link: "https://wa.me/918583994218?text=Hello,%20I%20have%20an%20inquiry%20regarding%20North%20Roadways%20Service." 
                                },
                                { icon: <Mail size={24} />, title: "Email Correspondence", details: ["northroadwaysservice@gmail.com"], sub: "Get a quote within 24 hours", link: "mailto:northroadwaysservice@gmail.com" },
                                { icon: <MapPin size={24} />, title: "Main Office Location", details: ["Bima Complex, Office No. D-3091, Kalamboli, Navi Mumbai"], sub: "Metro City Network Office" },
                                { icon: <Clock size={24} />, title: "Working Hours", details: ["Mon-Sat, 9:00 AM - 7:00 PM"], sub: "Closed on Sundays & Holidays" }
                            ].map((item, idx) => (
                                <a 
                                    key={idx} 
                                    href={item.link || '#'} 
                                    target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className={`flex gap-6 items-start group ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                                >
                                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex-shrink-0">
                                        <div className="text-primary group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold text-heading group-hover:text-primary transition-colors duration-300 text-center xl:text-left">{item.title}</h4>
                                        {item.details.map((detail, dIdx) => (
                                            <p key={dIdx} className="text-paragraph font-medium text-center xl:text-left">{detail}</p>
                                        ))}
                                        <p className="text-xs text-paragraph/60 uppercase tracking-widest pt-1 text-center xl:text-left">{item.sub}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Modern Contact Form or Success Message */}
                    <div className="lg:col-span-12 xl:col-span-7 relative min-h-[600px]">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div 
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-[#fafafa] p-8 md:p-8 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-100/50 h-full"
                                >
                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div className="space-y-6">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-heading/70 ml-2 uppercase tracking-widest">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    required
                                                    placeholder="Full Name" 
                                                    className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-heading font-medium placeholder:text-paragraph/30"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold text-heading/70 ml-2 uppercase tracking-widest">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    required
                                                    placeholder="office@company.com" 
                                                    className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-heading font-medium placeholder:text-paragraph/30"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-bold text-heading/70 ml-2 uppercase tracking-widest">Phone Number</label>
                                                <input 
                                                    type="tel" 
                                                    required
                                                    placeholder="+91 00000 00000" 
                                                    className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-heading font-medium placeholder:text-paragraph/30"
                                                />
                                            </div>
                                
                                {/* Custom Interactive Dropdown */}
                                <div className="space-y-3 relative" ref={dropdownRef}>
                                    <label className="text-sm font-bold text-heading/70 ml-2 uppercase tracking-widest">Subject</label>
                                    <div 
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={`w-full px-6 py-4 bg-white border rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? 'border-primary ring-4 ring-primary/5 shadow-lg' : 'border-slate-100'}`}
                                    >
                                        <span className={`font-medium ${selectedSubject ? 'text-heading' : 'text-paragraph/30'}`}>
                                            {selectedSubject || 'Select a subject'}
                                        </span>
                                        <ChevronDown size={20} className={`text-paragraph transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute z-50 left-0 right-0 top-full mt-3 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden py-2"
                                            >
                                                {subjects.map((subject, index) => (
                                                    <div 
                                                        key={index}
                                                        onClick={() => {
                                                            setSelectedSubject(subject);
                                                            setIsOpen(false);
                                                        }}
                                                        className={`px-6 py-3.5 flex items-center justify-between cursor-pointer transition-colors ${selectedSubject === subject ? 'bg-primary/5 text-primary' : 'text-heading hover:bg-slate-50'}`}
                                                    >
                                                        <span className="font-medium text-sm md:text-base">{subject}</span>
                                                        {selectedSubject === subject && <Check size={16} className="text-primary" />}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                                        <div className="space-y-3 pt-6">
                                            <label className="text-sm font-bold text-heading/70 ml-2 uppercase tracking-widest">Your Message</label>
                                            <textarea 
                                                rows="5" 
                                                required
                                                placeholder="How can we help you today?" 
                                                className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all text-heading font-medium placeholder:text-paragraph/30 resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4 flex items-center gap-6 flex-wrap md:flex-nowrap">
                                            <button 
                                                type="submit"
                                                className="w-full md:w-auto px-12 py-5 bg-primary text-white font-black text-sm tracking-[0.2em] rounded-2xl hover:bg-primary-hover shadow-xl shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-4 cursor-pointer group uppercase"
                                            >
                                                Send Message
                                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[600px]"
                                >
                                    <motion.div 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", damping: 10, stiffness: 100 }}
                                        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-200"
                                    >
                                        <Check size={48} className="text-white" />
                                    </motion.div>
                                    <h3 className="text-3xl font-black text-heading mb-4 uppercase tracking-tight">Message Sent!</h3>
                                    <p className="text-lg text-paragraph max-w-sm leading-relaxed">
                                        Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                                    </p>
                                    <div className="mt-12 w-full max-w-[200px] h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: "100%" }}
                                            animate={{ width: "0%" }}
                                            transition={{ duration: 5, ease: "linear" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                    <p className="mt-4 text-xs text-paragraph uppercase tracking-[0.2em] font-bold">Reseting form in a few seconds...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Decorative background shapes */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
};

export default ContactContent;
