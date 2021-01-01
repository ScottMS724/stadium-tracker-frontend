const stadiumsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_MY_STADIUMS":
            return action.stadiums 
        case "CLEAR_STADIUMS":
            return []
        default:
            return state 
    }
} 

export default stadiumsReducer 