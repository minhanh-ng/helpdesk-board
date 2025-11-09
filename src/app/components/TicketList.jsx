'use client';
import TicketCard from "./TicketCard";

// Maps products to cards (key={id})
 export default function TicketList({tickets = [], queue=[], AddToMyQueue}) {
    return (
        <div> 
            <h2>Tickets</h2>
        
            <div className="ticket-list"> 
                
                {tickets.map(t => (
          <TicketCard key={t.id} ticket={t} myQueue={queue} AddToMyQueue={AddToMyQueue} />
            ))}
            </div>
        </div>
    )
 }
