import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import CTA from '../components/common/CTA';

const Services = () => {
  return (
    <div className="w-full relative flex flex-col min-h-screen">
      <ServicesHero />
      <ServicesList />
      <CTA />
    </div>
  );
};

export default Services;