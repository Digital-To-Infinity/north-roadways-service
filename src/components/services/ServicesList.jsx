import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Package, Box, ShieldCheck, Zap, Maximize, Gauge, ChevronRight, MapPin, Clock, CheckCircle2, ArrowRight, Settings, X, Send } from 'lucide-react';
import truckImg from '../../assets/images/truck_container_fleet.png';
import trailerImg from '../../assets/images/trailer_industrial_fleet.png';
import warehouseImg from '../../assets/images/about_warehouse.png';

const servicesDetailed = [
  { 
    id: "pickup",
    name: "Pickup", 
    desc: "Our agile pickup fleet is designed for swift city logistics, ensuring your small-scale cargo reaches its destination through the narrowest streets and busiest traffic with ease.", 
    icon: Zap,
    tag: "Small & Fast",
    image: truckImg,
    specs: ["Max Weight: 1.5 Tons", "Fuel: CNG/Diesel", "Urban Friendly", "GPS Tracked"],
    working: [
        { title: "Booking", desc: "Instant booking through our platform or helpline." },
        { title: "Quick Pick", desc: "Our driver reaches your location within 60 minutes." },
        { title: "Smart Transit", desc: "Optimized routing for the fastest delivery." }
    ]
  },
  { 
    id: "lcv",
    name: "LCV", 
    desc: "Light Commercial Vehicles bridge the gap between small deliveries and heavy hauls. Ideal for distributing consumer goods to retail outlets and regional warehouses.", 
    icon: Truck,
    tag: "Regional Expert",
    image: truckImg,
    specs: ["Max Weight: 3.5 - 7 Tons", "Door-to-door", "Regional Transit", "Cargo Secured"],
    working: [
        { title: "Consolidation", desc: "Efficient loading of multiple SKU types." },
        { title: "Zonal Delivery", desc: "Routed across specialized zones for speed." },
        { title: "POD Tracking", desc: "Digital Proof of Delivery for every stop." }
    ]
  },
  { 
    id: "ftl",
    name: "Full Truck Load", 
    desc: "Tailored for industrial giants, our FTL service guarantees a dedicated high-capacity vehicle for your shipment, minimizing handling and maximizing speed for interstate transit.", 
    icon: Box,
    tag: "High Priority",
    image: trailerImg,
    specs: ["Dedicated Engine", "Non-stop Transit", "High Capacity", "Zero-handling Risk"],
    working: [
        { title: "Seal Check", desc: "Strict sealing protocols for security." },
        { title: "Mainline Drive", desc: "National highway priority routing." },
        { title: "Direct Drop", desc: "From dock to dock with no reloading." }
    ]
  },
  { 
    id: "odc",
    name: "ODC", 
    desc: "Over-Dimensional Cargo handling requires precision. We manage the transport of oversized machinery and equipment with specialized infrastructure and expert supervision.", 
    icon: Maximize,
    tag: "Heavy Engineering",
    image: warehouseImg,
    specs: ["Escort Vehicles", "Height/Width Survey", "Heavy Lift Gear", "Permit Management"],
    working: [
        { title: "Pre-Survey", desc: "Route survey for clearance and bridge loads." },
        { title: "Special Permits", desc: "Handling all RTO and highway clearances." },
        { title: "Safe Escort", desc: "Managed transit with support vehicles." }
    ]
  },
  { 
    id: "container-20ft",
    name: "Container 20ft", 
    desc: "The global standard for logistics. Our 20ft containers offer weatherproof, high-security transit for electronics, textiles, and sensitive manufactured goods.", 
    icon: Package,
    tag: "Weatherproof",
    image: truckImg,
    specs: ["Standard ISO Size", "Theft Resistant", "Weather Tight", "Stackable"],
    working: [
        { title: "Loading", desc: "Expert packing to prevent movement." },
        { title: "Highway Hub", desc: "Networked transit through major hubs." },
        { title: "Final Gate", desc: "Secure unloading at destination port/hub." }
    ]
  },
  { 
    id: "container-32ft-xl",
    name: "Container 32ft XL", 
    desc: "When 20ft isn't enough, our XL containers provide massive cubic capacity for lighter but high-volume goods like FMCG and automotive components.", 
    icon: ShieldCheck,
    tag: "High Volume",
    image: trailerImg,
    specs: ["Extended Length", "Volume Optimized", "Double Axle", "High Speed"],
    working: [
        { title: "Volume Planning", desc: "Maximizing every cubic inch of space." },
        { title: "Express Route", desc: "Priority lanes for corporate logistics." },
        { title: "Integrated Ops", desc: "Real-time updates to client ERPs." }
    ]
  },
  { 
    id: "container-multi-xl",
    name: "Container Multi XL", 
    desc: "Our Multi-axle XL containers are the heavyweights of the container fleet. Capable of carrying massive loads while maintaining stability and safety over long distances.", 
    icon: Package,
    tag: "Max Capacity",
    image: truckImg,
    specs: ["Multi-Axle Support", "Indestructible Build", "Global Standard", "Remote GPS"],
    working: [
        { title: "Heavy Load Prep", desc: "Verifying weight distribution carefully." },
        { title: "Long-haul Transit", desc: "Managed by our most experienced drivers." },
        { title: "Point Delivery", desc: "Precision unloading at large-scale warehouses." }
    ]
  },
  { 
    id: "trailer",
    name: "Trailer", 
    desc: "Versatile and heavy-duty, our trailer fleet includes flatbeds and open-top trailers for everything from construction material to industrial pipes.", 
    icon: Gauge,
    tag: "Industrial Strength",
    image: trailerImg,
    specs: ["Flatbed Strength", "Multi-purpose", "Open/Closed options", "Heavy Axle"],
    working: [
        { title: "Cargo Lashing", desc: "Advanced securing of non-uniform loads." },
        { title: "Route Clear", desc: "Ensuring highway clearance for tall loads." },
        { title: "Safe Unload", desc: "Handling with specialized cranes/lifters." }
    ]
  },
  { 
    id: "all-goods",
    name: "All Goods Vehicles", 
    desc: "A universal fleet solution for any cargo requirement. We provide flexible vehicle options for mixed goods, ensuring no shipment is too small or too unique.", 
    icon: Truck,
    tag: "Versatile Fleet",
    image: warehouseImg,
    specs: ["Customizable Config", "Flexible Pricing", "All-India Coverage", "Dedicated Support"],
    working: [
        { title: "Custom Quote", desc: "Pricing based on your specific mix." },
        { title: "Flexible Pick", desc: "Multiple small pickups if needed." },
        { title: "Hub Consolidation", desc: "Grouping for cost-efficiency." }
    ]
  }
];

