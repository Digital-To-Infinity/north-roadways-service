import './App.css'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="App min-h-screen flex flex-col font-poppins selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      {/* Main Content Area */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center space-y-12 text-center"
      >
        <div className="space-y-6">
          <h1 className='text-5xl md:text-7xl font-black tracking-tight text-heading'>
            North Roadways <span className="text-primary italic">Service</span>
          </h1>
          <p className='max-w-2xl mx-auto text-lg md:text-xl text-paragraph leading-relaxed'>
            Efficiency in motion. We provide reliable transportation and integrated logistics solutions tailored to your unique business requirements.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className='bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer'>
            Get Started
          </button>
          <button className='border-2 border-primary text-primary hover:bg-primary/5 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer'>
            Our Services
          </button>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* Simple placeholder for content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full py-10">
          {[
            { title: 'Secure Transport', desc: 'Advanced tracking and secure handling for every cargo.' },
            { title: 'Global Logistics', desc: 'Connecting your business with worldwide distribution networks.' },
            { title: '24/7 Support', desc: 'Our dedicated team is always available for your shipping needs.' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-left">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-paragraph leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}

export default App
