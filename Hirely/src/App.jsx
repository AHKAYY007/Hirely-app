import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import StudentSection from "./components/StudentSection"; 

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <FeatureSection />
          <Workflow />
          <StudentSection />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
