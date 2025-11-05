import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import download from "../assets/down.png";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  
  // Get email from environment variable
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "info@hirely.co.uk";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Try to open email client
      const mailtoLink = `mailto:${contactEmail}?subject=Contact Request from ${email}&body=Contact me at: ${email}`;
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setStatus(`✓ Email client opened! If not, please email: ${contactEmail}`);
      setEmail("");
      
      // Clear message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      // Fallback: just show email address
      setStatus(`Please email us at: ${contactEmail}`);
      setTimeout(() => setStatus(""), 5000);
    }
  };
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img className="h-8 w-8 mr-2" src={download} alt="Logo" />
            <span className="text-xl font-bold tracking-tight">CFTCR</span>
          </div>
            <p className="text-neutral-400 text-sm mb-4">
            A leading training company in Woolwich, Southeast London. Specialising in Early Years, Health & Social Care, and Consultancy Services.
          </p>
          <div className="text-neutral-400 text-sm">
            <p className="mb-1">📍 Woolwich, Southeast London</p>
            <p className="mb-1">📧 {contactEmail}</p>
            <p>📞 +44 (0) 20 XXX XXX</p>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-teal-400">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-teal-400 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-teal-400">Services</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-teal-400 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Training Programs */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-teal-400">Training Programs</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-teal-400 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter/Contact Section */}
      <div className="border-t border-neutral-700 pt-8 mt-8">
        <div className="max-w-2xl mx-auto">
          {/* <h3 className="text-xl font-bold mb-4 text-center text-teal-400">Get in Touch</h3> */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Contact us via mail..."
              className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-300 placeholder-neutral-500 focus:outline-none focus:border-teal-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-800 rounded-lg font-semibold hover:from-green-600 hover:to-teal-900 transition-all whitespace-nowrap"
            >
              Contact Us
            </button>
          </form>
          {status && (
            <p className="text-center mt-3 text-sm text-teal-400">
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-700 pt-6 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} CFTCR. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
