// StatusFilter(select): All, Open, In Progress, On Hold, Resolved.

'use client'
// Controlled select: value + onChange(value)

export default function StatusFilter({ value, options = [], onChange }) {
    const status = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved']
  return (
    <label className="status-filter-label">
      <span className="status">Status</span>
      <select
        className="select-statusfilter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}