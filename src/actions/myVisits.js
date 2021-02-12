import { resetVisitForm } from './visitForm'

// synchronous actions 
export const setMyVisits = visits => {
    return {
        type: "SET_MY_VISITS",
        visits
    }
}

export const addVisit = visit => {
    return {
        type: "ADD_VISIT",
        visit
    }
}

export const deleteVisitSuccess = visitId => {
    return {
        type: "DELETE_VISIT",
        visitId 
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

export const createVisit = (visitData, history) => {
    return dispatch => {
        const sendableVisitData = {
            date: visitData.date,
            description: visitData.description,
            stadium_id: visitData.stadiumId
        }
        return fetch("http://localhost:3001/api/v1/visits", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableVisitData)
        })
            .then(resp => resp.json())
            .then(visit => {
                if (visit.error) {
                    alert(visit.error)
                } else {
                    dispatch(addVisit(visit.data))
                    dispatch(resetVisitForm())
                    history.push(`/stadiums/${visitData.stadiumId}`)
                }
            })
            .catch(console.log)
    }

}

export const deleteVisit = (visitId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/visits/${visitId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(visit => {
                if (visit.error) {
                    alert(visit.error)
                } else { 
                    dispatch(deleteVisitSuccess(visitId))
                    history.push(`/stadiums/`)
                }
            })
            .catch(console.log)
    }
}