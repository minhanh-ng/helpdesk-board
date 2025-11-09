// PriorityFilter (select): All, Low, Medium, High, Critical.
'use client'

export default function PriorityFilter({ value, options = [], onChange }) {
    const priority = ['All', 'Low', 'Medium', 'High', 'Critical']
    return (
    <label className="priority-filter-label">
      <span className="priority">Status</span>
      <select
        className="select-priorityfilter"
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