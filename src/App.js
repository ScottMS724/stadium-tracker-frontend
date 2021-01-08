import React from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import Home from './components/Home.js'
import MyStadiums from './components/MyStadiums.js'
import NewStadiumForm from './components/NewStadiumForm.js'
import StadiumCard from './components/StadiumCard.js'
import { connect } from 'react-redux' 
import { getCurrentUser } from "./actions/currentUser.js"
import { Route, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
        <div className="App">
            <Route path ='/' render={() => this.props.loggedIn ? <NavBar/> : <Home/>} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/stadiums' component={MyStadiums} />
            <Route exact path='/stadiums/new' component={NewStadiumForm}/>
            <Route exact path='/stadiums/:id' render={props => {
              const stadium = this.props.stadiums.find(stadium => stadium.id === props.match.params.id)
              console.log(stadium)
              return <StadiumCard stadium={stadium} {...props}/>
            }
          }/>
        </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser, 
    stadiums: state.myStadiums
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
