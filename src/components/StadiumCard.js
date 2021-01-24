import React from 'react' 
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import MyVisits from './MyVisits.js'
import VisitCard from './VisitCard.js'

const StadiumCard = (props) => {
    return (
        props.stadium ?
        <div>
            <h2>{props.stadium.attributes.name}</h2>
            <p>{props.stadium.attributes.city}</p>
            <img src={props.stadium.attributes.image} alt="" height="300" width="400"></img>
            
            <p><Link to={`/stadiums/${props.stadium.id}/edit`}>Edit this stadium.</Link></p>

            <br/>

            <h3>Here are all your past visits to this stadium:</h3>

            <p><MyVisits visits={props.visits}/></p>

            <Route path={`${props.match.url}/:visitId`} component={<VisitCard visits={props.visits} /> }/>
        </div> :
        null 
    )
}

const mapStateToProps = state => { 
    return {
        visits: state.myVisits 
    }
}

export default connect(mapStateToProps)(StadiumCard) 
