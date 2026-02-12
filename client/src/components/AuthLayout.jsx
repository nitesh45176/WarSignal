import React from "react";
import { Link } from "react-router-dom";
import { Radar } from "lucide-react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#0A0F1C] text-white">

      {/* LEFT SIDE */}
      <div className="w-screen md:w-[55vw] px-8 md:px-16 py-10 flex flex-col">

        {/* Logo */}
        <Link to="/" className="mb-16">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Radar className="text-white" size={20} />
            </div>
            <span className="text-2xl font-semibold tracking-wide">
              WarSignal
            </span>
          </div>
        </Link>

        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-[45vw] relative items-center justify-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-[#0A0F1C] to-violet-900" />
        <div className="absolute w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full bottom-[-120px] left-[-80px]" />

        <div className="relative max-w-lg px-10">
          <h2 className="text-5xl font-bold leading-tight">
            Control the Battlefield —
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              Command With Precision
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            Deploy units, execute missions, and track results in real-time.
            Every move matters. Strategy wins wars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
