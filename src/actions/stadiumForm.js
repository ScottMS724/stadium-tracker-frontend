// import { bindActionCreators } from "redux"

// synchroneous action creators 

export const updateStadiumForm = (name, value) => {
    return {
        type: "UPDATE_NEW_STADIUM_FORM",
        formData: {name, value}
    }
}

export const resetStadiumForm = () => {
    return {
        type: "RESET_NEW_STADIUM_FORM"
    }
}

export const setFormDataForEdit = stadium => {
    const stadiumFormData = {
        name: stadium.attributes.name,
        city: stadium.attributes.city,
        image: stadium.attributes.image 
    }

    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        stadiumFormData 
    }
}

// asynchroneous action creators 