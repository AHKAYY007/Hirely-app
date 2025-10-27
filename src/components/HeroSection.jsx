import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
              <b>HIRELY - Platform</b>
        <span className="bg-gradient-to-r from-green-500 to-teal-700 text-transparent bg-clip-text">
          {" "}
          for hiring & consultancy
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Connect your business with top-tier talent and expert consultants. Streamline your hiring process and scale your operations with confidence. Get started today and transform your workforce!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-teal-800 py-3 px-4 mx-3 rounded-md hover:from-green-600 hover:to-teal-900 transition-all"
        >
          Get Started
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-neutral-800 transition-all">
          Learn More
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-teal-700 shadow-lg shadow-green-400/20 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-teal-700 shadow-lg shadow-green-400/20 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;