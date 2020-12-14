// synchronous action creators 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", 
        user 
    }
}




// asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log) 
    }
}