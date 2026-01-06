import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import ConsultancyServices from "./components/ConsultancyServices";
import CPDCalendar from "./components/CPDCalendar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Gallery />
      <CoursesSection />
      <ConsultancyServices />
      <CPDCalendar />
      <Footer />
    </>
  );
};

export default App;
