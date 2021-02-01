import React from 'react' 
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import MyVisits from './MyVisits.js'
import VisitCard from './VisitCard.js'

const StadiumCard = ({stadium, visits, match}) => {
    return (
        stadium ?
        <div>
            <h2>{stadium.attributes.name}</h2>
            <p>{stadium.attributes.city}</p>
            <img src={stadium.attributes.image} alt="" height="300" width="400"></img>
            
            <p><Link to={`/stadiums/${stadium.id}/edit`}>Edit this stadium.</Link></p>

            <br/>

            <h3>Here are all your past visits to this stadium:</h3>

            <MyVisits visits={visits} matchId={match.params.id} matchURL={match.url} />

            <Route path={`${match.url}/visits/:visitId`} render={routerProps => <VisitCard {...routerProps} visits={visits} /> }/>
        </div> :
        null 
    )
}

export default StadiumCard 
