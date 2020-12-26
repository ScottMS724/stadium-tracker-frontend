import { resetLoginForm } from "./loginForm.js"
import { resetSignUpForm } from './signUpForm.js'
import { getMyStadiums } from "./myStadiums.js"

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
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
            }
        })
        .catch(console.log) 
    }
}

export const signup = (credentials) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/v1/signup", {
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
          }
        })
        .catch(console.log)
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
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
            }
        })
        .catch(console.log) 
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}