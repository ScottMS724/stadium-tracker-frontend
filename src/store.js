import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import currentUserReducer from './reducers/currentUser.js'
import loginFormReducer from './reducers/loginForm.js'
import stadiumsReducer from './reducers/myStadiums.js'
import signUpReducer from './reducers/signUpForm.js'
import newStadiumFormReducer from './reducers/newStadiumForm.js'
import thunk from 'redux-thunk' 

const reducer = combineReducers({ 
    currentUser: currentUserReducer,
    loginForm: loginFormReducer,
    myStadiums: stadiumsReducer,
    signUpForm: signUpReducer,
    newStadiumForm: newStadiumFormReducer 
  })
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store 
  