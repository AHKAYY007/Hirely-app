import { Target, TrendingUp, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="relative mt-24 mb-28 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide px-4 mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
            HIRELY
          </span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto px-4 leading-relaxed">
          A leading training company based in{" "}
          <span className="font-bold text-teal-400">Woolwich, Southeast London</span>.
        </p>
      </div>

      {/* Main Story Section */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 lg:mb-32">
        <div className="px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-10">Our Training Programs</h3>
          <div className="space-y-5 lg:space-y-6">
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              We specialise in training individuals or groups of people in{" "}
              <span className="font-semibold text-teal-300">Further Education</span>,{" "}
              <span className="font-semibold text-teal-300">Child Care</span>,{" "}
              <span className="font-semibold text-teal-300">Health & Social Care</span>,{" "}
              <span className="font-semibold text-teal-300">Special Needs Support</span>,{" "}
              <span className="font-semibold text-teal-300">Learning Support</span>, and{" "}
              <span className="font-semibold text-teal-300">Health Support Work</span>.
            </p>
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              Our learners come from a variety of nurseries, play schools, residential homes, childminders, children centres, nursing homes, day care centres, school clubs, community centres, special needs schools, colleges, and many more.
            </p>
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              In the year <span className="font-bold text-green-400">2023</span>, we added specialised courses to our portfolio:
            </p>
            <ul className="space-y-2 text-base lg:text-lg text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="font-semibold">Teacher Training for Overseas Teachers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="font-semibold">Preparing to Teach in the United Kingdom</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span className="font-semibold">Early Years Training for Overseas Practitioners</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Stats Card */}
        <div className="bg-gradient-to-br from-green-500/10 to-teal-800/10 p-8 lg:p-12 rounded-xl border border-teal-700/30 shadow-lg mx-4 sm:mx-6 lg:mx-8">
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-3">500+</div>
              <div className="text-sm lg:text-base text-neutral-400">Companies Served</div>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-5xl font-bold text-teal-400 mb-3">50K+</div>
              <div className="text-sm lg:text-base text-neutral-400">Talent Pool</div>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-5xl font-bold text-green-400 mb-3">98%</div>
              <div className="text-sm lg:text-base text-neutral-400">Success Rate</div>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-5xl font-bold text-teal-400 mb-3">48hr</div>
              <div className="text-sm lg:text-base text-neutral-400">Avg. Match Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultancy Services Section */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 lg:mb-32">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold">Consultancy Services</h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
              2023/2024
            </span>
          </div>
          <div className="space-y-5 lg:space-y-6">
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              Early Years Consultancy services for early years providers; <span className="font-semibold text-teal-300">childminders</span>, <span className="font-semibold text-teal-300">nannies</span>, and <span className="font-semibold text-teal-300">babysitters</span>.
            </p>
            <div>
              <p className="text-lg lg:text-xl font-bold text-teal-400 mb-3">What We Do:</p>
              <ul className="space-y-2 text-base lg:text-lg text-neutral-400">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>Support the process of becoming a childminder or babysitter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>Quality assure in different early year sectors, including nurseries and childminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>Deliver continuous professional development courses to early years sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>Supply early years practitioners on a long term or short term, ranging from managers, room leaders, and early years practitioners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="bg-gradient-to-br from-teal-500/10 to-green-800/10 p-8 lg:p-12 rounded-xl border border-green-700/30 shadow-lg mx-4 sm:mx-6 lg:mx-8">
          <h4 className="text-xl lg:text-2xl font-bold text-green-400 mb-6">Support nurseries with self assesment</h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-teal-500/20 p-2 rounded-full mr-3 mt-1">
                <span className="text-teal-400 text-xl">📚</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-300 mb-1">Learn Online</p>
                <p className="text-sm text-neutral-400">We offer online and offline training. Reach us to get free course consultation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                <span className="text-green-400 text-xl">⚙</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-300 mb-1">Exam Portal</p>
                <p className="text-sm text-neutral-400">Online examinations and progress tracking.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-500/20 p-2 rounded-full mr-3 mt-1">
                <span className="text-teal-400 text-xl">⭐</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-300 mb-1">One-on-One Training</p>
                <p className="text-sm text-neutral-400">Our training is tailored to suit every student uniqueness and timing.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                <span className="text-green-400 text-xl">👥</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-300 mb-1">Rich Curriculum</p>
                <p className="text-sm text-neutral-400">Assured professionalism after trained courses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;