import { consultancyServices } from "../constants";
import { CheckCircle2 } from "lucide-react";

const ConsultancyServices = () => {
  return (
    <div className="relative mt-20 sm:mt-28 md:mt-32 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-18 lg:mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight font-bold text-white">
          Consultancy{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed px-2">
          NEW for Academic Year 2025/2026 — Comprehensive Early Years Consultancy Services
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto space-y-5 sm:space-y-7">
        {consultancyServices.map((service, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 sm:gap-4 bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 sm:p-6 hover:border-green-500/50 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Target Markets */}
      <div className="mt-14 sm:mt-18 lg:mt-24 max-w-5xl mx-auto">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Services for:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {["Childminders", "Nannies", "Babysitters", "Nurseries", "Early Years Providers"].map((target, idx) => (
            <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4">
              <p className="text-sm sm:text-base text-neutral-300 font-medium">{target}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultancyServices;
