import { Globe, Mail, MapPin, Phone } from 'lucide-react'

// Custom SVG Social Icons (Since Lucide v1.x removed brand icons)
const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
)
const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
)
const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)
const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { 
      title: 'Company', 
      items: [
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' }
      ] 
    },
    { 
      title: 'Services', 
      items: [
        { name: 'Pickup', link: '/services#pickup' },
        { name: 'LCV', link: '/services#lcv' },
        { name: 'Full Truck Load', link: '/services#ftl' },
        { name: 'ODC', link: '/services#odc' },
        { name: 'Container 20ft', link: '/services#container-20ft' },
        { name: 'Container 32ft XL', link: '/services#container-32ft-xl' },
        { name: 'Container Multi XL', link: '/services#container-multi-xl' },
        { name: 'Trailer', link: '/services#trailer' }
      ] 
    }
  ]

  const socialLinks = [
    { icon: <FacebookIcon size={20} />, href: '#' },
    { icon: <TwitterIcon size={20} />, href: '#' },
    { icon: <InstagramIcon size={20} />, href: '#' },
    { icon: <LinkedinIcon size={20} />, href: '#' }
  ]

  return (
    <footer className="bg-primary text-white py-12 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-white p-2 rounded-lg transform transition-all group-hover:scale-105 group-hover:rotate-6">
                <Globe size={24} className="text-primary font-bold" />
              </div>
              <span className="text-2xl font-black font-poppins tracking-tighter text-white">
                NORTH<span className="text-white/80 ml-1">ROADWAYS</span>
              </span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-xs font-medium">
              Reliable transportation and logistics solutions tailored to your business needs across the region since 1998.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="bg-white/10 hover:bg-white text-white hover:text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-90"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6 lg:pl-10">
              <h4 className="text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all font-medium opacity-90 hover:opacity-100"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="space-y-6">
              <h4 className="text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-white">
                Contact
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-white/90 group cursor-pointer hover:text-white transition-colors">
                  <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-lg transition-colors mt-1">
                    <MapPin size={20} />
                  </div>
                  <span className="font-medium">Bima Complex, Office No.- D-3091, Kalamboli, Navi Mumbai</span>
                </li>
                <li className="flex items-center gap-4 text-white/90 group cursor-pointer hover:text-white transition-colors">
                  <a href="tel:+919331594304" className="flex items-center gap-4 w-full">
                    <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-lg transition-colors">
                      <Phone size={20} />
                    </div>
                    <span className="font-medium">+91 9331594304</span>
                  </a>
                </li>
                <li className="flex items-center gap-4 text-white/90 group cursor-pointer hover:text-white transition-colors">
                  <a href="mailto:northroadwaysservice@gmail.com" className="flex items-center gap-4 w-full">
                    <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-lg transition-colors">
                      <Mail size={20} />
                    </div>
                    <span className="font-medium">northroadwaysservice@gmail.com</span>
                  </a>
                </li>
              </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/20 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/70 text-base font-medium">
            © {currentYear} North Roadways Service. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center gap-6 text-base font-semibold text-white/70">
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
