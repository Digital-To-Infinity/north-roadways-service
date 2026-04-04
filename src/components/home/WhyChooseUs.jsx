import { motion } from 'framer-motion';
import { Coins, Truck, Zap, Users, ShieldCheck, MapPin } from 'lucide-react';

const reasons = [
  { 
    title: "Cost Competitiveness", 
    desc: "We provide market-leading pricing structures without ever compromising on the quality and security of transit.", 
    icon: Coins 
  },
  { 
    title: "Diversified Fleet", 
    desc: "A wide range of modern, heavy-duty vehicles perfectly suited for every type of structural and industrial load.", 
    icon: Truck 
  },
  { 
    title: "Fast Response", 
    desc: "Agile and highly responsive operations ensuring your urgent logistics requirements are always met immediately.", 
    icon: Zap 
  },
  { 
    title: "Motivated Workforce", 
    desc: "A highly trained, dedicated team of personnel focused on executing seamless and safe logistics.", 
    icon: Users 
  },
  { 
    title: "Ethical Practices", 
    desc: "100% transparency, honesty, and professional integrity in every single transaction and transit.", 
    icon: ShieldCheck 
  },
  { 
    title: "Pan India Reach", 
    desc: "An extensive, tightly knit network connecting every major city and remote location across the nation.", 
    icon: MapPin 
  }
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-16 bg-[#fafafa] flex items-center justify-center overflow-hidden">
      {/* Dynamic Animated Background - Light Theme */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,24,0.05),transparent_70%)]"></div>
        
        {/* Animated Primary Blobs (Transparent/Pastel) */}
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

        {/* Modern Grid Overlay (Light) */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#FF7518_1px,transparent_1px),linear-gradient(to_bottom,#FF7518_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,117,24,0.3)]"></span>
            <span className="text-primary text-xs font-black tracking-widest uppercase">The North Roadways Advantage</span>
          </div>

          <h2 className="text-7xl font-black text-heading uppercase tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Choose Us?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-paragraph leading-relaxed font-medium max-w-6xl mx-auto">
            Choose us for unparalleled efficiency, transparency, and quality. Our decade-long expertise ensures you receive the best logistics experience. Trust a partner dedicated to driving your growth.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white border border-slate-100 p-8 rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(255,117,24,0.08)] transition-all duration-500 cursor-pointer"
            >
              {/* Card Hover Glow effect (Light) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner Accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 group-hover:scale-150 transition-all duration-700"></div>

              <div className="relative z-10 flex flex-col h-full space-y-6">
                <div className="flex items-center justify-between">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                    <reason.icon size={28} className="text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-7xl font-black text-slate-100 select-none group-hover:text-primary/25 transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-heading tracking-wide group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-paragraph font-medium leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                    {reason.desc}
                  </p>
                </div>
                
                {/* Decorative Bottom Bar */}
                <div className="mt-auto pt-4">
                  <div className="h-1 w-12 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
