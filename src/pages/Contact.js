import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Banner from '../components/Banner';

const contactPage = () => {
      
    return (
        <>
        <div className="pageContent">
        <Hero hero="ContactHero">
        <div className="banner-box">
        <Banner title="Contact us" subtitle="we are here for you if you need anything.">
        <Contact />
        </Banner>
        </div>
    </Hero>
    </div>
          
        </>
    );
};

export default contactPage;