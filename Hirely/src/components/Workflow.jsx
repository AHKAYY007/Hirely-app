import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/professionals-in-contrast-stockcake.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 sm:mt-28 md:mt-32 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-14 sm:mb-18 lg:mb-24 tracking-wide leading-tight font-bold text-white">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
          business workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <img 
            src={codeImg} 
            alt="Business professionals" 
            className="w-full h-auto rounded-lg border border-neutral-800"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-5">
              <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full flex-shrink-0 flex flex-none">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="mt-0 mb-2 sm:mb-3 text-base sm:text-lg font-semibold leading-tight">{item.title}</h5>
                <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
