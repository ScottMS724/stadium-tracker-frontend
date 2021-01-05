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

export const addStadium = stadium => {
    return {
        type: "ADD_STADIUM",
        stadium
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

export const createStadium = stadiumData => {
    return dispatch => {
        const sendableStadiumData = {
            name: stadiumData.name,
            city: stadiumData.city,
            image: stadiumData.image,
            user_id: stadiumData.userId 
        }
        return fetch("http://localhost:3001/api/v1/stadiums", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableStadiumData)
        })
            .then(resp => resp.json())
            .then(stadium => {
                if (stadium.error) {
                    alert(stadium.error)
                } else {
                    dispatch(addStadium(stadium.data))
                }
            })
            .catch(console.log)
    }

}