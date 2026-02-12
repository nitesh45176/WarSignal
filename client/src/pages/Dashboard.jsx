import { useState, useEffect } from "react";
import API from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import StatCard from "../components/StatCard";
import MissionForm from "../components/MissionForm";
import ResultPanel from "../components/ResultPanel";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [missionData, setMissionData] = useState({
    missionType: "Border Defense",
    infantry: 0,
    tanks: 0,
    airUnits: 0
  });

  const [result, setResult] = useState(null);
  const [advice, setAdvice] = useState("");

  const loadProfile = async () => {
    try {
      const { data } = await API.get("/auth/profile");
      setProfile(data);
    } catch {
      navigate("/");
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

const handleMission = async (e) => {
  e.preventDefault();

  const loadingToast = toast.loading("Deploying mission...");

  try {
    const { data } = await API.post("/mission/create", missionData);

    toast.dismiss(loadingToast);

    if (data.mission.result === "Success") {
      toast.success("Mission Successful!");
    } else {
      toast.error("Mission Failed!");
    }

    setResult(data.mission);
    setAdvice(data.advice);
    loadProfile()

  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error("Mission execution failed", error);
  }
};

  if (!profile) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        WarSignal Command Center
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard label="Infantry" value={profile.infantry} />
        <StatCard label="Tanks" value={profile.tanks} />
        <StatCard label="Air Units" value={profile.airUnits} />
        <StatCard label="Budget" value={`$${profile.budget}`} />
      </div>

      <MissionForm
        missionData={missionData}
        setMissionData={setMissionData}
        handleMission={handleMission}
      />

      <ResultPanel result={result} advice={advice} />

      <button
        onClick={() => navigate("/history")}
        className="mt-12 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition"
      >
        View Mission History
      </button>

    </DashboardLayout>
  );
};

export default Dashboard;
