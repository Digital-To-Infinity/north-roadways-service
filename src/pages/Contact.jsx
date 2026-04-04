import { motion } from 'framer-motion';
import ContactHero from '../components/contact/ContactHero';
import ContactContent from '../components/contact/ContactContent';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
        >
            <ContactHero />
            <ContactContent />
            <ContactMap />
        </motion.main>
    );
}

export default Contact;