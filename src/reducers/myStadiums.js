const initialState = []

const stadiumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_STADIUMS":
            return action.stadiums 
        case "ADD_STADIUM":
            return state.concat(action.stadium)
        case "CLEAR_STADIUMS":
            return initialState 
        default:
            return state 
    }
} 

export default stadiumsReducer 