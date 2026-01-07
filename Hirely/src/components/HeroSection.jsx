import bgImage from '/src/assets/IMG-20251231-WA0055.jpg';

const HeroSection = () => {

  return (
    <div 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        opacity: 0.69,
        
      }}
    >
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-wide max-w-5xl leading-tight text-white">
        <b className="block mb-3 sm:mb-4 md:mb-5">CFTCR - Platform</b>
        <span className="bg-gradient-to-r from-green-900 to-teal-900 text-transparent bg-clip-text">
          for training & consultancy
        </span>
      </h1>

      {/* sub writings
      <div className="mt-8 sm:mt-10 md:mt-14 lg:mt-16 text-base sm:text-lg md:text-xl lg:text-xl text-center text-neutral-900 max-w-3xl space-y-5 sm:space-y-6 md:space-y-7 font-light tracking-wide">
        <p className="leading-relaxed px-2">
          Connect with professional training and consultancy services. Gain industry-recognised qualifications with hands-on support.
        </p>

        <p className="leading-relaxed px-2">
          Get trained by experts in early years, health care, education and professional development.
        </p>
      </div> */}

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full sm:w-auto px-4 sm:px-0">
        <a
          href="https://cftconsult.laserlearning.co.uk"
          className="bg-gradient-to-r from-green-600 to-teal-800 py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:from-green-600 hover:to-teal-900 text-white font-semibold text-center text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 min-h-10"
        >
          Get Started
        </a>
        <a
          href="#about"
          className="py-3 sm:py-4 px-6 sm:px-8 rounded-lg border border-green-800 hover:border-teal-900 hover:bg-neutral-800/50 text-center font-semibold text-white text-sm sm:text-base transition-all duration-300 min-h-10"
        >
          Learn More
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 sm:mt-20 md:mt-28 hidden sm:block">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-400 mx-auto animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;