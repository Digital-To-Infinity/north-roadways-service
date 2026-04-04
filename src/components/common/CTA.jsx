import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-primary/20"
        >
          {/* Decorative SVG Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 space-y-4 text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl font-black text-white leading-tight">
              Ready to Optimize Your <br className="hidden md:block" />
              National <span className="opacity-80">Logistics Flow?</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-bold max-w-xl">
              Get a custom, zero-cost quote for your transportation requirements today. Our experts are standing by.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link 
              to="/contact"
              className="bg-white text-primary hover:bg-slate-100 px-10 max-[426px]:px-8 py-5 rounded-full font-black text-lg uppercase tracking-widest transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1 flex items-center gap-3 group"
            >
              Get a Free Quote 
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
               href="tel:9331594304" 
               className="flex items-center gap-3 text-white border-2 border-white/30 hover:border-white px-8 py-[18px] rounded-full font-black text-lg uppercase tracking-widest transition-all"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>

          {/* Animated Background Orbs */}
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[80px]"
          />
          <motion.div 
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/5 rounded-full blur-[60px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
