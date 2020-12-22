import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUserReducer from './reducers/currentUser.js'
import loginFormReducer from './reducers/loginForm.js'
import stadiumsReducer from './reducers/myStadiums.js'
import thunk from 'redux-thunk' 

const reducer = combineReducers({
    user: usersReducer, 
    currentUser: currentUserReducer,
    loginForm: loginFormReducer,
    myStadiums: stadiumsReducer
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store 
  