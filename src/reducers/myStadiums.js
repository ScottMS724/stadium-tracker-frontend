const stadiumsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_MY_STADIUMS":
            return action.stadiums 
        default:
            return state 
    }
} 

export default stadiumsReducer 