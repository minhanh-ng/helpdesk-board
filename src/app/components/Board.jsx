'use client';
import { useEffect, useState } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import StatusMessage from './StatusMessage';    
import MyQueueSummary from './MyQueueSummary';

export default function Board() {
// Fetch state 
const [tickets, setTickets] = useState([]);
const [loading, setLoading]   = useState(true);
const [error, setError] = useState(null);
const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
const [queue, setQueue] = useState({});
const [search, setSearch] = useState('');   

// Define functions
// Add to queue function
    function AddToMyQueue(ticket) {
        setQueue(prev => ({ ...prev, [ticket.id]: true }));
        };

// Remove from queue function
    function RemoveFromQueue(ticketId) {
    setQueue(prev => {
      const updated = { ...prev };
      delete updated[ticketId];
      return updated;
    });
}

// Clear Queue Function
    function ClearQueue() {
        setQueue({});
    }

 // Function to Return Search in Search Box
 const visibleTickets = tickets.filter(t => {
  const matchesStatus =
    filters.status === 'All' || t.status === filters.status;

  const matchesPriority =
    filters.priority === 'All' || t.priority === filters.priority;

  const searchTerm = search.toLowerCase();
  const matchesSearch =
    t.title.toLowerCase().includes(searchTerm) ||
    (t.description && t.description.toLowerCase().includes(searchTerm));

  return matchesStatus && matchesPriority && matchesSearch;
});   

// Define function for prop in Status Message
const isEmpty = !loading && !error && visibleTickets.length === 0;

// Effect #1 - fetch tickets from /api/ticket on mount.
useEffect(() => {
  let isActive = true; // guard against setState after unmount

  async function load() {
    try {
      setLoading(true);

      const res = await fetch('/api/tickets', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (isActive) {
        setTickets(data);
        setError(null);

        setTimeout(() => {
          if (isActive) setLoading(false);
        }, 150);
      }
    } catch (err) {
      if (isActive) {
        console.error(err);
        setError('Unable to load tickets.');
        setLoading(false);
      }
    }
  }

  load();

  return () => { isActive = false; };
}, []);

// Effect #2 - simulate live updates
useEffect(() => {
  if (!tickets.length) return;

  const id = setInterval(() => {
    // Pick a random ticket
    setTickets(prev => {
        const target = prev[Math.floor(Math.random() * prev.length)];

    // Return a new array with updated ticket (immutability)
        return prev.map(t => {
        if (t.id !== target.id) return t;

    // Randomly decide whether to change status or priority
        const changeType = Math.random() > 0.5 ? 'status' : 'priority';

        let newStatus = t.status;
        let newPriority = t.priority;

        // Change status 
        if (changeType === 'status') {
          if (t.status === 'Open') newStatus = 'In Progress';
          else if (t.status === 'In Progress') newStatus = 'On Hold';
          else if (t.status === 'On Hold') newStatus = 'Resolved';
          else newStatus = 'Open';
        }

        // Change priority 
        if (changeType === 'priority') {
          if (t.priority === 'Low') newPriority = 'Medium';
          else if (t.priority === 'Medium') newPriority = 'High';
          else if (t.priority === 'High') newPriority = 'Critical';
          else newPriority = 'Low';
        }

        // Update timestamp
        return {
          ...t,
          status: newStatus,
          priority: newPriority,
          updatedAt: new Date().toLocaleTimeString(),
        };
      });
    });
  }, 6000 + Math.floor(Math.random() * 4000)); 


  return () => clearInterval(id); // cleanup interval when unmounting
}, [tickets.length]);



return (
    <div>
        <header className='header'>
                
            <p className='subtitle'>Filter by status and priority, search by keyword, and add ticket to your queue</p>
        </header>
            <div className="filter-bar">

                <StatusFilter value={filters.status}   
                    onChange={(newStatus) => setFilters(prev => ({ ...prev, status: newStatus }))} 
                    options={['All', 'Open', 'In Progress', 'On Hold', 'Resolved']} />

                <PriorityFilter value={filters.priority}   
                    onChange={(newPriority) => setFilters(prev => ({ ...prev, priority: newPriority }))}
                    options= {['All', 'Low', 'Medium', 'High', 'Critical']} />

             <SearchBox value={search}
                    onChange={setSearch} />

            </div>
            
            <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />

            <TicketList tickets={visibleTickets} queue={queue} AddToMyQueue={AddToMyQueue} />

            <MyQueueSummary
                tickets={tickets}
                queue={queue}
                onRemove={RemoveFromQueue}
                onClear={ClearQueue}
            />
         </div>
        
       
        
        );
}


