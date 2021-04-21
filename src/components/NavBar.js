import React from 'react' 
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Logout from './Logout.js'

const NavBar = (props) => {

    const handleClick = (event) => {
        event.preventDefault()
        props.history.push('/stadiums')
    } 

    const handleNewClick = (event) => {
        event.preventDefault()
        props.history.push('/stadiums/new')
    } 

    return (
        <div className="NavBar bg">
        
            <section className="jumbotron text-center bg">
                <div className="container font-weight-bold">
                    <h1>{ props.loggedIn ? <><p className="font-weight-bold">Welcome to stadium tracker, {props.currentUser.attributes.name}!</p> </> : null }</h1>
                        <p className="text-warning bg-dark">Never forget all your great times at the game! Record all the stadiums you went to as well as every time you visited them!</p>
                    <p>
                        <Button type="button" onClick={handleClick}>My Stadiums</Button>
                        <Button className="btn btn-info" href="/stadiums/new" type="button" onClick={handleNewClick}>Add a Stadium</Button>
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