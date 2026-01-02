import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-12 sm:mt-20 border-b border-neutral-800 min-h-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 sm:mt-10 lg:mt-20 tracking-wide px-2 sm:px-4 leading-snug">
          Our Core {" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
             Services
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-8 sm:mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex p-4 sm:p-6 gap-3 sm:gap-4">
              <div className="flex h-10 w-10 bg-neutral-900 text-teal-700 justify-center items-center rounded-full flex-shrink-0">
                {feature.icon}
              </div>
              <div className="min-w-0">
                <h5 className="mt-0 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl font-semibold">{feature.text}</h5>
                <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
