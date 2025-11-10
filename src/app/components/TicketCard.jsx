'use client';

export default function TicketCard({ticket, myQueue, AddToMyQueue}) {
    const {id, title, priority, status, assignee, updatedAt} = ticket
    let AlreadyInQueue = !!myQueue[id]

    return (
    <div className="ticket-card">
        <h2>{title}</h2>
        <p>Priority: {priority}</p>
        <p>Status: {status}</p>
        <p>Assignee: {assignee}</p>
        <p>Update At: {updatedAt}</p>
        
{/* Disable Add button if already in queue; show “Already in Queue” */}
      {AlreadyInQueue ? (
        <button disabled style={{ cursor: 'not-allowed' }}>Already in Queue</button>
        ) : (
        <button onClick={() => AddToMyQueue(ticket)}>Add to Queue</button>
        )}
    </div>
  );
}
