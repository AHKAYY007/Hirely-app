import { courseCategories } from "../constants";

const CoursesSection = () => {
  return (
    <div id="courses" className="relative mt-20 sm:mt-28 md:mt-32 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-18 lg:mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight font-bold text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
            Courses 2025/2026
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed px-2">
          NCFE CACHE accredited and CPD certified courses across multiple disciplines
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
        {courseCategories.map((category, idx) => (
          <div key={idx} className="border-l-4 border-green-500 pl-5 sm:pl-7 md:pl-10">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 leading-tight">
              {category.name}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {category.courses.map((course, courseIdx) => (
                <li key={courseIdx} className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {course.title}
                    </p>
                    <span className="text-xs sm:text-sm text-green-400 font-mono flex-shrink-0 whitespace-nowrap">
                      {course.code}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
