import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
import OurServices from "./components/OurServices";
import OurWorks from "./components/OurWorks";
import OurTeams from "./components/OurTeams";
import ClientTestimonials from "./components/ClientTestimonials";
import PricingAndPlans from "./components/PricingAndPlans";
import LatestFromBlog from "./components/LatestFromBlog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="react-app">
      <header>
        <NavBar />
      </header>
      <main>
        <HeroCarousel />
        <About />
        <OurServices />
        <OurWorks />
        <OurTeams />
        <ClientTestimonials />
        <PricingAndPlans />
        <LatestFromBlog />
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
