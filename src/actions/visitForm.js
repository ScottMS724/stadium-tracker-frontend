// synchroneous action creators 

export const updateVisitForm = (name, value) => {
    return {
        type: "UPDATE_NEW_VISIT_FORM",
        formData: {name, value}
    }
}

export const resetVisitForm = () => {
    return {
        type: "RESET_NEW_VISIT_FORM"
    }
}

// asynchroneous action creators 