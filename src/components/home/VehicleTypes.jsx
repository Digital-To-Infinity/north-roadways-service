import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Package, Box, ShieldCheck, Zap, Maximize, Gauge, ChevronRight, X, Send, CheckCircle2 } from 'lucide-react';

const vehicleData = [
  { 
    name: "Pickup", 
    desc: "Ideal for small-scale urban logistics and rapid local deliveries.", 
    icon: Zap,
    tag: "Small"
  },
  { 
    name: "LCV", 
    desc: "Light Commercial Vehicles for efficient medium-range cargo transit.", 
    icon: Truck,
    tag: "Light"
  },
  { 
    name: "Full Truck Load", 
    desc: "Single-source mainline transport for massive industrial shipments.", 
    icon: Box,
    tag: "Mainline"
  },
  { 
    name: "ODC", 
    desc: "Over-Dimensional Cargo: Specialized handling for massive machinery.", 
    icon: Maximize,
    tag: "Heavy"
  },
  { 
    name: "Trailer", 
    desc: "Heavy-duty open and flatbed trailers for versatile logistical needs.", 
    icon: Gauge,
    tag: "Industrial"
  },
  { 
    name: "Container 20ft", 
    desc: "Standard weatherproof container for secure national transit.", 
    icon: Package,
    tag: "Standard"
  },
  { 
    name: "Container Single XL 32ft", 
    desc: "Extended capacity container for higher volume specialized goods.", 
    icon: ShieldCheck,
    tag: "Extended"
  },
  { 
    name: "Container Multi XL", 
    desc: "Maximum capacity multi-axle containers for the largest hauls.", 
    icon: Package,
    tag: "MAX"
  },
  { 
    name: "All Goods Vehicles", 
    desc: "A wide-ranging fleet capable of handling any type of cargo.", 
    icon: Truck,
    tag: "Versatile"
  }
];

const VehicleTypes = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuoteSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
          setIsLoading(false);
          setIsSubmitted(true);
          setTimeout(() => {
              setSelectedVehicle(null);
              setIsSubmitted(false);
          }, 3000);
      }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-100 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-20 space-y-6">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-4 flex flex-col items-center"
           >
             <h4 className="text-primary font-black tracking-[0.25em] text-sm uppercase flex items-center gap-4">
                <span className="w-12 h-[2px] bg-primary"></span>
                Extensive Fleet Range
                <span className="w-12 h-[2px] bg-primary"></span>
              </h4>
              <h2 className="text-5xl lg:text-7xl font-black text-heading leading-[1.1] tracking-tight">
                Our Specialized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-black">Vehicle Types.</span>
              </h2>
           </motion.div>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-paragraph text-lg md:text-xl font-medium max-w-4xl leading-relaxed"
           >
             From single pickups to massive multi-axle trailers, we maintain a diverse and high-performance fleet to meet every business requirement.
           </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {vehicleData.map((vehicle, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedVehicle(vehicle.name)}
              className="group relative bg-[#ffffff] border border-slate-100 p-10 rounded-[3rem] overflow-hidden hover:border-primary/50 hover:shadow-[0_40px_80px_rgba(255,117,24,0.12)] transition-all duration-500 cursor-pointer"
            >
              {/* Dynamic Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Corner Tag - High Tech Look */}
              <div className="absolute top-8 right-8 bg-primary/5 border border-primary/10 text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full text-primary shadow-sm">
                {vehicle.tag}
              </div>

              <div className="relative z-10 flex flex-col items-start gap-8">
                {/* Icon Box - Floating Glassmorphism */}
                <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-primary shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                   <vehicle.icon size={36} strokeWidth={1} className="transition-transform duration-700" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrafold text-heading group-hover:text-primary transition-colors duration-300 tracking-tight leading-none">
                    {vehicle.name}
                  </h3>
                  <p className="text-paragraph text-base font-medium leading-relaxed">
                    {vehicle.desc}
                  </p>
                </div>

                {/* Technical Spec Pills */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-50 w-full">
                   <div className="px-4 py-2 rounded-2xl bg-slate-50 text-[12px] font-bold text-paragraph group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                      High Payload
                   </div>
                   <div className="px-4 py-2 rounded-2xl bg-slate-50 text-[12px] font-bold text-paragraph group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                      GPS Tracking
                   </div>
                </div>
              </div>

              {/* Decorative Tech Grid element */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
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
                          className="absolute top-8 right-8 text-paragraph hover:text-primary transition-colors p-2 bg-slate-50 rounded-xl pointer-events-auto z-10"
                      >
                          <X size={24} />
                      </button>

                      <div className="p-8 md:p-12">
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
                                              <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Full Name</label>
                                              <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all" />
                                          </div>
                                          <div className="space-y-2">
                                              <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Mobile Number</label>
                                              <input required type="tel" placeholder="+91 99999 99999" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all" />
                                          </div>
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Email Address</label>
                                          <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all" />
                                      </div>
                                      <div className="space-y-2">
                                          <label className="text-xs font-black uppercase tracking-widest text-heading ml-1">Message</label>
                                          <textarea required rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-primary/50 font-medium text-slate-900 transition-all resize-none"></textarea>
                                      </div>

                                      <button 
                                          disabled={isLoading}
                                          className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-70"
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

export default VehicleTypes;
