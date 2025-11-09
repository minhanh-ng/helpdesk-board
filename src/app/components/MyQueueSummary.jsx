'use client'

export default function MyQueueSummary( tickets, queue, onRemove, onClear) {
    const queued = tickets.filter(t => queue[t.id]);
    <div className="queue-summary">
        <h2>Summary</h2>
    {/* Total count of tickets */}
        <p>You have {queued.length} tickets in your queue. </p>

    {/* List of tickets */}
        <button t>Click Me!</button>
    </div>
}