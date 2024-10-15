
import Hero from '../components/others/Hero';
import NavBar from '../components/nav/NavBar';
import Footer from '../components/nav/Footer';
import AboutUs from '../components/others/AboutUs';
import Testemonial from '../components/others/Testemonial';
import ContactUI from '../components/others/ContactUI';
const LandingPage = () => {


    return (
        <div className="font-sans">
            {/* Hero Section */}
            <Hero />
            <NavBar />
            <AboutUs/>

            
            {/* Payment Options Section */}
            <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="mt-2 text-lg text-gray-700 max-w-xl mx-auto">
                        We integrate with <span className="font-bold text-purple-600">Stripe</span> to provide secure, easy, and free payments.
                        Book appointments and consult with doctors without any worries.
                    </p>
                </div>
            </section>

            <Testemonial/>
            <ContactUI/>
            <Footer/>
        </div>
    );
};

export default LandingPage;
