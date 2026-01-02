import download from "../assets/favicon.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "info@hirely.co.uk";
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-20 sm:mt-28 md:mt-32 bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 sm:py-18 md:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 lg:gap-16 mb-14 sm:mb-18 md:mb-24 pb-14 sm:pb-18 md:pb-24 border-b border-neutral-800">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img className="h-8 w-8" src={download} alt="Logo" />
              <span className="text-xl font-bold text-white">CFTCR</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Centre for Training, Consultancy and Recruitment
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 sm:mb-8">Contact</h3>
            <ul className="space-y-5 sm:space-y-6 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">Woolwich, Southeast London</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${contactEmail}`} className="text-neutral-400 hover:text-white transition-colors">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">+44 (0) 20 XXXX XXXX</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 sm:mb-8">Company</h3>
            <ul className="space-y-5 sm:space-y-6 text-sm">
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#courses" className="text-neutral-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 sm:mb-8">Legal</h3>
            <ul className="space-y-5 sm:space-y-6 text-sm">
              <li><a href="#privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-neutral-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#accessibility" className="text-neutral-400 hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#cookies" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-10 sm:pt-14 md:pt-18 border-t border-neutral-800 text-xs sm:text-sm text-neutral-500">
          <p>© {currentYear} CFTCR. All rights reserved.</p>
          <p>Centre for Training, Consultancy and Recruitment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
