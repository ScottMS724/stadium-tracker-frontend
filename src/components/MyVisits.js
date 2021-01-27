import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyVisits = (props) => {
    const matchingVisits = props.visits.filter(visit => visit.attributes.stadium_id == props.matchProps) 
    const renderVisits = matchingVisits.length > 0 ?
    matchingVisits.map(visit => (<p key={visit.id}><Link key={visit.id} to={`/visits/${visit.id}`}>{visit.attributes.date}</Link></p>)) :
    null
    // const renderVisits = Object.keys(props.visits).map(visitId =>
    //     <Link key={visitId} to={`/visits/${visitId}`}>{props.visits[visitId].date}</Link>
    //   );
     
      return (
        <div>
            {renderVisits}
          <h3>In MyVisits list component.</h3>
        </div>
      );
    };

const mapStateToProps = state => { 
    return {
        visits: state.myVisits
    }
}

export default connect(mapStateToProps)(MyVisits)