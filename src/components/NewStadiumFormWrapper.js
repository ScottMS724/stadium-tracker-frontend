import React from 'react'
import StadiumForm from './StadiumForm.js'
import { createStadium } from '../actions/myStadiums.js'
import { connect } from 'react-redux'

const NewStadiumFormWrapper = ({ history, createStadium }) => {
    const handleSubmit = (event, formData, userId, history) => {
        event.preventDefault()
        createStadium({
            ...formData,
            userId
        }, history)
    }

    return <StadiumForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createStadium })(NewStadiumFormWrapper)