import Hero from '../../components/home/Hero';
import AboutUs from '../../components/home/AboutUs';
import Partners from '../../components/home/Partners';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import VehicleTypes from '../../components/home/VehicleTypes';
import CTA from '../../components/common/CTA';

const Home = () => {
  return (
    <div className="w-full relative flex flex-col min-h-screen">
      <Hero />
      <Partners />
      <AboutUs />
      <WhyChooseUs />
      <VehicleTypes />
      <CTA />
    </div>
  );
};

export default Home;
