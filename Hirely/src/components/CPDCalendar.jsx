import { cpdCalendarItems } from "../constants";
import { Clock, Calendar } from "lucide-react";

const CPDCalendar = () => {
  return (
    <div className="relative mt-20 sm:mt-28 md:mt-32 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-18 lg:mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6 sm:mb-8 md:mb-10 leading-tight font-bold text-white">
          CPD Calendar{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
            2026
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-neutral-400 max-w-3xl mx-auto px-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-400" />
            <span>Every second Saturday of the month</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-400" />
            <span>10:00 AM – 12:00 PM</span>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cpdCalendarItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-green-500/10 to-teal-800/10 border border-green-500/30 rounded-lg p-4 sm:p-6 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
          >
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Monthly Sessions
            </p>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-14 sm:mt-18 lg:mt-24 max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 sm:p-8 md:p-10">
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          <span className="font-semibold text-white">Starting January 2026:</span> Participate in our comprehensive CPD programme delivered via blended learning. All courses are Ofsted recognised and CPD certified. Sessions available every second Saturday of the month from 10:00 AM to 12:00 PM.
        </p>
      </div>
    </div>
  );
};

export default CPDCalendar;
