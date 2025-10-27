import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/professionals-in-contrast-stockcake.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-24 mb-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-12 lg:mb-16 tracking-wide px-4">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
          business workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-4 sm:p-6 lg:p-8 w-full lg:w-1/2">
          <img 
            src={codeImg} 
            alt="Business professionals" 
            className="w-full h-auto rounded-xl shadow-lg shadow-teal-700/20 border border-neutral-800"
          />
        </div>
        <div className="pt-8 lg:pt-12 px-4 sm:px-6 lg:px-8 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8 lg:mb-10">
              <div className="text-green-400 mx-4 lg:mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full flex-shrink-0">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-3 text-lg lg:text-xl font-semibold">{item.title}</h5>
                <p className="text-sm lg:text-base text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
