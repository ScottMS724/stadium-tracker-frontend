const initialState = {
    date: "", 
    description: ""
}

const visitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_VISITS":
            return action.visits 
        case "ADD_VISIT":
            return state.concat(action.visit)
        // case "UPDATE_VISITS":
        //     return state.map(visit => visit.id === action.visit.id ? action.visit : visit)
        case "DELETE_VISIT":
            return state.filter(visit => visit.id === action.visitId ? false : true)
        // case "CLEAR_VISITS":
        //     return initialState 
        default:
            return state 
    }
} 

export default visitsReducer 