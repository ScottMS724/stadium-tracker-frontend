import React from 'react' 
import { connect } from 'react-redux'

const NavBar = (props) => {

    return (
        <div className="NavBar">
            { props.currentUser ? <h2>Welcome, {props.currentUser.attributes.name}!</h2> : "" } 
            { props.currentUser ? <h3>Here are your visited stadiums:</h3> : null }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        myStadiums: state.myStadiums 
    } 
}


export default connect(mapStateToProps)(NavBar) 