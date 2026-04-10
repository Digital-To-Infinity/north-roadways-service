import AboutHero from '../components/about/AboutHero';
import AboutInfo from '../components/about/AboutInfo';
import AboutSpecialization from '../components/about/AboutSpecialization';
import AboutTeam from '../components/about/AboutTeam';
import DirectorMessage from '../components/about/DirectorMessage';
import CTA from '../components/common/CTA';

const About = () => {
    return (
        <div className="w-full relative flex flex-col min-h-screen">
            <AboutHero />
            <AboutTeam />
            <DirectorMessage />
            <AboutInfo />
            <AboutSpecialization />
            <CTA />
        </div>
    );
};

export default About;