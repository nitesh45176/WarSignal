import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">

      <Navbar />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full bottom-[-100px] left-[-80px]" />
      </div>

      <div className="pt-24 px-6 md:px-14 pb-10">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;
