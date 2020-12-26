import React from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import SignUp from './components/SignUp.js'
import MyStadiums from './components/MyStadiums.js'
import { connect } from 'react-redux' 
import { getCurrentUser } from "./actions/currentUser.js"
import { Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
        <div className="App">
          <Logout/>
          <NavBar/>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/my-stadiums' component={MyStadiums} />
        </div>
    );

  }
}

export default connect(null, { getCurrentUser })(App);
