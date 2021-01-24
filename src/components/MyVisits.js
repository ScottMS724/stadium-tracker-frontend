import React from 'react' 
import { Link } from 'react-router-dom'

const MyVisits = (props) => {
    // const renderVisits = Object.keys(props.visits).map(visitId =>
    //     <Link key={visitId} to={`/${props.match.url}/${visitId}`}>{props.visits[visitId].date}</Link>
    //   );
     
      return (
        <div>
          <h5>In MyVisits component for the list of all visits.</h5>
        </div>
      );
    };

export default MyVisits