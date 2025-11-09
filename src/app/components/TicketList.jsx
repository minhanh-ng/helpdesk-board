'use client';
import TicketCard from "./TicketCard";

// Maps products to cards (key={id})
 export default function TicketList({tickets = [], Queue=[], AddToMyQueue}) {
    return (
        <div> 
            <h2>Queue</h2>
        
            <div className="ticket-list"> 
                
                {tickets.map(t => (
          <TicketCard key={t.id} ticket={t} Queue={Queue} AddToMyQueue={AddToMyQueue} />
            ))}
            </div>
        </div>
    )
 }
