// synchronous actions 
export const setMyVisits = visits => {
    return {
        type: "SET_MY_VISITS",
        visits
    }
}

// asynchronous actions 

export const getMyVisits = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/visits", {
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
                    dispatch(setMyVisits(resp.data))
        }
    })
    .catch(console.log)
  }
}