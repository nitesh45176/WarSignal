import { useEffect, useState } from "react";
import API from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const History = () => {
  const [missions, setMissions] = useState([]);
  const navigate = useNavigate();

  const fetchHistory = async () => {
    try {
      const { data } = await API.get("/mission/history");
      setMissions(data);
    } catch {
      navigate("/");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Mission Archives</h1>

      {missions.length === 0 ? (
        <p className="text-slate-400">No missions completed yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {missions.map((mission) => (
            <div
              key={mission._id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {mission.missionType}
              </h3>
              <p>Status: {mission.result}</p>
              <p>Casualties: {mission.casualties}</p>
              <p>Reward: ${mission.reward}</p>
              <p className="text-slate-400 text-sm mt-3">
                {new Date(mission.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-10 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition"
      >
        Back to Dashboard
      </button>
    </DashboardLayout>
  );
};

export default History;
