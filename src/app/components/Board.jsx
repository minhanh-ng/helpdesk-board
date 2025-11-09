'use client';
import { useEffect, useState } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';

export default function Board() {
// Fetch state
const [tickets, setTickets] = useState([]);
// const [loading, setLoading]   = useState(true);
// const [error, setError]       = useState(null);
// const filters = { status: 'All', priority: 'All' };
// const search = '';
const [myQueue, setQueue] = useState([]);

 


// Effect #1 - fetch tickets from /api/ticket on mount.
    useEffect(() => {
        fetch('/api/tickets')
        .then(r => r.json())
        .then(setTickets)
        .catch(console.error);
        }, []);

    function AddToMyQueue(ticket) {
        setQueue([...myQueue, ticket]);
        };

// Effect #2 - simulate live updates
    return (
        <div>
             <TicketList tickets={tickets} myQueue={myQueue} AddToMyQueue={AddToMyQueue} />
             <StatusFilter />
             <PriorityFilter />
             
         </div>
        
       
        
        );
}


