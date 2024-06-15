import React from "react";

function Footer() {
  return (
    <div className="w-full p-4 border-t border-t-slate-200 flex items-center justify-center">
      <div className="flex flex-col items-center w-full md:w-9/12">
        <div className="flex flex-wrap space-y-8 md:flex-nowrap items-center w-full justify-between px-6 md:px-12">
          {/* Left */}
          <div className="flex flex-col items-start justify-center mr-10">
            <p className="text-green-400 text-6xl md:text-4xl font-medium italic">
              J<span className="text-orange-400">i</span>L
            </p>
            <p className="mt-4 text-sm">Right meal, right weight.</p>
          </div>
          {/* Right */}
          <div className="flex flex-col items-start justify-center md:items-center font-semibold w-max">
            <p>Get Started</p>
            <p className="mt-4 text-sm border-2 cursor-pointer hover:bg-green-500 active:bg-green-400 hover:text-white border-green-500 text-green-500 rounded-lg py-1 px-2">
              Sign in
            </p>
          </div>
        </div>
        {/* Base */}
        <div className="flex text-center flex-col md:flex-row space-y-4 md:space-y-0 items-center w-full justify-between px-2 border-t border-t-slate-200 font-mono text-xs py-2 mt-6">
          <p className="mr-3">Privacy Policy | Terms & Conditions </p>
          <p>Copyright © JiL, 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
