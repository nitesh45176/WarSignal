const ResultPanel = ({ result, advice }) => {
  if (!result && !advice) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {result && (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Mission Report</h3>
          <p>Status: {result.result}</p>
          <p>Casualties: {result.casualties}</p>
          <p>Reward: ${result.reward}</p>
        </div>
      )}

      {advice && (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">AI Tactical Advisor</h3>
          <p className="text-slate-300">{advice}</p>
        </div>
      )}

    </div>
  );
};

export default ResultPanel;
