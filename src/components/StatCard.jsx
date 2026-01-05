export default function StatCard({ title, value, subText, highlight }) {
  return (
    <div className={`stat-card ${highlight ? "highlight" : ""}`}>
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
      {subText && <span className="stat-sub">{subText}</span>}
    </div>
  );
}
