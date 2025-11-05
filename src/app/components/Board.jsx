'use client';
import { useEffect, useState } from 'react';
export default function Board() {
// Fetch state
const [tickets, setTickets] = useState([]);
// const [loading, setLoading]   = useState(true);
// const [error, setError]       = useState(null);
// const filters = { status: 'All', priority: 'All' };
// const search = '';
// const [queue, setQueue] = useState([]);

 


// Effect #1 - fetch tickets from /api/ticket on mount.
    useEffect(() => {
        fetch('/api/tickets')
        .then(r => r.json())
        .then(setTickets)
        .catch(console.error);
        }, []);



    return (
        <ul>
            {tickets.map(t =>  <li key={t.id}>{t.title} - priority: {t.priority}</li> )}
        </ul>
        );
}


