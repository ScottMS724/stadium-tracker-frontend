import React from 'react' 
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = (props) => {

    return (
        <div className="NavBar bg">
            {/* <NavLink exact activeClass to="/stadiums">My Stadiums</NavLink> 
            <NavLink exact activeClass to="/stadiums/new">New Stadium</NavLink>  */}

            <section className="jumbotron text-center bg">
                <div className="container font-weight-bold">
                    <h1>{ props.loggedIn ? <><p className="font-weight-bold">Welcome to stadium tracker, {props.currentUser.attributes.name}!</p> </> : null }</h1>
                        <p className="text-warning bg-dark">Never forget all your great times at the game! Record the stadiums you went to as well as every time you visited them!</p>
                    <p>
                        <a className="btn btn-primary" href="/stadiums" type="button">My Stadiums</a>
                        <a className="btn btn-secondary my-2" href="/stadiums/new" type="button">Add a Stadium</a>
                    </p>
                </div>
            </section>

            { props.loggedIn ? <><Logout /></> : null }
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