const ServicesList = () => {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setSelectedVehicle(null);
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col gap-32">
                    {servicesDetailed.map((service, index) => (
                        <motion.div 
                            key={index}
                            id={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Content */}
                            <div className="flex-1 relative">
                                <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
                                    <img 
                                        src={service.image} 
                                        alt={service.name} 
                                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                                        <div className="flex items-center gap-4 text-white/90 mb-4">
                                            <div className="p-3 bg-primary rounded-2xl">
                                                <service.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black">{service.name}</h4>
                                                <p className="text-xs uppercase tracking-widest font-bold opacity-70">{service.tag}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Specs Card */}
                                <motion.div 
                                    whileHover={{ y: -5 }}
                                    className={`absolute -bottom-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 z-20 min-w-[280px] ${index % 2 !== 0 ? '-left-10' : '-right-10'}`}
                                >
                                    <h5 className="text-heading font-black text-sm uppercase mb-4 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-primary" /> Key Specifications
                                    </h5>
                                    <div className="grid grid-cols-1 gap-2">
                                        {service.specs.map((spec, sIdx) => (
                                            <div key={sIdx} className="flex items-center gap-2 text-paragraph text-sm font-bold">
                                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 space-y-10">
                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-black text-heading tracking-tight">
                                        {service.name} <span className="text-primary">Operations.</span>
                                    </h2>
                                    <p className="text-lg text-paragraph leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                </div>

                                {/* Working Process */}
                                <div className="space-y-6">
                                    <h4 className="text-heading font-black text-lg uppercase tracking-wider flex items-center gap-3">
                                        <Settings className="text-primary animate-spin-slow" size={20} /> How It Works
                                    </h4>
                                    <div className="relative border-l-2 border-primary/10 ml-3 pl-8 py-2 space-y-8">
                                        {service.working.map((step, wIdx) => (
                                            <div key={wIdx} className="relative">
                                                {/* Bullet */}
                                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm" />
                                                <div className="space-y-1">
                                                    <h5 className="text-heading font-black text-base">{wIdx + 1}. {step.title}</h5>
                                                    <p className="text-paragraph text-sm font-medium">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setSelectedVehicle(service.name)}
                                    className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary-hover transition-all flex items-center gap-3 group cursor-pointer shadow-lg shadow-primary/20"
                                >
                                    Get Quote For {service.name}
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quote Modal */}
            <AnimatePresence>
                {selectedVehicle && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedVehicle(null)}
                            className="absolute inset-0 bg-heading/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden"
                        >
                            <button 
                                onClick={() => setSelectedVehicle(null)}
                                className="absolute top-4 right-4 text-paragraph hover:text-primary transition-colors p-2 bg-slate-50 rounded-full pointer-events-auto z-10 cursor-pointer"
                            >
                                <X size={22} />
                            </button>

                            <div className="p-6 md:p-8">
                                {!isSubmitted ? (
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-heading">
                                                Request Quote
                                            </h3>
                                            <p className="text-paragraph font-medium">
                                                Selected Vehicle: <span className="text-primary font-bold">{selectedVehicle}</span>
                                            </p>
                                        </div>

                                        <form onSubmit={handleQuoteSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Full Name *</label>
                                                    <input required type="text" placeholder="John Doe" className="w-full px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Mobile Number *</label>
                                                    <input required type="tel" placeholder="+91 99999 99999" className="w-full px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Email Address</label>
                                                <input type="email" placeholder="john@example.com" className="w-full px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Message</label>
                                                <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all resize-none"></textarea>
                                            </div>

                                            <button 
                                                disabled={isLoading}
                                                className="w-full py-4 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-70"
                                            >
                                                {isLoading ? (
                                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Send Request <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="py-12 flex flex-col items-center text-center space-y-6"
                                    >
                                        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-heading uppercase">Success!</h3>
                                            <p className="text-paragraph font-bold text-lg">
                                                Your request for <span className="text-primary">{selectedVehicle}</span> has been sent. <br />
                                                We'll contact you shortly.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesList;
