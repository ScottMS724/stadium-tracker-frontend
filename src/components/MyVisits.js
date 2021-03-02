import React from 'react' 
import { NavLink, Link } from 'react-router-dom'

const MyVisits = ({ visits, matchId, matchURL }) => { 
  const matchingVisits = visits.filter(visit => visit.attributes.stadium_id == matchId)

  const renderVisits = matchingVisits.length > 0 ? 
    matchingVisits.map(visit => <p key={visit.id}><NavLink activeClass key={visit.id} to={`${matchURL}/visits/${visit.id}`}>{visit.attributes.date}</NavLink></p>) :
    <h3 style={{color: "yellow"}}>This stadium has no visits yet. Click the link below to add a visit to this stadium.</h3>

    return (
        <div>
          {renderVisits}
        </div>
      );
    };
    
export default MyVisits