import React from 'react';

const VisitCard = ({match, visits}) => {
    const correctVisit = visits.find(visit => visit.id === match.params.visitId)

    return (
        <div>
            <h3>{correctVisit.attributes.description}</h3>
        </div>
    );
}

export default VisitCard;