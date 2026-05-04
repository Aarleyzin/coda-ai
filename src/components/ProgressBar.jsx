export default function ProgressBar({ value = 0, className = '' }) {
  const width = Math.max(0, Math.min(value, 100))
  return (
    <div className={`h-3 rounded-full bg-white/70 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-500"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
