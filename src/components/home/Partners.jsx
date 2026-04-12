import { useState } from 'react';
import { motion } from 'framer-motion';
import logo1 from '../../assets/logo/Acion _ Orion Scaffolding Pvt Ltd.png';
import logo2 from '../../assets/logo/Atlantis Cabins.png';
import logo3 from '../../assets/logo/BSC Interiors Pvt Ltd.png';
import logo4 from '../../assets/logo/Big Imports & Gifts.png';
import logo5 from '../../assets/logo/Blackstone Engineering.png';
import logo6 from '../../assets/logo/CTRLM Print Management India Pvt Ltd.png';
import logo7 from '../../assets/logo/Express Global Logistics Pvt Ltd.png';
import logo8 from '../../assets/logo/Laxmi Engineering Works.png';
import logo9 from '../../assets/logo/NCC Limited.png';
import logo10 from '../../assets/logo/OM Spiro Fabricators.png';
import logo11 from '../../assets/logo/Rohan Construction Co.png';
import logo12 from '../../assets/logo/Shiv Shakti Process Equipment Pvt Ltd.png';
import logo13 from '../../assets/logo/Steelcase.png';
import logo14 from '../../assets/logo/Sudarshan Pharma Industries Ltd.png';
import logo15 from '../../assets/logo/Sun International.png';
import logo16 from '../../assets/logo/Sushil Enterprises Mehsana.png';
import logo17 from '../../assets/logo/Tuyan Industries.png';
import logo18 from '../../assets/logo/Unicorn Petroleum Industries Pvt Ltd.png';

const partnersData = [
  { name: 'CTRLM Print Management India Pvt Ltd', logo: logo6, color: '#f43f5e' },
  { name: 'Sudarshan Pharma Industries Ltd', logo: logo14, color: '#84cc16' },
  { name: 'Unicorn Petroleum Industries Pvt Ltd', logo: logo18, color: '#2dd4bf' },
  { name: 'Arion Scaffolding Pvt Ltd', logo: logo1, color: '#f97316' },
  { name: 'Atlantis Cabins', logo: logo2, color: '#0ea5e9' },
  { name: 'BSC Interiors Pvt Ltd', logo: logo3, color: '#16a34a' },
  { name: 'Big Imports & Gifts', logo: logo4, color: '#ec4899' },
  { name: 'Blackstone Engineering', logo: logo5, color: '#6366f1' },
  { name: 'Express Global Logistics Pvt Ltd', logo: logo7, color: '#f59e0b' },
  { name: 'Laxmi Engineering Works', logo: logo8, color: '#10b981' },
  { name: 'NCC Limited', logo: logo9, color: '#3b82f6' },
  { name: 'OM Spiro Fabricators', logo: logo10, color: '#8b5cf6' },
  { name: 'Rohan Construction Co', logo: logo11, color: '#ef4444' },
  { name: 'Shiv Shakti Process Equipment Pvt Ltd', logo: logo12, color: '#06b6d4' },
  { name: 'Steel Case', logo: logo13, color: '#f97316' },
  { name: 'Sun International', logo: logo15, color: '#eab308' },
  { name: 'Sushil Enterprises Pvt Ltd', logo: logo16, color: '#64748b' },
  { name: 'Tuyan Industries', logo: logo17, color: '#d946ef' },
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

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-all duration-700 ease-out -z-10
                  ${isHovered ? 'bg-[#FF7518]/10 scale-150' : 'bg-slate-50 scale-100'}
                `}></div>

                {/* Logo Area */}
                <div className="h-28 w-full flex items-center justify-center relative z-10">
                  <motion.div
                    animate={{ y: isHovered ? -8 : 0, scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="flex items-center justify-center w-full h-full p-2"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Separator & Name */}
                <div className="mt-8 max-[426px]:mt-0 relative z-10 w-full flex flex-col items-center">
                  <motion.div
                    initial={{ width: "30px" }}
                    animate={{
                      width: isHovered ? "60px" : "30px",
                      backgroundColor: isHovered ? partner.color : "#e2e8f0"
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-[3px] mb-5 rounded-full"
                  />
                  <h4 className={`font-bold text-xs lg:text-sm tracking-wider transition-all duration-300 text-center ${isHovered ? 'text-heading' : 'text-slate-900'}`}>
                    {partner.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}

          {/* Special "And Many More" Card */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center border-none shadow-2xl cursor-pointer overflow-hidden min-h-[280px]"
            whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
          >
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(202,29,55,0.4)_0%,transparent_50%)] animate-pulse"></div>
              <div className="absolute bottom-[-20%] right-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,117,24,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Icon Circle */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-ping"></div>
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-tr from-primary to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 md:h-10 md:w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h4 className="text-white font-black text-xl md:text-2xl tracking-tighter leading-tight group-hover:tracking-normal transition-all duration-500">
                  AND MANY <br className="hidden md:block" /> MORE
                </h4>
                <div className="w-8 h-1 bg-primary/40 mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase pt-2">
                  Trusted Partners
                </p>
              </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
