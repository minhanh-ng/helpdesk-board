'use client';

export default function Board() {
  // Fetch state
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const filters = { status: 'All', priority: 'All' };
  const search = '';
  const queue = { [ticketId]: true };


  // Effect #1 - fetch tickets from /api/tickets on mount.



}