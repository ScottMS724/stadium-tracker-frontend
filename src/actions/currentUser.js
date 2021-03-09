import { resetLoginForm } from "./loginForm.js"
import { resetSignUpForm } from './signUpForm.js'
import { getMyStadiums, clearStadiums } from "./myStadiums.js"
import { getMyVisits } from "./myVisits.js"

// synchronous action creators 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", 
        user 
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}


// asynchronous action creators
export const login = (credentials, history) => {
    return dispatch => {
        return fetch("https://young-inlet-18987.herokuapp.com/api/v1/login", {
            credentials: "include", 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => { 
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getMyStadiums())
                dispatch(resetLoginForm()) 
                history.push('/')
            }
        })
        .catch(console.log) 
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("https://young-inlet-18987.herokuapp.com/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(resp => resp.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(setCurrentUser(resp.data))
            dispatch(getMyStadiums())
            dispatch(resetSignUpForm())
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("https://young-inlet-18987.herokuapp.com/api/v1/get_current_user", {
            credentials: "include", 
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getMyStadiums())
                dispatch(getMyVisits())
            }
        })
        .catch(console.log) 
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearStadiums())
        return fetch("https://young-inlet-18987.herokuapp.com/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}