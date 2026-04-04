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
            <h4 className="text-primary font-black tracking-[0.25em] text-sm max-[426px]:text-xs uppercase flex items-center gap-4">
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
              className="group relative bg-[#ffffff] border border-slate-100 p-10 max-[426px]:p-6 rounded-[3rem] overflow-hidden hover:border-primary/50 hover:shadow-[0_40px_80px_rgba(255,117,24,0.12)] transition-all duration-500 cursor-pointer"
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
    </section>
  );
};

export default VehicleTypes;
