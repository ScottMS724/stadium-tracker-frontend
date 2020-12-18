import React from 'react' 
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = (props) => {

    return (
        <form onSubmit={props.logout}>
            <input type="submit" value="Log Out" /> 
        </form>
    )
}


export default connect(null, {logout})(Logout) 