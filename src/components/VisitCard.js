import React from 'react';
import { deleteVisit } from '../actions/myVisits.js'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

const VisitCard = ({match, visits, deleteVisit, history}) => {
    const correctVisit = visits.find(visit => visit.id === match.params.visitId)

    return (
        <div>
            <h3>{correctVisit.attributes.description}</h3>

            <Button className="btn btn-danger" type="button" onClick={() => deleteVisit(correctVisit.id, history, correctVisit)}>Delete this visit.</Button>
        </div>
    );
}

export default connect(null, { deleteVisit })(VisitCard)