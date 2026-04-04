import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ship, Hexagon, Component, Globe2, ShieldCheck, Target, Zap, PackageSearch } from 'lucide-react';

const partnersData = [
  { name: 'APL LOGISTICS', brand: 'APL', Icon: Ship, color: '#3b82f6' },
  { name: 'AM/NS INDIA', brand: 'AM/NS', Icon: Target, color: '#f97316' },
  { name: 'JINDAL STAR', brand: 'JINDAL', Icon: Hexagon, color: '#16a34a' },
  { name: 'TATA MOTORS', brand: 'TATA', Icon: Globe2, color: '#1d4ed8' },
  { name: 'MAHINDRA', brand: 'MAHINDRA', Icon: ShieldCheck, color: '#dc2626' },
  { name: 'BLUE DART', brand: 'BLUE DART', Icon: Zap, color: '#eab308' },
  { name: 'FEDEX CORP', brand: 'FedEx', Icon: PackageSearch, color: '#9333ea' },
  { name: 'DELHIVERY', brand: 'DELHIVERY', Icon: Component, color: '#ef4444' },
];

const Partners = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-5 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary flex items-center justify-center relative">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
            </span>
            <span className="text-primary text-xs font-black tracking-widest uppercase">Our Network</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-heading tracking-tight leading-[1.1]">
            Trusted By The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Industry Leaders</span>
          </h2>
          
          <p className="text-paragraph text-lg md:text-xl max-w-6xl mx-auto leading-relaxed">
            We collaborate with India's top infrastructure and logistics giants to provide you with seamless, best-in-class transportation services.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {partnersData.map((partner, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center border transition-all duration-500 ease-out cursor-pointer overflow-hidden
                  ${isAnyHovered && !isHovered ? 'scale-[0.98]' : 'scale-100 opacity-100'}
                  ${isHovered ? 'border-primary/40 z-20' : 'border-slate-100 shadow-sm z-10'}
                `}
              >
                {/* Brand-colored background glow on hover */}
                <div 
                  className="absolute inset-0 transition-opacity duration-700 rounded-3xl -z-10 blur-2xl"
                  style={{ 
                    background: `radial-gradient(circle at center, ${partner.color}20 0%, transparent 70%)`,
                    opacity: isHovered ? 1 : 0 
                  }}
                />

                {/* Screenshot reference: bottom right circle shape */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-all duration-700 ease-out -z-10
                  ${isHovered ? 'bg-[#FF7518]/10 scale-150' : 'bg-slate-50 scale-100'}
                `}></div>
                
                {/* Logo Area */}
                <div className="h-24 w-full flex items-center justify-center relative z-10">
                  <motion.div 
                    animate={{ y: isHovered ? -8 : 0, scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="flex flex-col items-center gap-3"
                  >
                    <partner.Icon 
                      size={42} 
                      color={partner.color} 
                      strokeWidth={2} 
                      className="transition-all duration-300 drop-shadow-sm" 
                    />
                    <h3 
                      className="text-2xl lg:text-3xl font-black tracking-tighter transition-all duration-300"
                      style={{ color: partner.color }}
                    >
                      {partner.brand}
                    </h3>
                  </motion.div>
                </div>
                
                {/* Separator & Name */}
                <div className="mt-8 relative z-10 w-full flex flex-col items-center">
                  <motion.div 
                    initial={{ width: "30px" }}
                    animate={{ 
                      width: isHovered ? "60px" : "30px", 
                      backgroundColor: isHovered ? partner.color : "#e2e8f0" 
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-[3px] mb-5 rounded-full"
                  />
                  <h4 className={`font-bold text-xs lg:text-sm tracking-[0.15em] uppercase transition-all duration-300 ${isHovered ? 'text-heading' : 'text-slate-500'}`}>
                    {partner.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
