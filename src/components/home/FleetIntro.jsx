import { motion } from 'framer-motion';

const FleetIntro = () => {
  return (
    <section className="relative py-16 max-[426px]:py-8 bg-[#ffffff] flex items-center justify-center overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -60, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-orange-400/5 rounded-full blur-[140px]"
        />

        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Large Decorative Text (Subtle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <span className="text-[15vw] font-black text-slate-500/5 select-none tracking-tighter uppercase whitespace-nowrap">
            NORTH ROADWAYS
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex flex-col items-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="h-1.5 bg-gradient-to-r from-primary to-orange-500 rounded-full"
            />
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-bounce" />
          </div>

          <h2 className="text-[86px] max-[769px]:text-[80px] max-[426px]:text-[42px] max-[376px]:text-[37px] font-black text-heading leading-[0.95] tracking-tighter">
            Different types of <br />
            <span className="text-[86px] max-[769px]:text-[80px] max-[426px]:text-[50px] max-[376px]:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_auto] animate-gradient-x drop-shadow-sm">
              goods vehicles owned by us.
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetIntro;
