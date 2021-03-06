import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStadiums = (props) => {
    const stadiumCards = props.stadiums.length > 0 ?
    props.stadiums.map(s => (<h1><p key={s.id}><Link key={s.id} to={`/stadiums/${s.id}`}>{s.attributes.name}</Link></p></h1>)) :
    <h3 style={{color: "yellow"}}>You have no stadiums yet. Click the button above to add your first stadium.</h3>
    
    return (
        <div className="bg2">
            <br></br>
            <br></br>
            <h1 className="header_title">Your Stadiums</h1>
            {stadiumCards}
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        stadiums: state.myStadiums
    }
}

export default connect(mapStateToProps)(MyStadiums)


