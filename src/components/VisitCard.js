import React from 'react';
import { deleteVisit } from '../actions/myVisits.js'
import { connect } from 'react-redux'

const VisitCard = ({match, visits, deleteVisit, history}) => {
    const correctVisit = visits.find(visit => visit.id === match.params.visitId)

    const handleClick = (event) => {
        event.preventDefault()
        deleteVisit(correctVisit.id, history)
    }

    return (
        <div>
            <h3>{correctVisit.attributes.description}</h3>

            <button style={{color: "red"}} onClick={handleClick}>Delete this visit.</button>
        </div>
    );
}

export default connect(null, { deleteVisit })(VisitCard)