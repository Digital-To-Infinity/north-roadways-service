import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingActionButtons = () => {
    const actions = [
        {
            id: 'whatsapp',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            color: '#25D366',
            label: 'WhatsApp',
            link: 'https://wa.me//+918583994218?text=Hello,%20I%20have%20an%20inquiry%20regarding%20North%20Roadways%20Service.',
            hover: 'bg-[#25D366]'
        },
        {
            id: 'call',
            icon: <Phone size={24} />,
            color: '#FF7518',
            label: 'Call Us',
            link: 'tel:+919331594304',
            hover: 'bg-[#FF7518]'
        },
        {
            id: 'email',
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M2.222 5.092C2.062 5.253 1.996 5.485 1.996 5.728V18.272C1.996 18.515 2.062 18.747 2.222 18.908L8.648 12.482L2.222 5.092Z" />
                    <path d="M21.778 5.092L15.352 12.482L21.778 18.908C21.938 18.747 22.004 18.515 22.004 18.272V5.728C22.004 5.485 21.938 5.253 21.778 5.092Z" />
                    <path d="M11.536 12.482L3.551 5.092C3.711 5.031 3.843 5 4.004 5H19.996C20.157 5 20.289 5.031 20.449 5.092L12.464 12.482C12.21 12.715 11.79 12.715 11.536 12.482Z" />
                    <path d="M12 14.526L10.36 12.98L3.551 19.789C3.711 19.85 3.843 19.881 4.004 19.881H19.996C20.157 19.881 20.289 19.85 20.449 19.789L13.64 12.98L12 14.526Z" />
                </svg>
            ),
            color: '#EA4335',
            label: 'Email Us',
            link: 'mailto:northroadwaysservice@gmail.com',
            hover: 'bg-[#EA4335]'
        }
    ];

    return (
        <div className="fixed bottom-6 max-[426px]:bottom-4 right-6 max-[426px]:right-4 z-[9999] flex flex-col gap-4">
            <AnimatePresence>
                {actions.map((action, index) => (
                    <motion.a
                        key={action.id}
                        href={action.link}
                        target={action.id === 'whatsapp' ? '_blank' : undefined}
                        rel={action.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, x: 50, scale: 0.5 }}
                        animate={{ 
                            opacity: 1, 
                            x: 0, 
                            scale: 1,
                            transition: { delay: index * 0.1, duration: 0.5, type: 'spring' }
                        }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-14 max-[426px]:w-12 h-14 max-[426px]:h-12 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer group relative overflow-hidden transition-all duration-300`}
                        style={{ backgroundColor: action.color }}
                        title={action.label}
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{ backgroundColor: action.color }} />
                        
                        <span className="relative z-10">
                            {action.icon}
                        </span>

                        {/* Label tooltip */}
                        <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
                            {action.label}
                        </span>
                    </motion.a>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActionButtons;
