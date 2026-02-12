import { Link, useLocation, useNavigate } from "react-router-dom";
import { Radar } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItem = (path, label) => {
    const active = location.pathname === path;

    return (
      <Link
        to={path}
        className={`px-4 py-2 rounded-lg transition text-sm font-medium
          ${active
            ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
            : "text-slate-300 hover:bg-white/5"}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0F1C]/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
            <Radar size={18} className="text-white" />
          </div>
          <span className="text-lg font-semibold text-white tracking-wide">
            WarSignal
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          {navItem("/dashboard", "Dashboard")}
          {navItem("/history", "History")}

          <button
            onClick={logout}
            className="ml-4 px-4 py-2 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/5 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
