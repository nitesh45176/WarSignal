const MissionForm = ({ missionData, setMissionData, handleMission }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mt-10 shadow-lg">

      <h2 className="text-2xl font-semibold mb-6">
        Deploy New Mission
      </h2>

      <form onSubmit={handleMission} className="grid md:grid-cols-2 gap-6">

        <select
          value={missionData.missionType}
          onChange={(e) =>
            setMissionData({ ...missionData, missionType: e.target.value })
          }
          className="bg-[#111827] border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none"
        >
          <option>Border Defense</option>
          <option>City Capture</option>
          <option>Rescue Operation</option>
          <option>Surveillance</option>
        </select>

        <input
          type="number"
          placeholder="Infantry Units"
          className="bg-[#111827] border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none"
          onChange={(e) =>
            setMissionData({ ...missionData, infantry: Number(e.target.value) })
          }
        />

        <input
          type="number"
          placeholder="Tanks"
          className="bg-[#111827] border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none"
          onChange={(e) =>
            setMissionData({ ...missionData, tanks: Number(e.target.value) })
          }
        />

        <input
          type="number"
          placeholder="Air Units"
          className="bg-[#111827] border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none"
          onChange={(e) =>
            setMissionData({ ...missionData, airUnits: Number(e.target.value) })
          }
        />

        <button
          type="submit"
          className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 transition py-3 rounded-xl font-semibold mt-2"
        >
          Execute Mission
        </button>

      </form>
    </div>
  );
};

export default MissionForm;
