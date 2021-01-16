const initialState = []

const stadiumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_STADIUMS":
            return action.stadiums 
        case "ADD_STADIUM":
            return state.concat(action.stadium)
        case "UPDATE_STADIUM":
            return state.map(stadium => stadium.id === action.stadium.id ? action.stadium : stadium)
        case "DELETE_STADIUM":
            return state.filter(stadium => stadium.id === action.stadiumId ? false : true)
        case "CLEAR_STADIUMS":
            return initialState 
        default:
            return state 
    }
} 

export default stadiumsReducer 