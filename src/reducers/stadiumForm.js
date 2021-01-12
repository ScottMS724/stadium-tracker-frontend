const initialState = {
    name: "", 
    city: "",
    image: ""
}

const newStadiumFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_STADIUM_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value 
            } 
        case "RESET_NEW_STADIUM_FORM":
            return initialState 
        case "SET_FORM_DATA_FOR_EDIT":
            return action.stadiumFormData 
        default:
            return state 
    }
} 

export default newStadiumFormReducer 