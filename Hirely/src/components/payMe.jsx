import React from "react";
import { AlertTriangle } from "lucide-react";

const PayMe = () => {
  const invoice = "INV-0001"; // update invoice id
  const amount = "NGN 100,000"; // update amount
  const daysToPay = 7;
  const email = "billing@yourdomain.com"; // update contact email

  const deadline = new Date(Date.now() + daysToPay * 24 * 20 * 60 * 1000).toLocaleDateString();

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('/src/assets/IMG-20251231-WA0054.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-3xl w-full p-8 rounded-lg border-4 border-orange-500 bg-gray-800 text-center shadow-2xl">
        
        {/* Alert Icon */}
        <AlertTriangle className="w-24 h-24 mx-auto mb-6 text-orange-500" strokeWidth={1.5} />

        <h1 className="text-4xl font-black text-orange-500 mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
          FINAL DEMAND — PAYMENT DUE NOW
        </h1>

        <p className="mb-3 text-orange-400 font-semibold">
          Invoice <strong className="text-orange-300">{invoice}</strong> is overdue. Immediate payment is required.
        </p>

        <p className="mb-4 font-extrabold text-white text-2xl">
          Outstanding amount: <span className="text-orange-400 animate-pulse">{amount}</span>
        </p>

        <p className="mb-6 text-sm text-orange-300 font-semibold border-b-2 border-orange-500 pb-3">
          Pay by <strong className="text-orange-400">{deadline}</strong> or face the consequences...
        </p>

        <div className="text-left max-w-2xl mx-auto mt-6 text-sm text-orange-100">
          <p className="font-black mb-3 text-orange-400 text-lg">💀 Consequences if unpaid by {deadline}:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">🔥</span>
              <span>Immediate suspension of all services and access.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">🔥</span>
              <span>A late fee and interest may be applied to the outstanding balance.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">🔥</span>
              <span>Outstanding balance may be referred to a debt collection agency.</span>
            </li>
          </ul>
        </div>

        {/* Gallery Section */}
        <div className="mt-8 mb-6">
          <h3 className="text-orange-400 font-bold text-lg mb-4">Gallery</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex-item">
              <img 
                src="/src/assets/IMG-20251231-WA0055.jpg" 
                alt="Gallery Image 1" 
                className="w-32 h-32 object-cover rounded-lg border-2 border-orange-400 hover:border-orange-300 transition-colors"
              />
            </div>
            <div className="flex-item">
              <img 
                src="/src/assets/code.jpg" 
                alt="Gallery Image 2" 
                className="w-32 h-32 object-cover rounded-lg border-2 border-orange-400 hover:border-orange-300 transition-colors"
              />
            </div>
            <div className="flex-item">
              <img 
                src="/src/assets/old/Pflege.jpg" 
                alt="Gallery Image 3" 
                className="w-32 h-32 object-cover rounded-lg border-2 border-orange-400 hover:border-orange-300 transition-colors"
              />
            </div>
            <div className="flex-item">
              <img 
                src="/src/assets/old/oldgizzer.webp" 
                alt="Gallery Image 4" 
                className="w-32 h-32 object-cover rounded-lg border-2 border-orange-400 hover:border-orange-300 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Spooky Footer */}
        <div className="mt-6 pt-4 border-t-2 border-orange-500">
          <p className="text-orange-300 text-sm font-semibold"> Your time is running out... </p>
        </div>
      </div>
    </div>
  );
};

export default PayMe;