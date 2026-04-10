import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white shadow-slate-200/50 h-[500px] group"
        >
          {/* Map Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.336142717013!2d73.10408542498263!3d19.029168053272652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzQ1LjAiTiA3M8KwMDYnMjMuMyJF!5e0!3m2!1sen!2sin!4v1712741162788!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 filter grayscale hover:grayscale-0 transition-all duration-[2000ms]"
          ></iframe>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white -z-10"></div>
    </section>
  );
};

export default ContactMap;
