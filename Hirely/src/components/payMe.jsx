import React from "react";

const PayMe = () => {
  const invoice = "INV-0001"; // update invoice id
  const amount = "NGN 100,000"; // update amount
  const daysToPay = 7;
  const email = "billing@yourdomain.com"; // update contact email

  const deadline = new Date(Date.now() + daysToPay * 24 * 20 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-black flex items-center justify-center p-4">
      <div className="max-w-3xl w-full p-8 rounded-lg border-4 border-orange-500 bg-gray-800 text-center shadow-2xl">
        
        {/* Skull Icon */}
        <div className="text-6xl mb-4">☠️</div>

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
            <li className="flex items-start">
              <span className="mr-3 text-orange-500">🔥</span>
              <span>If necessary, the matter may be pursued through formal legal channels to recover the debt.</span>
            </li>
          </ul>
        </div>

        {/* Spooky Footer */}
        <div className="mt-6 pt-4 border-t-2 border-orange-500">
          <p className="text-orange-300 text-sm font-semibold">👻 Your time is running out... 👻</p>
        </div>
      </div>
    </div>
  );
};

export default PayMe;