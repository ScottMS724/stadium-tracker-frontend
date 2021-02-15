import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStadiums = (props) => {
    const stadiumCards = props.stadiums.length > 0 ?
    props.stadiums.map(s => (<p key={s.id}><Link key={s.id} to={`/stadiums/${s.id}`}>{s.attributes.name}</Link></p>)) :
    null
    
    return stadiumCards
}

const mapStateToProps = state => { 
    return {
        stadiums: state.myStadiums
    }
}

export default connect(mapStateToProps)(MyStadiums)

