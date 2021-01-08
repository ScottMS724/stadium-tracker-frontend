import React from 'react' 
import { connect } from 'react-redux'
import StadiumCard from './StadiumCard.js'
import { Link } from 'react-router-dom'

const MyStadiums = (props) => {
    const stadiumCards = props.stadiums.length > 0 ?
    props.stadiums.map(s => (<><Link key={s.id} to={`/stadiums/${s.id}`}>{s.attributes.name}</Link><br/></>)) :
    null
    
    return stadiumCards 
}

const mapStateToProps = state => { 
    return {
        stadiums: state.myStadiums
    }
}

export default connect(mapStateToProps)(MyStadiums)

