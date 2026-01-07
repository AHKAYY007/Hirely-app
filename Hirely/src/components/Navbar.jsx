import { Menu, X } from "lucide-react";
import { useState } from "react";
import download from "../assets/favicon.png";
import { navItems } from "../constants";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeMobileNav = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 md:py-5 backdrop-blur-lg border-b border-neutral-700/80 bg-black/50">
      <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto relative text-xs sm:text-sm md:text-base">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center flex-shrink-0 min-h-10">
            <img className="h-8 w-8 sm:h-10 sm:w-10 mr-2" src={download} alt="Logo" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">CFTCR</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-10 xl:ml-14 space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative group text-neutral-300 hover:text-teal-400 py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex justify-center items-center">
            <a
              href="https://cftconsult.laserlearning.co.uk"
              className="bg-gradient-to-r from-green-500 to-teal-800 py-2 md:py-3 px-4 md:px-6 rounded-lg hover:from-green-600 hover:to-teal-900 font-semibold text-white"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="p-2 sm:p-3 rounded-lg hover:bg-neutral-800 transition-colors duration-300 min-h-10 min-w-10"
            >
              {mobileDrawerOpen ? (
                <X className="w-6 h-6 text-teal-400" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-14 sm:top-16 z-20 bg-gradient-to-br from-neutral-900 to-black w-full p-4 sm:p-6 md:p-8 flex flex-col lg:hidden border-b border-neutral-700/80 animate-slide-down max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-64px)] overflow-y-auto">
            <ul className="space-y-3 sm:space-y-4 md:space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-neutral-300 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base md:text-lg font-medium py-2 px-2 sm:px-4 rounded hover:bg-neutral-800/50"
                    onClick={closeMobileNav}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-neutral-700/50">
              <a
                href="#services"
                className="block w-full text-center bg-gradient-to-r from-green-500 to-teal-800 py-3 sm:py-4 px-4 rounded-lg hover:from-green-600 hover:to-teal-900 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 font-semibold text-white text-sm sm:text-base"
                onClick={closeMobileNav}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;