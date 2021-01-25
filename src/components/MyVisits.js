import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyVisits = (props) => {
    const renderVisits = props.visits.length > 0 ?
    props.visits.map(v => (<p key={v.id}><Link key={v.id} to={`/visits/${v.id}`}>{v.attributes.date}</Link></p>)) :
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