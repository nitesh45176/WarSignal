import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/axiosConfig";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">

        <h1 className="text-3xl font-semibold mb-8 text-center">
          Welcome Back
        </h1>

        {error && (
          <div className="mb-5 text-sm text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/30">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Email address"
            required
            className="px-4 py-3 rounded-xl bg-[#111827] border border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="px-4 py-3 rounded-xl bg-[#111827] border border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 transition px-4 py-3 rounded-xl font-semibold disabled:opacity-60"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p className="mt-8 text-center text-slate-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:underline font-medium"
          >
            Create Account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
