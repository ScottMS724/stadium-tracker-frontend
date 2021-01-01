import React from 'react' 
import Login from './Login.js'
import SignUp from './SignUp.js'
import { NavLink } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <h2>Welcome to Stadium Tracker! Please <NavLink exact activeClass to='/signup'>sign up</NavLink> or <NavLink exact activeClass to='/login'>log in</NavLink>.</h2>
    </div>

)

export default Home