import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyVisits = ({ visits, matchId, matchURL }) => { 
    const matchingVisits = visits.filter(visit => visit.attributes.stadium_id == matchId)

    const renderVisits = matchingVisits.map(visit => <p key={visit.id}><Link key={visit.id} to={`${matchURL}/visits/${visit.id}`}>{visit.attributes.date}</Link></p>)

    return (
        <div>
          <h3>In MyVisits list component.</h3>
          {renderVisits}
        </div>
      );
    };
    
export default MyVisits