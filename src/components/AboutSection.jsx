import { Target, TrendingUp, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="relative mt-24 mb-28 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-20 lg:mb-28">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide px-4">
          About{" "}
          <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
            HIRELY
          </span>
        </h2>
        <p className="mt-8 text-base sm:text-lg text-neutral-400 max-w-3xl mx-auto px-4 leading-relaxed">
          Connecting exceptional talent with forward-thinking companies. We revolutionize the way businesses hire and grow.
        </p>
      </div>

      {/* Main Story Section */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 lg:mb-32">
        <div className="px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-10">Our Mission</h3>
          <div className="space-y-5 lg:space-y-6">
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              At HIRELY, we believe that every business deserves access to top-tier talent and strategic guidance. Our mission is to bridge the gap between ambitious companies and exceptional professionals.
            </p>
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              We combine cutting-edge technology with human expertise to deliver hiring solutions that drive real business results. Whether you're scaling a startup or expanding an enterprise, we're here to accelerate your success.
            </p>
            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed">
              Our platform streamlines the recruitment process while our consultancy services provide the strategic insights you need to build world-class teams.
            </p>
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

      {/* Values Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        {/* <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 lg:mb-16">Our Core Values</h3> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-neutral-900 p-8 lg:p-10 rounded-xl border border-neutral-800 hover:border-teal-700 transition-all shadow-md hover:shadow-lg hover:shadow-teal-700/10">
            <div className="flex items-center mb-6">
              <div className="bg-teal-500/20 p-3 rounded-full mr-4">
                <Target className="text-teal-400" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Precision</h4>
            </div>
            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
              We use data-driven insights to match the right talent with the right opportunities every time.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 lg:p-10 rounded-xl border border-neutral-800 hover:border-teal-700 transition-all shadow-md hover:shadow-lg hover:shadow-teal-700/10">
            <div className="flex items-center mb-6">
              <div className="bg-green-500/20 p-3 rounded-full mr-4">
                <TrendingUp className="text-green-400" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Growth</h4>
            </div>
            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
              We're committed to your long-term success and continuously innovate to help you scale.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 lg:p-10 rounded-xl border border-neutral-800 hover:border-teal-700 transition-all shadow-md hover:shadow-lg hover:shadow-teal-700/10">
            <div className="flex items-center mb-6">
              <div className="bg-teal-500/20 p-3 rounded-full mr-4">
                <Users className="text-teal-400" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Partnership</h4>
            </div>
            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
              We build lasting relationships with both employers and candidates, ensuring mutual success.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 lg:p-10 rounded-xl border border-neutral-800 hover:border-teal-700 transition-all shadow-md hover:shadow-lg hover:shadow-teal-700/10">
            <div className="flex items-center mb-6">
              <div className="bg-green-500/20 p-3 rounded-full mr-4">
                <Award className="text-green-400" size={28} />
              </div>
              <h4 className="text-xl font-semibold">Excellence</h4>
            </div>
            <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
              We maintain the highest standards in every interaction, from initial contact to successful placement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;