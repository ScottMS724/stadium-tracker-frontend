import React from 'react' 
import { NavLink, Link, Route } from 'react-router-dom'
import MyVisits from './MyVisits.js'
import VisitCard from './VisitCard.js'
import VisitForm from './VisitForm.js'
import EditStadiumFormWrapper from './EditStadiumFormWrapper.js'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const StadiumCard = ({stadium, visits, match}) => {

    return (
        stadium ?
        <Router>
        <div className="bg2 text-white">
            <br></br>
            <br></br>
            <h2>{stadium.attributes.name}</h2>
            <p>{stadium.attributes.city}</p>
            <img src={stadium.attributes.image} alt="" height="300" width="400"></img>
            
            <p><NavLink activeClass to={`/stadiums/${stadium.id}/edit`}>Edit this stadium.</NavLink></p>

            <Route exact path='/stadiums/:id/edit' render={routerProps => {
              return <EditStadiumFormWrapper stadium={stadium} {...routerProps}/> }
            }/>

            <br/>

            <h3>Here are all your past visits to this stadium:</h3>

            <MyVisits visits={visits} matchId={match.params.id} matchURL={match.url} />
            
            <Route exact path={`${match.url}/visits/:visitId`} render={routerProps => <VisitCard {...routerProps} visits={visits} /> }/>

            <p><NavLink activeClass to={`/stadiums/${stadium.id}/newVisit`}>Add new visit.</NavLink></p>

            <Route exact path={`${match.url}/newVisit`} render={routerProps => <VisitForm {...routerProps} stadiumId={stadium.id} /> } />
        </div>
        </Router> :
        null 
    )
}

export default StadiumCard
