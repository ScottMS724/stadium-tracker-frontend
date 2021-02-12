import React from 'react' 
import { Link, Route } from 'react-router-dom'
import MyVisits from './MyVisits.js'
import VisitCard from './VisitCard.js'
import VisitForm from './VisitForm.js'
import { BrowserRouter as Router } from 'react-router-dom'

const StadiumCard = ({stadium, visits, match}) => {
    return (
        stadium ?
        <Router>
        <div>
            <h2>{stadium.attributes.name}</h2>
            <p>{stadium.attributes.city}</p>
            <img src={stadium.attributes.image} alt="" height="300" width="400"></img>
            
            <p><Link to={`/stadiums/${stadium.id}/edit`}>Edit this stadium.</Link></p>

            <br/>

            <h3>Here are all your past visits to this stadium:</h3>

            <MyVisits visits={visits} matchId={match.params.id} matchURL={match.url} />
            
            <Route path={`${match.url}/visits/:visitId`} render={routerProps => <VisitCard {...routerProps} visits={visits} /> }/>

            <p><Link to={`/stadiums/${stadium.id}/newVisit`}>Add new visit.</Link></p>

            <Route path={`${match.url}/newVisit`} render={routerProps => <VisitForm {...routerProps} stadiumId={stadium.id} /> } />
        </div>
        </Router> :
        null 
    )
}

export default StadiumCard 
