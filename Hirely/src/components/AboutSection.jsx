import { BookOpen, Users, Award, CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <div id="about" className="relative mt-20 sm:mt-28 md:mt-32 mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header Section */}
      <div className="text-center mb-14 sm:mb-18 lg:mb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight font-bold text-white">
          About CFTCR
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed px-2">
          A leading training company based in Woolwich, Southeast London, specialising in professional development and NCFE CACHE accredited qualifications.
        </p>
      </div>

      {/* Main Story Section */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start mb-20 sm:mb-32 lg:mb-40 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-10 leading-tight">What We Do</h3>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              We specialise in training individual or group of people in further education, Child Care, Health & Social Care, Special needs support workers, Learning Support Worker and Health Support Worker.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              We also prepare learners for higher education.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Our learners come from a variety of nurseries, play schools, residential homes, childminders, children centres, nursing homes, day care centres, school clubs, community centres, special needs schools, colleges and many more.
            </p>
            <div className="pt-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3">New Courses 2025</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Teacher training for oversea teachers, Preparing to Teach in the United Kingdom</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Early Years training for overseas early years educators, Preparing to Work in an Early Year's Sector in the United Kingdom</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>NCFE CACHE Level 3 Award in Preparing to Work in Home Based Childcare</span>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3">New 2025/2026 - Consultancy Service</h4>
              <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-3">
                Early Years Consultancy services for early years providers; childminders, nannies and babysitters.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Support the process of becoming a childminder or babysitter</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Quality assure in different early year sectors, including nurseries and childminders</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Deliver continuous professional development courses to early years sectors and supply early years practitioners</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Support nurseries with self-assessment</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-neutral-400">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Nanny Agency that provides trained and qualified nannies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Stats Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 sm:p-8 lg:p-10 h-fit sticky top-32">
          <h4 className="text-base sm:text-lg font-bold text-white mb-8 leading-tight">By The Numbers</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
              <span className="text-neutral-400 text-sm sm:text-base">Academic Year</span>
              <span className="text-lg sm:text-2xl font-bold text-white">2025/26</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
              <span className="text-neutral-400 text-sm sm:text-base">Courses Available</span>
              <span className="text-lg sm:text-2xl font-bold text-white">50+</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
              <span className="text-neutral-400 text-sm sm:text-base">NCFE CACHE</span>
              <span className="text-sm font-semibold text-green-400">Accredited</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-400 text-sm sm:text-base">CPD Certified</span>
              <span className="text-sm font-semibold text-green-400">Yes</span>
            </div>
          </div>
        </div>
      </div>

      {/* About the Centre Section */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-10 leading-tight">About Us</h3>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Centre for Training uses e- portfolio laser: <a href="https://cftconsult.laserlearning.co.uk" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">https://cftconsult.laserlearning.co.uk</a> and CPD online platform for courses.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              January 2026 classes will deliver through blended learning via virtual learning and face to face. In order for this to take place the centre has put in place measures to enable learners to stay safe and confident in a conducive learning environment. The Centre provides work placement to enable learners to complete their course.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              This Academic year 2025/2026, the Centre is offering a range of new courses working with freelance trainers, tutors and lectures that are qualified and specialise in the area they teach.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Centre for Training works with partners that provides; Advance learners loan and funding for level 2,3 ,4 and 5.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-green-400">
              Centre for Training courses are NCFE CACHE accredited and CPD certified courses.
            </p>
          </div>
        </div>

        {/* Key Facilities */}
        <div className="space-y-4">
          <h4 className="text-lg sm:text-xl font-bold text-white mb-6">Key Facilities & Support</h4>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-5 hover:border-neutral-700 transition-colors">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-semibold text-white text-sm sm:text-base mb-1">Work Placements</p>
                <p className="text-xs sm:text-sm text-neutral-400">Hands-on experience to complete qualifications</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-5 hover:border-neutral-700 transition-colors">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-semibold text-white text-sm sm:text-base mb-1">Safe Learning Environment</p>
                <p className="text-xs sm:text-sm text-neutral-400">Measures in place for learner safety and confidence</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-5 hover:border-neutral-700 transition-colors">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-semibold text-white text-sm sm:text-base mb-1">NCFE CACHE & CPD Certified</p>
                <p className="text-xs sm:text-sm text-neutral-400">Nationally recognised accredited qualifications</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 sm:p-5 hover:border-neutral-700 transition-colors">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-semibold text-white text-sm sm:text-base mb-1">Higher Education Pathways</p>
                <p className="text-xs sm:text-sm text-neutral-400">Preparation and progression to further education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;