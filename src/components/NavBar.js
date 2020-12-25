import React from 'react' 
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"

const NavBar = (props) => {

    return (
        <div className="NavBar">
            { props.currentUser ? <h2>Welcome, {props.currentUser.attributes.name}!</h2> : "" } 
            { props.myStadiums.length > 0 ? <h3>Here are your visited stadiums:</h3> : null }
            { props.currentUser ? <Logout/> : <Login/> }
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