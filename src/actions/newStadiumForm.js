// import { bindActionCreators } from "redux"

// synchroneous action creators 

export const updateNewStadiumForm = (name, value) => {
    return {
        type: "UPDATE_NEW_STADIUM_FORM",
        formData: {name, value}
    }
}

export const resetNewStadiumForm = () => {
    return {
        type: "RESET_NEW_STADIUM_FORM"
    }
}

// asynchroneous action creators 