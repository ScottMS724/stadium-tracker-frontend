import { bindActionCreators } from "redux"

// synchroneous action creators 

export const updateNewStadiumForm = (name, value) => {
    return {
        type: "UPDATE_NEW_STADIUM_FORM",
        formData: {name, value}
    }
}

// asynchroneous action creators 