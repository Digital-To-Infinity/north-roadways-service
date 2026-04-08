import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ]

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const currentPath = location.pathname
    if (currentPath === '/') {
      setActiveLink('Home')
    } else if (currentPath === '/about') {
      setActiveLink('About')
    } else if (currentPath === '/services') {
      setActiveLink('Services')
    } else if (currentPath === '/contact') {
      setActiveLink('Contact')
    }
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-lg py-3' : 'py-3'
        }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Left: Logo and Company Name */}
          <Link to="/" onClick={() => setActiveLink('Home')} className="flex-shrink-0 flex items-center gap-1 group cursor-pointer">
            <div className="group-hover:scale-110">
              <img src={Logo} alt="Logo" className='w-8 max-[426px]:w-6' />
            </div>
            <span className="text-lg md:text-xl font-black text-heading font-poppins tracking-tight">
              NORTH<span className="text-primary ml-1">ROADWAYS</span> SERVICES
            </span>
          </Link>

          {/* Center: NavLinks (Desktop) */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-heading hover:text-primary font-semibold text-lg tracking-wide transition-all relative 
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all
                  ${activeLink === link.name ? 'after:w-full text-primary' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" onClick={() => setActiveLink('Contact')} className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-md hover:shadow-primary/30 transition-all active:scale-95 cursor-pointer">
              <Phone size={18} />
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-heading hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-3 text-lg font-semibold rounded-lg transition-all 
                    ${activeLink === link.name ? 'text-primary bg-orange-50' : 'text-paragraph hover:text-primary hover:bg-orange-50'}
                  `}
                  onClick={() => {
                    setActiveLink(link.name)
                    setIsOpen(false)
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link 
                  to="/contact" 
                  onClick={() => {
                    setActiveLink('Contact')
                    setIsOpen(false)
                  }}
                  className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  <Phone size={20} />
                  CONTACT US
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
