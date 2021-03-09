import { resetStadiumForm } from './stadiumForm'

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

export const updateStadiumSuccess = stadium => {
    return {
        type: "UPDATE_STADIUM",
        stadium
    }
}

export const deleteStadiumSuccess = stadiumId => {
    return {
        type: "DELETE_STADIUM",
        stadiumId 
    }
}

// asynchronous actions

export const getMyStadiums = () => {
    return dispatch => {
        return fetch("https://young-inlet-18987.herokuapp.com/api/v1/stadiums", {
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

export const createStadium = (stadiumData, history) => {
    return dispatch => {
        const sendableStadiumData = {
            name: stadiumData.name,
            city: stadiumData.city,
            image: stadiumData.image,
            user_id: stadiumData.userId 
        }
        return fetch("https://young-inlet-18987.herokuapp.com/api/v1/stadiums", {
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
                    dispatch(resetStadiumForm())
                    history.push(`/stadiums/${stadium.data.id}`)
                }
            })
            .catch(console.log)
    }

}

export const updateStadium = (stadiumData, history) => {
    return dispatch => {
        const sendableStadiumData = {
            name: stadiumData.name,
            city: stadiumData.city,
            image: stadiumData.image
        }
        return fetch(`https://young-inlet-18987.herokuapp.com/api/v1/stadiums/${stadiumData.stadiumId}`, {
            credentials: "include",
            method: "PATCH",
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
                    dispatch(updateStadiumSuccess(stadium.data))
                    history.push(`/stadiums/${stadium.data.id}`)
                }
            })
            .catch(console.log)
    }

}

export const deleteStadium = (stadiumId, history) => {
    return dispatch => {
        return fetch(`https://young-inlet-18987.herokuapp.com/api/v1/stadiums/${stadiumId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(stadium => {
                if (stadium.error) {
                    alert(stadium.error)
                } else {
                    dispatch(deleteStadiumSuccess(stadiumId))
                    history.push(`/`)
                }
            })
            .catch(console.log)
    }
}