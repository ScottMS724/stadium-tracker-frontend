import React from 'react' 
import Login from './Login.js'
import SignUp from './SignUp.js'
import { Link } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <h2>Welcome to Stadium Tracker! Please <Link to='/signup'>sign up</Link> or <Link to='/login'>log in</Link>.</h2>
    </div>

)

export default Home