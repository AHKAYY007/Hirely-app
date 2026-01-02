import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import ConsultancyServices from "./components/ConsultancyServices";
import CPDCalendar from "./components/CPDCalendar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ConsultancyServices />
      <CPDCalendar />
      <Footer />
    </>
  );
};

export default App;
