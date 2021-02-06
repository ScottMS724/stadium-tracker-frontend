const initialState = {
    date: "", 
    description: ""
}

const visitFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_VISIT_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value 
            } 
        case "RESET_NEW_VISIT_FORM":
            return initialState 
        default:
            return state 
    }
} 

export default visitFormReducer 