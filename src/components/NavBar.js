import React from 'react' 
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"

const NavBar = (props) => {

    return (
        <div className="NavBar">
            { props.currentUser ? <h2>Welcome, {props.currentUser.name}!</h2> : "" }
            { props.currentUser ? <Logout/> : <Login/> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    } 
}


export default connect(mapStateToProps)(NavBar) 