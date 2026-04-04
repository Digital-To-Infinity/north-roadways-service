import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import warehouseImg from '../../assets/images/about_warehouse.png';
import trucksImg from '../../assets/images/about_trucks.png';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-16 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decorative Watermark */}
      <h1 className="absolute -top-10 left-0 right-0 text-[10vw] font-black text-slate-200/50 text-center select-none z-0 pointer-events-none uppercase tracking-widest whitespace-nowrap overflow-hidden">
        North Roadways
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Image Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[550px] lg:h-[650px] w-full"
        >
          {/* Back Image (Warehouse) */}
          <div className="absolute top-0 left-0 w-[80%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-8 border-white z-10 hover:z-30 transition-all duration-700 hover:-translate-y-3 group cursor-pointer hover:shadow-[0_30px_60px_rgba(255,117,24,0.15)]">
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 duration-500 mix-blend-overlay"></div>
            <img src={warehouseImg} alt="Logistics Warehouse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>

          {/* Front Image (Trucks) */}
          <div className="absolute bottom-5 right-0 w-[65%] h-[60%] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-8 border-white z-20 hover:z-30 transition-all duration-700 hover:-translate-y-3 group cursor-pointer hover:shadow-[0_30px_60px_rgba(255,117,24,0.15)]">
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 duration-500 mix-blend-overlay"></div>
            <img src={trucksImg} alt="Fleet of Trucks" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>
          
          {/* Decorative Dotted Pattern */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(circle,#FF7518_2.5px,transparent_3px)] bg-[length:18px_18px] opacity-20 -z-10"></div>
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/15 rounded-full blur-[100px] -z-10"></div>

          {/* Floating Stat Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-16 left-[-10px] md:left-[-30px] bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-3xl shadow-2xl border border-white z-30 flex items-center gap-5"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary relative overflow-hidden">
               <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,117,24,0.3)_360deg)]"
               />
               <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                 <Award size={28} className="text-primary" />
               </div>
            </div>
            <div>
              <p className="text-4xl font-black text-heading">25<span className="text-primary">+</span></p>
              <p className="text-sm font-bold text-paragraph uppercase tracking-widest mt-1">Years Focus</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-primary font-extrabold tracking-[0.25em] text-sm uppercase flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary rounded-full relative overflow-hidden">
                <motion.span 
                  animate={{ x: ["-100%", "100%"] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-0 bg-white/50 w-1/2"
                />
              </span>
              Who We Are
            </h4>
            <h2 className="text-5xl lg:text-5xl xl:text-6xl max-[426px]:text-4xl font-black text-heading leading-[1.15] tracking-tight">
              Your Trusted Partner in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9844]">Logistics Solutions.</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-paragraph text-lg leading-relaxed border-l-4 border-primary/20 pl-6 lg:pl-8">
            <p className="font-semibold text-slate-700 text-xl max-[426px]:text-lg">
              Based in India, North Roadways Service is a certified organization and a leading provider of comprehensive transportation logistics.
            </p>
            <p>
              Our close relationships with reliable network partners enable us to deliver exceptional solutions. We ensure the safe transit of goods at market-leading efficiency, continuing to build our reputation for unmatched reliability and transparency.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link 
              to="/about"
              className="relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-hover text-white px-10 py-4 rounded-full font-black text-lg uppercase tracking-wide transition-all duration-300 hover:bg-primary-hover hover:-translate-y-1 group cursor-pointer inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover More
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
