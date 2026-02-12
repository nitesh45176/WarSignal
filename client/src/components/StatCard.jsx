const StatCard = ({ label, value }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition">
      <p className="text-slate-400 text-sm mb-2">{label}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
};

export default StatCard;
