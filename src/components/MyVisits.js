import React from 'react' 
import { NavLink, Link } from 'react-router-dom'

const MyVisits = ({ visits, matchId, matchURL }) => { 
    const matchingVisits = visits.filter(visit => visit.attributes.stadium_id == matchId)

    const renderVisits = matchingVisits.map(visit => <p key={visit.id}><NavLink activeClass key={visit.id} to={`${matchURL}/visits/${visit.id}`}>{visit.attributes.date}</NavLink></p>)

    return (
        <div>
          {renderVisits}
        </div>
      );
    };
    
export default MyVisits