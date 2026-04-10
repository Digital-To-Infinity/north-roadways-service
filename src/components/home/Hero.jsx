import { motion } from 'framer-motion';
import { ArrowRight, Truck, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/images/truck_hero_bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] max-[426px]:min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-10 max-[426px]:pt-0 pb-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Transportation Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* Modern dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-transparent"></div>
        
        {/* Neon Accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-hover/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full mt-10 lg:mt-0">
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Reliable Logistics Partner</span>
          </div>
          
          <h1 className="text-6xl max-[426px]:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Success</span> <br/>
            Across The Nation.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            North Roadways Service delivers unparalleled transportation solutions. We ensure your cargo reaches its destination safely, securely, and always on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/services"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-xl hover:shadow-primary/40"
            >
              Our Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Content Area - Glassmorphism floating cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block h-[500px]"
        >
          {/* Main Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute right-0 lg:right-10 top-10 w-80 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-6 rounded-3xl shadow-2xl z-20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Active Tracking</h3>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/30 flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <Truck size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase">Shipment NJ-889</p>
                  <p className="text-white font-bold text-sm">En Route to India</p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/30 flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl text-white">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase">Global Logistics</p>
                  <p className="text-white font-bold text-sm">Connecting 50+ States</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Floating Card */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute left-0 lg:left-10 bottom-10 lg:bottom-20 w-64 bg-slate-900/70 backdrop-blur-md border border-primary/30 p-6 rounded-3xl shadow-2xl z-10"
          >
             <div className="bg-gradient-to-br from-primary to-primary-hover rounded-full w-12 h-12 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
               <ShieldCheck size={24} />
             </div>
             <h4 className="text-white font-bold text-lg mb-1">Fully Secured</h4>
             <p className="text-slate-300 text-sm leading-relaxed">100% insured and protected high-value cargo transit.</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
