// synchronous actions 

export const setMyStadiums = stadiums => {
    return {
        type: "SET_MY_STADIUMS",
        stadiums
    }
}

export const clearStadiums = () => {
    return {
        type: "CLEAR_STADIUMS"
    }
}

// asynchronous actions

export const getMyStadiums = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/stadiums", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(setMyStadiums(resp.data))
        }
    })
    .catch(console.log)
  }
}