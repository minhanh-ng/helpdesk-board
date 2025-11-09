// SearchBox (text input): filters by substring match in title or description.
'use client'

export default function SearchBox({value, onChange}) {
  return (
    <label className="search-box">
      <span className="searchbox-title">Search</span>
      <input
        type="text"
        className="searchbox-input"
        value={value}
        placeholder="Search by title or description..."
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
