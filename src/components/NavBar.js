import React from 'react' 
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = (props) => {

    return (
        <div className="NavBar">
            <NavLink exact activeClass to="/stadiums">My Stadiums</NavLink> 
            <NavLink exact activeClass to="/stadiums/new">New Stadium</NavLink> 
            { props.loggedIn ? <><p>Welcome to stadium tracker, {props.currentUser.attributes.name}!</p> <Logout /></> : null }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        loggedIn: !!state.currentUser 
    } 
}


export default connect(mapStateToProps)(NavBar) 