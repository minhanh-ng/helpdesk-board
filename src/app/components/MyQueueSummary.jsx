'use client'

export default function MyQueueSummary( tickets, queue, onRemove, onClear) {
    const queued = tickets.filter(t => queue[t.id]);
    <div className="queue-summary">
        <h2>Summary</h2>
    {/* Total count of tickets */}
        <p>You have {queued.length} tickets in your queue. </p>

    {/* List of tickets */}
        <div className="ticket-list">
            <ul>
            {queued.map(t => (
            <li key={t.id}>
                {t.title}{' '}
                <button onClick={() => onRemove(t.id)}>Remove</button>
            </li>
            ))}
            </ul>
        </div>
    {/* Clear button */}
        <button onClick={onClear} disabled={queued.length === 0}>
        Clear Queue
        </button>
    </div>
}